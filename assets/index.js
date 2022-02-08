const addBTN = document.getElementById('newBlog')

addBTN.addEventListener('click', newBlog)

function newBlog() {
    window.location='C:/Users/Ben/Desktop/_Coding BootCamp/_weeks lessons/week 14/CMS_Blog/blogCreate.html'
}

const path = require('path');
var express = require('express');
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    // this creates a path to the html
    res.sendFile(path.join(__dirname, 'zelda.html'));
  })
  app.get('/CMS_blog', (req, res) => {
    // this creates a path to the html
    res.sendFile(path.join(__dirname, 'index.html'));
  })
  app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
})