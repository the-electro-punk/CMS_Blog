const Handlebars = require("handlebars")

let title = document.getElementById('inputTitle')
let story = document.getElementById('inputText')

const addBTN = document.getElementById('newBlogBTN')

addBTN.addEventListener('click', fill_template)

// function fill_template() {
//     var data = {
//         title: `${title.value}`,
//         text: `${story.value}`,
//         footer: "this is a footer"
//     };
//     var template = Handlebars.compile(document.querySelector("#template").innerHTML);
//     var filled = template(data);
//     document.querySelector("#output").innerHTML = filled;
//     window.location = 'C:/Users/Ben/Desktop/_Coding BootCamp/_weeks lessons/week 14/CMS_Blog/Index.html'
// }