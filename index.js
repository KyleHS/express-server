const express = require("express");
const app = express();

//app.use(() => {
 //   console.log("New request")
 //   res.send("We received the request. This is the response")  //can only be done once
//})  //responds every time index.js is called in node

app.get('/', (req, res) => {  //method is known as routing
    res.send("homepage")
})

app.get('/r/:subreddit', (req, res) => { //
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit/<h1>`)
    res.send("this is a subreddit")
})

app.get('/r/:subreddit/:postID', (req, res) => { //
    const { subreddit, postID } = req.params;
    res.send(`<h1>Viewing Post ID: ${postID} on the subreddit/<h1>`)
    res.send("this is a subreddit")
})

app.post('/cats', (req, res) => {  //makes it so that we have to go to localhost:2000/cats  to get this request
    res.send("Cat Request")
})

app.get('/dogs', (req, res) => {
    res.send("Dog Request")
})

app.get('*', (req, res) => { //what happens when we enter a path that doesn't exits... counts as all other paths
    res.send("don't know this path")  //important to put after all
})

//to find in browser go to:   localhost:2000
app.listen(2000, () => {  //sets up server locally on machine.  Port is 2000
    console.log("listening on port 2k")
});

