const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 7000;

// Public folder path
const partials_path = path.join(__dirname,"/Templates/Partials");
const views_path = path.join(__dirname,"/Templates/views");
const public_path = path.join(__dirname,"../public");


app.use(express.static(public_path));

// View engine setup
app.set('view engine', 'hbs');
app.set('views', views_path);
hbs.registerPartials(partials_path);


app.get("",(req,res) => {
    res.render("index");
});

app.get("/about",(req,res) => {
    res.render("about");
});

app.get("/weather",(req,res) => {
    res.render("weather");
});


app.get("*",(req,res) => {
    res.render("errorPage");
});

app.listen(port,()=> {
    console.log(`Server started at port ${port}`);
});