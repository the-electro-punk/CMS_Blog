function fill_template() {
    var data = {
        title: 'why hadlebars are cool',
        list: [
            {name: "you can generate stuff"},
            {name: "Detroit Smash!!!"},
            {name: "Cyborg Zelda"},
            {name: "handlebars"},
            {name: "Luigi x Daisy 4eva!"}
        ],
        footer: "this is a footer"
    };
    var template = Handlebars.compile(document.querySelector("#template").innerHTML);
    var filled = template(data);
    document.querySelector("#output").innerHTML = filled;
}