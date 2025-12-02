const express = require("express")
const app = express()
var session = require('express-session')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

let users = [
    {
        "username" : "Nayar",
        "password" : "di"
    },
    {
        "username" : "Abraham",
        "password" : "alsodi"
    }
]

app.use(express.json());

app.get("/",function(req,res){
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/api/courses",function(req,res){
    if(req.session.user){
        res.json([{"name": "Python 1"},{"name": "Javascript 1"}])
    }
    else {
        res.status(403).redirect("/login")
    }
})

app.get("/api/login", function(req,res){
    // setting the session.user variable
    let user = users.filter(function(user) {
        if(user.username == req.query.username && user.password == req.query.password)
            return true
        else
            return false
    })
    console.log(user)
    if(user.length > 0){
        req.session.user = user[0]
        res.json({"status":"logged in", user: user[0]})
    }
    else {
        res.json({"status":"incorrect username or password"})
    }
})

app.listen(5005, function(){
    console.log("server is running")
})