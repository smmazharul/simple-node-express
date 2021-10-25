const express =require('express');
const cors =require('cors');
const app=express();
app.use(cors());
app.use(express.json());
const port=5000;


app.get('/',(req,res)=>{
    res.send('my second ever Node server')
});

//array
const users=[
    //object
    {id:0,name:'rakib',email:'rakib@gmail.com', phone:'+520104541210'},
    {id:1,name:'sakib',email:'sakib@gmail.com', phone:'+520104541210'},
    {id:2,name:'dakib',email:'dakib@gmail.com', phone:'+520104541210'},
    {id:3,name:'fakib',email:'fakib@gmail.com', phone:'+520104541210'},
    {id:4,name:'yakib',email:'yakib@gmail.com', phone:'+520104541210'}
]


//daynamic API and Query search
app.get('/users',(req,res)=>{
    const search=req.query.search;
    if(search){
        const searchReasult = users.filter(user=>user.name.toLocaleLowerCase().includes(search))
        res.send(searchReasult)
        console.log(searchReasult);
    }
    else{
        res.send(users)
    }
})


//app.method
app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser)
    console.log('hiting the post',req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


//daynamic API with users ID
app.get ('/users/:id',(req,res)=>{
    const id =req.params.id
   const user=users[id]
   res.send(user)
})



app.listen(port,()=>{
    console.log('Listening to port',port);
})