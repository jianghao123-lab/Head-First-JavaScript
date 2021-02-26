function writeCookie(name, value, days){
	// By default,there is no expiration so the cookie is temporaty
	var expires="";
	// Spacifying a number of days makes the cookie persistent
	if(days) {
		var date= new Date();
		date.setTime(date.getTime()+(days *24 *60 *60 *10000));
		expires ="; expires=" + date.toGMTString();
		}
		// Set the cookie to the name, value and erpiration date
		document.cookie=name +"=" +value + expires +"; path=/";
}

function readCookie(name){
	// Find the specified cookie and return its value
	var searchName = name +"=";
	var cookies=document.cookie.split(';');
	for(var i=0;i<cookies.length;i++){
		var c=cookies[i];
		while (c.charAt(0) == ' ')
		c=c.substring(1,c.length);
		if(c.indexOf(searchName)==0)
		return c.substring(searchName.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	// Erase the specified cookie
	writeCookie(name ,"",-1);
}