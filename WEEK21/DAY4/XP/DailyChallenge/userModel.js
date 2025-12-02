// models/userModel.js
const db = require('../config/db');

const UserModel = {
  async getAllUsers() {
    return db('users').select('*');
  },

  async getUserById(id) {
    return db('users').where({ id }).first();
  },

  async getUserByUsername(username) {
    return db('users').where({ username }).first();
  },

  async addUser(userData, password) {
    return await db.transaction(async (trx) => {
      const [userId] = await trx('users').insert(userData);
      await trx('hashpwd').insert({
        username: userData.username,
        password,
      });
      return userId;
    });
  },

  async updateUser(id, updates) {
    return db('users').where({ id }).update(updates);
  },
};

module.exports = UserModel;
