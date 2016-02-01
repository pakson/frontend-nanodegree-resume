var awesomeThoughts = "I am Pawel and I am AWESOME!";

var name = "Pawel Kowalczyk";
var role = "Software Engineer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);


//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);


var wrongName = "audacity";
var correctName = "";
var index = (-1) * (wrongName.length - 1);

correctName = wrongName.slice(index).replace("u", "U");

console.log(correctName);

index = wrongName.indexOf("au") + "au".length;
console.log(index);

correctName = wrongName[1].toUpperCase() + wrongName.slice(index);

console.log(correctName);

var myArray = ["ala", "ola"];
console.log(myArray.length);

var sampleArr = [0,0,7];

var newArr = [];

sampleArr.forEach(function (item, index, array) {
	if (index !== array.length - 1) {
		newArr.push(item);
	} else {
		newArr.push(++item);
	}
});

newArr.forEach(function (item, index, array) {
	console.log(item, index);
});

var newArray = [];

newArray = sampleArr.slice(0);
var lastItem = newArray.pop();

newArray.push(lastItem+1);
newArray.forEach(function (item, index, array) {
	console.log(item, index);
});


var name = "AlbERt EINstEiN";

var finalName = name;

var words = finalName.split(" ");

words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();

words[1] = words[1].toUpperCase();

finalName = words.join(" ");

console.log(finalName);


var bio = {
	"name": "Pawel Kowalczyk",
	"role": "Software Engineer",
	"contacts": {
		"mobile": "607-069-602",
		"email": "paksonpl@gmail.com",
		"twitter": "@paksonpl",
		"location": "Wroclaw"
	},
	"bioPic": "images/pawel - bieg it.png",
	"welcomeMessage": "Hi, I'm Pawel!",
	"skills": [
		".net", "c#", "javascript"
	]
};

var work = {};
work.position = "Senior Software Engineer";
work.employer = "Contour Technology";
work.years = 12;
work.city = "Wroclaw";

var education = {};
education["name"] = "Wroclaw University of Technology";
education["years"] = "1993-1998";
education["city"] = "Wroclaw, Poland";

var education = {
	"schools" : [
		{
			"name" : "Wroclaw University of Technology",
			"location" : "Wroclaw",
			"degree" : "Masters",
			"majors" : ["CS"],
			"dates": 1998,
			"url" : "http://pwr.wroc.pl"
		},
		{
			"name" : "EZN",
			"location" : "Wroclaw",
			"degree" : "technition",
			"majors" : ["CS"],
			"dates": 1993,
			"url" : "http://ezn.wroc.pl"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Javascript Syntax",
			"school" : "Udacity",
			"dates" : 2016,
			"url" : "http://Udacity.com"
		}
	]
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").prepend(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

$("#main").append(HTMLworkTitle.replace("%data%", work["position"]));

$("#main").append(HTMLschoolName.replace("%data%", education.name));

var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';
var newHTML = html;
newHTML = newHTML.replace(/[<|>]/g, " "); 

//    newHTML = newHTML.replace(/</g, "&lt;");
//    newHTML = newHTML.replace(/>/g, "&gt; ");

console.log(newHTML);