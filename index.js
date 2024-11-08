const express=require("express");
const fs=require('fs');
const app=express();
app.use(express.json());

//Add books
app.post("/addBooks",(req,res)=>{
    const book=req.body;
    fs.writeFile("books.json",JSON.stringify(book),(err)=>{
        if(err)
        {
            console.log("Error writing to file: " + err);
            res.status(500).send("Error writing to file: " + err);
        }
        else{
            console.log("Books saved successfuly!");
            res.send("Books saved");
        }
    });
})

//Get all books
// app.get("/Boooks",(req,res)=>
// {
//     fs.readFile("books.json",(req,res)=>
//     {
//         if(err)
//         {

//         }
//     })
// })
const port=8000;
app.listen(port,()=>
{
    console.log("Server is running on port: " + port);
});