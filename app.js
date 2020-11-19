const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("wazzapp?")
});

app.get('/', (req, res) => {
    res.send("welcome to the home")
})