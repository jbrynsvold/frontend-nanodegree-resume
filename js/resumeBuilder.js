var formattedName = HTMLheaderName.replace("%data%", "Jason Brynsvold");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
