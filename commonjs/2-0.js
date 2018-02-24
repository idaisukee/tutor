var J = require('julian-date');
var $ = require('jquery');
jd = new J;
console.log(jd.julian());
console.log(jd.julian()+3);

$(document).ready(function() {
	$("#here").text(jd.julian());
});
