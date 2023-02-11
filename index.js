const express = require("express");
const app = express();
const port = 1111;

app.get("/", (req, res) => {
    res.send("henny");
});


app.get("/fish", (req, res)=> {
    let favDog = ["chihuahua", "salmon", "pitbull"];
    res.send(favDog[Math.floor(Math.random() * favDog.length)]);
});
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});