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
});

//Get all books
app.get("/Books",(req,res)=>
{
    fs.readFile("books.json",(err,data)=>
    {
        if(err)
        {
            console.log("Error reading file: " + err);
            res.status(500).send("Error reading file: " + err);
        }
        else{
            console.log("File read successfuly");
            res.send(data);
        }
    });
});

//Update method
app.put("/updateBooks",(req,res)=>
{
    fs.truncate("books.json",8,(err)=>
    {
        if(err)
        {
            console.log("Error truncating file: " + err);
            res.status(500).send("Error truncating file: " + err);
        }
        else{
            console.log("File truncated successfuly");
            res.status(200).send("File truncated successfuly");
        }
    })
})

//Delete method
app.delete("/deleteBooks",(req,res)=>
{
    fs.unlink("books.json",(err)=>
    {
        if(err)
        {
            console.log("Error deleting file: " + err);
            res.status(500).send("Error deleting file: " + err);
        }
        else{
            console.log("File deleted successfuly");
            res.status(200).send("File deleted successfuly");
        }
    });
});
const port=8000;
app.listen(port,()=>
{
    console.log("Server is running on port: " + port);
});