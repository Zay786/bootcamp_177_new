const express = require("express")
const app = express()

app.use(express.json());

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'zaynah',
        password: '1234',
        database: 'hellokitty',
        port: 5432
    }
});

knex.select('name','nic').from('students').then(data => {console.log(data)})

app.get("/api/students",function(request,response){
    knex.select('id','name','nic').from('students')
    .then(data => {
        response.json(data)})
    })

app.get("/api/students/:id",function(request,response){
    const id = request.params.id
    knex.select('*').from('students').where({id:id})
    .then(data => {
        response.json(data)})
    })

app.post("/api/students",function(request,response){
    console.log("receiving student to create")
    console.log(request.body)
    console.log(request.body.name)
    //Insert into students(name) values("Sarah")
    knex('students').returning(['name','id','nic']).insert({name:request.body.name,nic:request.body.nic}

    ).then(data => console.log(data))
    response.json({'status':"ok"})  
    })  


app.put("/api/students/:id",function(request,response){
    // UPDATE students 
    const student_id = request.params.id
    const new_data = request.body
    console.log(student_id,new_data)
    knex('students').where({id:id}).update({name:request.body.name,nic:request.body.nic}).then(function(data)
    {console.log(data)})
    response.json({'status':"ok"})  
    })
    

app.delete("/api/students/:id",function(request,response){
    const student_id = request.params.id
    knex('students').where({id:student_id}).del().then(function(data){
        response.json({'status':"ok"})
    })
});

app.listen(5005,function(){
        console.log("Server is running on port 5005");
        })