const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const propertyList = require("./propertyList")


app.get("/api/properties", (req, res) => {
    res.send(propertyList);
});
app.use(express.static(path.join(__dirname, './../../build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "./../../build", 'index.html'));
});
app.listen(port, () => {
    console.log(`The backend is running at port number: ${port}`);
})


