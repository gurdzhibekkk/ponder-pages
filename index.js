import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));

let pageTexts = [];
let name = "";



app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/new-page", (req, res) => {
  res.render("new-page.ejs", { pageTexts: pageTexts });
});

app.get("/my-pages", (req, res) => {
  res.render("my-pages.ejs", { pageTexts: pageTexts });
})

app.get("/prices", (req, res) => {
  res.render("prices.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs", { name: name });
})

app.post("/friend", (req, res) => {
  name = req.body.username;
  res.render("about.ejs", { name: name });
})

app.post("/submit", (req, res) => {
  const newPageText = req.body.pageText;
  pageTexts.push(newPageText);
  console.log(pageTexts);

  res.render("my-pages.ejs", { pageTexts: pageTexts });
});

app.post("/delete-page", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});