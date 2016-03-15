var formattedName = HTMLheaderName.replace("%data%", "Jason Brynsvold");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
var skills = ["HTML", "CSS", "Javascript", "Blogging"];
var bio = {
  "name": "Jason Brynsvold",
  "role": "Web Developer",
  "contact": "214-505-4000",
  "photo": "me.jpg",
  "welcome": "Here I am welcoming you to my page",
  "skills": skills
};

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(bio);
