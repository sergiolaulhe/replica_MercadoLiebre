const express = require("express");
const path = require("path");
const app = express();

app.set('view engine', 'ejs');

const publicFolderPath = path.resolve(__dirname, "./public");

app.use(express.static(publicFolderPath));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running in port ${port}`));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get("/register.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/login.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});



