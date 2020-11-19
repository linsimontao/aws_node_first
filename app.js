const express = require('express');
const app = express();
const port = process.env.port || 3000;
console.log(port);
app.listen(port, () => {
    console.log("wazzapp?")
});

app.get('/', (req, res) => {
    res.send("welcome to the home")
})