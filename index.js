const express = require("express");
const app = express();

let port = 3000;


app.listen(port,()=>{
    console.log(`express started on ${port} number`);
});

app.get("/",(req,res)=>{
    res.send("you are in root page")
});

app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    console.log(username);
    res.send(`<h1> welcome : ${username} id : ${id} hello guys  </h1>`)
})

app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("<h1>you doesnt enter something</h1>")
    }
   console.log(req.query);
   res.send(`<h1> You searched for ${q} </h1>`)
})

// app.get("*",(req,res)=>{
//     res.send("this Page doesnt exist")
// });

// app.get("/apple",(req,res)=>{
//     res.send("you are in apple page")
// });
// app.post("/",(req,res)=>{
//     res.send("you send a post request to root")
// })


// app.use((req,res)=>{
//     console.log("request recived");
// });

