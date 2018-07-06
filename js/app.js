function auth() {
	window.location.href = 'https://login.microsoftonline.com/cccbf502-6b91-40d6-be02-5ffa0eb711d6/oauth2/v2.0/authorize?client_id=33177856-90b2-4115-858a-6aeaace22739&response_type=id_token+token&redirect_uri=http%3A%2F%2Flocalhost%3a52700%2Findex.html&scope=openid%20https%3A%2F%2Fgraph.microsoft.com%2Fuser.read%20https%3A%2F%2Fgraph.microsoft.com%2Fcalendars.read%20https%3A%2F%2Fgraph.microsoft.com%2Fcalendars.read.shared&response_mode=fragment&state=52700&nonce=7362CAEA-9CA5-4B43-9BA3-34D7C303EBA7';
}

function findRoom(room){
	queryResponse('https://graph.microsoft.com/v1.0/cccbf502-6b91-40d6-be02-5ffa0eb711d6/users/'+room+'@bbd.co.za/calendar/events?$select=subject%2corganizer%2cstart%2cend', access_token);
	// if(room != "Assembly"){
	// 	window.setTimeout(setToDefaultRoom(), 500);
	// }
}

function setToDefaultRoom(){
	queryResponse('https://graph.microsoft.com/v1.0/cccbf502-6b91-40d6-be02-5ffa0eb711d6/users/Assembly@bbd.co.za/calendar/events?$select=subject%2corganizer%2cstart%2cend', access_token);
	document.getElementById('roomSelector').value = "Assembly";
	document.getElementById('roomSelector').innerHTML = "Assembly";
}

function query(URL, a_t) {
    var req = new XMLHttpRequest();
    req.open("GET", URL, false);
    req.setRequestHeader("Authorization", "bearer " + a_t);
    req.send(null);
    return req.responseText;
}

function getCurrentDate() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	
	if(dd<10) {
	    dd = '0'+dd
	} 
	
	if(mm<10) {
	    mm = '0'+mm
	} 

	today = yyyy + '-' + mm + '-' + dd;
	console.log(today);
	return today;
}



function hourTimeFromDate(date) {
	var t = date.split("T")[1].split(":")[0];
	t = parseInt(t);
	return t;
}

function minTimeFromDate(date) {
	var t = date.split("T")[1].split(":")[1];
	t = parseInt(t);
	return t;
}

function queryResponse(URL, a_t) {
	//set the combo box here
    var response = query(URL, a_t);
    var response_object = JSON.parse(response);
    // console.log(response_object);

    // var first = response_object["value"][0];
    // console.log(first);
    // var first_subject = response_object["value"][0]["subject"];
    // console.log(first_subject);
    // var first_start = response_object["value"][0]["start"]["dateTime"];
    // console.log(first_start);
    // var first_end = response_object["value"][0]["end"]["dateTime"];
    // console.log(first_end);

    var subjects = [];
    var start_times = [];
    var end_times = [];
    var organisers = [];
    var td = getCurrentDate();
    //td = "2018-07-03";
    for (i in response_object["value"]){
    	temp = response_object["value"][i]["start"]["dateTime"].split("T")[0];
    	if (temp == td) {
    		console.log(temp);
    		subjects.push(response_object["value"][i]["subject"]);
    		start_times.push(response_object["value"][i]["start"]["dateTime"]);
    		end_times.push(response_object["value"][i]["end"]["dateTime"]);
    		organisers.push(response_object["value"][i]["organizer"]["emailAddress"]["name"]);
        	console.log(subjects[i]);
        	console.log(organisers[i]);
    		console.log(start_times[i]);
    		console.log(end_times[i]);
    		console.log(" ");
    	}


    	// console.log(temp);
    	// subjects.push(response_object["value"][i]["subject"]);
    	// start_times.push(response_object["value"][i]["start"]["dateTime"]);
    	// end_times.push(response_object["value"][i]["end"]["dateTime"]);
    	// organisers.push(response_object["value"][i]["organizer"]["emailAddress"]["name"]);
     // 	console.log(subjects[i]);
     // 	console.log(organisers[i]);
    	// console.log(start_times[i]);
    	// console.log(end_times[i]);
    	// console.log(" ");
    }
    populateTable(subjects, organisers, start_times, end_times);
}

function populateTable(subj, org, st, et) {
	var hourly_events = [[],[],[],[],[],[],[],[],[],[],[],[],[]]; //a 13 elt 2d array for the hourly slots
	var t1 = 0;
	var t2 = 0;
	var h1 = 0;
	var h2 = 0;
	var m1 = 0;
	var m2 = 0;
	var x;
	var y;
	//sort events by their start times
	for (x = 0; x < (st.length - 1); x++) {
		for (y = 0; y < (st.length - 1); y++) {
			t1 = st[y].split("T")[1];
			h1 = t1.split(":")[0];
			t2 = st[y+1].split("T")[1];
			h2 = t2.split(":")[0];
			if (h1 > h2) {
				//check hours
				//swap positions in all arrays
				var tmp = subj[y];
				subj[y] = subj[y+1];
				subj[y+1] = tmp;
				tmp = org[y];
				org[y] = org[y+1];
				org[y+1] = tmp;
				tmp = st[y];
				st[y] = st[y+1];
				st[y+1] = tmp;
				tmp = et[y];
				et[y] = et[y+1];
				et[y+1] = tmp;
			}
			else if (h1 == h2) {
				m1 = t1.split(":")[1];
				m2 = t2.split(":")[1];
				if (m1 > m2) {
					//check hours
					//swap positions in all arrays
					var tmp = subj[y];
    				subj[y] = subj[y+1];
    				subj[y+1] = tmp;
    				tmp = org[y];
    				org[y] = org[y+1];
    				org[y+1] = tmp;
    				tmp = st[y];
    				st[y] = st[y+1];
    				st[y+1] = tmp;
    				tmp = et[y];
    				et[y] = et[y+1];
    				et[y+1] = tmp;

				}
			}

		}
	}

	//logging to check if the sort works
	var i;
	for (i = 0; i < st.length; i++) {
		console.log(st[i]);
	}

	var s;
	for (s = 0; s < st.length; s++) {
		var start = hourTimeFromDate(st[s]);
		var end = hourTimeFromDate(et[s]);
		var end_m = minTimeFromDate(et[s]);
		if (end_m == 0) {
			end--;
		}
		t_start = st[s].split("T")[1];
		t_start = t_start.split(":")[0] + ":" + t_start.split(":")[1];
		t_end = et[s].split("T")[1];
		t_end = t_end.split(":")[0] + ":" + t_end.split(":")[1];
		event_string = "(" + t_start + "-" + t_end + "): " + subj[s] + "<br>";

		switch(start) {
			case 7:
				hourly_events[1].push(event_string);
				break;
			case 8:
				hourly_events[2].push(event_string);
				break;
			case 9:
				hourly_events[3].push(event_string);
				break;
			case 10:
				hourly_events[4].push(event_string);
				break;
			case 11:
				hourly_events[5].push(event_string);
				break;
			case 12:
				hourly_events[6].push(event_string);
				break;
			case 13:
				hourly_events[7].push(event_string);
				break;
			case 14:
				hourly_events[8].push(event_string);
				break;
			case 15:
				hourly_events[9].push(event_string);
				break;
			case 16:
				hourly_events[10].push(event_string);
				break;
			case 17:
				hourly_events[11].push(event_string);
				break;
			case 18:
				hourly_events[12].push(event_string);
				break;
		}
		if ((start - end) != 0) {
			var stop_time = start+1;
			switch(end) {
				case 18:
					hourly_events[1].push(event_string);
					if (stop_time == 18) {
						break;
					}
				case 17:
					hourly_events[11].push(event_string);
					if (stop_time == 17) {
						break;
					}
				case 16:
					hourly_events[10].push(event_string);
					if (stop_time == 16) {
						break;
					}
				case 15:
					hourly_events[9].push(event_string);
					if (stop_time == 15) {
						break;
					}
				case 14:
					hourly_events[8].push(event_string);
					if (stop_time == 14) {
						break;
					}
				case 13:
					hourly_events[7].push(event_string);
					if (stop_time == 13) {
						break;
					}
				case 12:
					hourly_events[6].push(event_string);
					if (stop_time == 12) {
						break;
					}
				case 11:
					hourly_events[5].push(event_string);
					if (stop_time == 11) {
						break;
					}
				case 10:
					hourly_events[4].push(event_string);
					if (stop_time == 10) {
						break;
					}
				case 9:
					hourly_events[3].push(event_string);
					if (stop_time == 9) {
						break;
					}
				case 8:
					hourly_events[2].push(event_string);
					if (stop_time == 8) {
						break;
					}
				case 7:
					hourly_events[1].push(event_string);
					if (stop_time == 7) {
						break;
					}
			}
		}
		
	}

	for (s = 1; s < hourly_events.length; s++) {
		var time_id;
		if (s+6 >= 10) {
			time_id = 'b'+ (s+6);
		}
		else {
			time_id = 'b0'+ (s+6);
		}
		console.log(time_id);
		var h;
		var booking = "";
		for (h in hourly_events[s]) {
			booking += hourly_events[s][h];
		}
		document.getElementById(time_id).innerHTML = booking;
	}

	// for x in range(len(distances)-1):
       //  for y in range(len(distances)-1):
       //      if distances[y] > distances[y+1]:
       //          distances[y], distances[y+1] = distances[y+1], distances[y]
       //          trainingLabels[y], trainingLabels[y+1] = trainingLabels[y+1], trainingLabels[y]
}