const express = require("express");
const app = express();

//app.use(() => {
 //   console.log("New request")
 //   res.send("We received the request. This is the response")  //can only be done once
//})  //responds every time index.js is called in node

app.get('/', (req, res) => {  //method is known as routing
    res.send("homepage")
})

app.get('/cats', (req, res) => {  //makes it so that we have to go to localhost:2000/cats  to get this request
    res.send("Cat Request")
})

app.get('/dogs', (req, res) => {
    res.send("Dog Request")
})

//to find in browser go to:   localhost:2000
app.listen(2000, () => {  //sets up server locally on machine.  Port is 2000
    console.log("listening on port 2k")
});

