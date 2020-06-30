"use strict";

var team = [];



function TeamMember(name, url, title, email, socialMedia) {
  this.name = name;
  this.url = url;
  this.title = title;
  this.email = email;
  this.socialMedia = socialMedia;
  team.push(this);
  
}


new TeamMember(
  "Walid Afifi",
  "https://ca.slack-edge.com/TNGRRLUMA-U012Q5MDF4L-dccfd6bec4d1-512",
  "Team Leader",
  "waleed-afifi@windowslive.com",
  ["", "", "https://github.com/waleedafifi90"]
  
  

);
new TeamMember(
  "Hidaya Syam",
  "https://ca.slack-edge.com/TNGRRLUMA-U012GJX14FP-c3e33099afd8-512",
  "developer",
  "hidayasyam98@gmail.com",
  ["", "", "https://github.com/HidayaSyam"]
  
);
new TeamMember(
  "Shadi Zaqout",
  "https://ca.slack-edge.com/TNGRRLUMA-U012J0NNTSN-ea21498c5418-512",
  "developer",
  "shadizaqout@gmail.com",
  ["", "", "https://github.com/shadizak"]
 
);
new TeamMember(
  "Raghad Anees",
  "https://ca.slack-edge.com/TNGRRLUMA-U013538G9QW-d0f43a465ecf-512",
  "developer",
  "Raghad.anees@hotmail.com",
["https://web.facebook.com/raghad.an.18","https://www.linkedin.com/in/raghad-anees/", "https://github.com/raghadanees"]
  
);
new TeamMember(
  "Zaid Nusair",
  "https://ca.slack-edge.com/TNGRRLUMA-U012J6UMT27-c9b9d891c533-512",
  "developer",
  "zaid.nusair@hotmail.com",
  ["https://web.facebook.com/zaid.nesairat/", "", "https://github.com/zaidnusair"]

);

console.log(team);

function contact() {
  var row = document.getElementById("row");

  for (var j = 0; j < team.length; j++) {
    var column = document.createElement("div");
    column.className ="column";
    row.appendChild(column);

    var card = document.createElement("div");
    // card.className = "card";
    column.appendChild(card);

    var img = document.createElement("img");
    img.height = 250;
    img.width = 200;
    img.setAttribute("src", team[j].url);
    card.appendChild(img);

    var container = document.createElement("div");
    container.className = "container";
    card.appendChild(container);

    var h2 = document.createElement("h2");
    h2.textContent = team[j].name;
    container.appendChild(h2);

    var p1 = document.createElement("p");
    p1.textContent = team[j].title;
    container.appendChild(p1);

    var p2 = document.createElement("p");
    p2.textContent = team[j].email;
    container.appendChild(p2);

    // var p3 = document.createElement("p");
    // p3.textContent = "socialmedia";
    // container.appendChild(p3);
var iconArr = ["fa fa-facebook-square", "fa fa-linkedin","fa fa-github-square" ];
   
for (var x = 0; x < team[j].socialMedia.length ; x++){

  var a = document.createElement('a');
   
    a.setAttribute('href', team[j].socialMedia[x]);

  container.appendChild(a);
   
    var i = document.createElement("i");

   i.className = iconArr[x];
    
    a.appendChild(i);
  }



  }
}
contact();
 
