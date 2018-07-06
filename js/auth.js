//Functions
function query(URL, accessToken) {
	var req = new XMLHttpRequest();
		
	req.open("GET", URL, false);
	req.setRequestHeader("Authorization", "bearer " + accessToken);			
	req.send(null);
	
	return req.responseText;
}

function queryResponse(URL, accessToken) {

	var response = query(URL, accessToken);	
	var data = JSON.parse(response);
	
	var events = [];
	
	for(var i = 0; i < data["value"].length; i++) {
		//Retrieve Data
		var s = data["value"][i]["subject"];
		var sDateTime = data["value"][i]["start"]["dateTime"];
		var sTimeZone = data["value"][i]["start"]["timeZone"];
		var eDateTime = data["value"][i]["end"]["dateTime"];	
		var eTimeZone = data["value"][i]["end"]["timeZone"];
		var oName = data["value"][i]["organizer"]["emailAddress"]["name"];			
		var oEmailAddress = data["value"][i]["organizer"]["emailAddress"]["address"];
		//Store Data
		var event = {subject: s,
				startDateTime: sDateTime,
				startTimeZone: sTimeZone,
				endDateTime: eDateTime,
				endTimeZone: eTimeZone,
				organizerName: oName, 
				organizerEmailAddress: oEmailAddress
		};	
		events.push(event);
	}

	for(var i = 0; i < events.length; i++) {
		var dt = new Date(events[i].startDateTime);
		
		for(var  j = 6; j < 18; j++) {
			if(j == dt.getHours()) {
				document.getElementById("bRow" + j).innerHTML = events[i].subject;
			}
		}
	}
}

function auth() {
	window.location.href = 'https://login.microsoftonline.com/cccbf502-6b91-40d6-be02-5ffa0eb711d6/oauth2/v2.0/authorize?client_id=33177856-90b2-4115-858a-6aeaace22739&response_type=id_token+token&redirect_uri=http%3A%2F%2Flocalhost%3a%2Findex.html&scope=openid%20https%3A%2F%2Fgraph.microsoft.com%2Fuser.read%20https%3A%2F%2Fgraph.microsoft.com%2Fcalendars.read%20https%3A%2F%2Fgraph.microsoft.com%2Fcalendars.read.shared&response_mode=fragment&state=0&nonce=7362CAEA-9CA5-4B43-9BA3-34D7C303EBA7';
}