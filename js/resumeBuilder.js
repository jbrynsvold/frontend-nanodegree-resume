var formattedName = HTMLheaderName.replace("%data%", "Jason Brynsvold");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

