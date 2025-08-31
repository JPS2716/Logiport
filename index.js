import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// serve static files (css, js, images) from "public" folder
app.use(express.static("public"));

app.get("/", (req, res) => {
   res.render("index.ejs");  // looks for views/index.ejs
});
app.get("/index", (req, res) => {
   res.render("index.ejs");  // looks for views/index.ejs
});

app.get("/index2", (req, res) => {
   res.render("index.ejs"); // looks for views/index2.ejs
});

app.get("/index3", (req,res)=>{
   res.render("index3.ejs"); // looks for views/index3.ejs
});

app.get("/index4", (req,res)=>{
   res.render("index4.ejs"); // looks for views/index3.ejs
});

app.get("/index5", (req,res)=>{
   res.render("index5.ejs"); // looks for views/index3.ejs
});

app.get("/login", (req, res) => {
   res.render("login.ejs"); // looks for views/index2.ejs
});

app.get("/reply", (req, res) => {
   res.render("reply.ejs"); // looks for views/index2.ejs
});
app.get("/temp", (req, res) => {
   res.render("temp.ejs"); // looks for views/index2.ejs
});

app.listen(port, () => {
   console.log(`Server running on ${port}.`);
});
