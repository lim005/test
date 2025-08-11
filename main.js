const express = require('express');
const app = express()
app.use(express.json())
const book =[
    {id:1,name:"Book one"},
    {id:2,name: "Book two"},
    {id:3, name:"Book three"}
]
let authors = [
    {id :1,name:"limlim"},
    {id:2,name:"kaka"},
    {id:3,name :"lulu"}
]

app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.get("/book",(req,res)=>{
    res.send(book)
})
app.post("/book",(req,res)=>
{
    const newBook = req.body;
    book.push(newBook);
    res.send(newBook);
})
app.get("/book/:id",(req,res)=>{
    const id = (req.params.id)
    const fbook = book.find(item => item.id == id)
    res.send(fbook ? fbook :"Not found")
})
app.patch("/book/:id",(req,res)=>{
    const update = req.params.id
    
    res.send({id:update,name : req.body.name})
})
app.delete("/book/:id",(req,res)=>{
    const id = req.params.id
    console.log(id)
    res.send("Not deleted yet!!")
})



app.get("/authors",(req,res)=>
{
    res.send(authors)
})
app.post("/authors",(req,res)=>{
    const addAuthor = req.body;
    authors.push(addAuthor);
    res.send(addAuthor)
})
app.get("/authors/:id",(req,res)=>{
    const id = req.params.id
    const author = authors.find(item => item.id == id)
    res.send(author ? author : "Not found")
})
app.patch("/authors/:id",(req,res)=>
{
    const id = req.params.id
    const updateIndex = authors.findIndex(item => item.id == id)
    authors[updateIndex].name = req.body.name
    res.send({id: id,data:req.body} )
})
app.delete("/authors/:id",(req,res)=>{
    const id = req.params.id
    authors = authors.filter(item => item.id != id)
    res.send(" deleted!!")
})

app.listen(3000,()=>{
    console.log("Main server is running on port 3000")
})