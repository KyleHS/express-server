const express = require("express");
const app = express();

app.use(() => {
    console.log("New request")
})

//to find in browser go to:   localhost:2000
app.listen(2000, () => {  //sets up server locally on machine.  Port is 2000
    console.log("listening on port 2k")
});

