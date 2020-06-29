"use strict";

var team = [];
// var SocialMedia = [];

function TeamMember(name, url, title, email) {
  this.name = name;
  this.url = url;
  this.title = title;
  this.email = email;

  team.push(this);
}

new TeamMember(
  "Walid Afifi",
  "assets/bag.jpg",
  "Team Leader",
  "waleed-afifi@windowslive.com"
);
new TeamMember(
  "Hidaya Syam",
  "assets/scissors.jpg",
  "developer",
  "hidayasyam98@gmail.com"
);
new TeamMember(
  "Shadi Zaqout",
  "assets/shark.jpg",
  "developer",
  "shadizaqout@gmail.com"
);
new TeamMember(
  "Raghad Anees",
  "assets/pen.jpg",
  "developer",
  "Raghad.anees@hotmail.com"
);
new TeamMember(
  "Zaid Nusair",
  "assets/dragon.jpg",
  "developer",
  "zaid.nusair@hotmail.com"
);

console.log(team);

function contact() {
  var row = document.getElementById("row");

  for (var i = 0; i < team.length; i++) {
    var column = document.createElement("div");
    column.setAttribute("id", "column");
    row.appendChild(column);

    var card = document.createElement("div");
    card.setAttribute("id", "card");
    column.appendChild(card);

    var img = document.createElement("img");
    img.height = 300;
    img.width = 250;
    img.setAttribute("src", team[i].url);
    card.appendChild(img);

    var container = document.createElement("div");
    container.setAttribute("id", "container");
    card.appendChild(container);

    var h2 = document.createElement("h2");
    h2.textContent = team[i].name;
    container.appendChild(h2);

    var p1 = document.createElement("p");
    p1.textContent = team[i].title;
    container.appendChild(p1);

    var p2 = document.createElement("p");
    p2.textContent = team[i].email;
    container.appendChild(p2);

    var p3 = document.createElement("p");
    p3.textContent = "socialmedia";
    container.appendChild(p3);
  }
}
contact();
