const express = require('express');
const app = express();

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

knex.select('id','title','content').from('posts').then(data => {console.log(data)})

app.get("/api/posts", (req, res) => {
  knex.select('id', 'title', 'content')
    .from('posts')
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.get("/api/posts/:id",function(request,response){
    const id = request.params.id
    knex.select('*').from('posts').where({id:id})
    .then(data => {
        response.json(data)})
    })

app.post("/api/posts",function(request,response){
    console.log("receiving posts to create")
    console.log(request.body)
    console.log(request.body.name)
    console.log({id:request.body.id,title:request.body.title,content:request.body.content})
    knex('posts').returning(['id','title','content']).insert({id:request.body.id,title:request.body.title,content:request.body.content}

    ).then(data => console.log(data))
    response.json({'status':"ok"})  
    })  

app.put("/api/posts/:id",function(request,response){
    const post_id = request.params.id
    const new_data = request.body
    console.log(post_id,new_data)
    knex('posts').where({id:id}).update({id:request.body.id,title:request.body.title,content:request.body.content}).then(function(data)
    {console.log(data)})
    response.json({'status':"ok"})  
    }) 
    
app.delete("/api/posts/:id",function(request,response){
    const student_id = request.params.id
    knex('posts').where({id:post_id}).del().then(function(data){
        response.json({'status':"ok"})
    })
});

app.listen(5005,function(){
        console.log("Server is running on port 5005");
        })