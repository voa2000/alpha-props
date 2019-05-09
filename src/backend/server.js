const express = require('express');
const app = express();
const port = 5000;

app.get("/testBackend", (req, res) => {
    res.send("Let's test the backend");
})

app.listen(port, () => {
    console.log(`The backend is running at port number: ${port}`);
})
