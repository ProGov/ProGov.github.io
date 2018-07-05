/*Application ID: 33177856-90b2-4115-858a-6aeaace22739*/

/*GET https://login.microsoftonline.com/{tenant}/oauth2/authorize?
client_id=6731de76-14a6-49ae-97bc-6eba6914391e
&response_type=id_token
&redirect_uri=http%3A%2F%2Flocalhost%3a12345
&response_mode=form_post
&scope=openid
&state=12345
&nonce=7362CAEA-9CA5-4B43-9BA3-34D7C303EBA7
*/

function findRoom(room){
	queryResponse('https://graph.microsoft.com/v1.0/cccbf502-6b91-40d6-be02-5ffa0eb711d6/users/'+room+'@bbd.co.za/calendar/events?$select=subject%2corganizer%2cstart%2cend', access_token);
   /* if(room != "Assembly"){
		setTimeout(setToDefaultRoom(), 100000);
	}*/
}

function setToDefaultRoom(){
    alert("set back!");
	queryResponse('https://graph.microsoft.com/v1.0/cccbf502-6b91-40d6-be02-5ffa0eb711d6/users/Assembly@bbd.co.za/calendar/events?$select=subject%2corganizer%2cstart%2cend', access_token);
	document.getElementById('roomSelector')[0].value = "Assembly";
	document.getElementById('roomSelector')[0].innerHTML = "Assembly";
}

function queryResponse(URL, a_t) {

    var response = query(URL, a_t);
    var response_object = JSON.parse(response);
   // console.log(response_object);

    //clear table
    document.getElementById("t7").innerHTML ="___";
    document.getElementById("t8").innerHTML ="___";
    document.getElementById("t9").innerHTML ="___";
    document.getElementById("t10").innerHTML ="___";
    document.getElementById("t11").innerHTML ="___";
    document.getElementById("t12").innerHTML ="___";
    document.getElementById("t13").innerHTML ="___";
    document.getElementById("t14").innerHTML ="___";
    document.getElementById("t15").innerHTML ="___";
    document.getElementById("t16").innerHTML ="___";
    document.getElementById("t17").innerHTML ="___";
    document.getElementById("t18").innerHTML ="___";


    var subjects = [];
    var start_times = [];
    var end_times = [];
    var organisers = [];
    var td = getCurrentDate();

    var subject = "";
    var tStartTime = "";
    var tStartHour = "";
    var tEndTime = "";
    var tEndHour = "";
    var startNum = 0;
    var endNum = 0;
    //looping through all of today's meetings
    for (i in response_object["value"]){
    	//finding date of the current meeting
    	temp = response_object["value"][i]["start"]["dateTime"].split("T")[0];
    	if (temp == td) {
    		//finding subject of current meeting
    		subject = response_object["value"][i]["subject"];
            //alert(subject);

    		//finding start time of the current meeting
    		tStartTime = response_object["value"][i]["start"]["dateTime"].split("T")[1];
    		tStartHour = tStartTime.split(":")[0];
    		startNum = parseInt(tStartHour);

			//finding the end time
    		tStartTime = response_object["value"][i]["end"]["dateTime"].split("T")[1];
    		tEndHour = tEndTime.split(":")[0];
    		endNum = parseInt(tEndHour);

    		//find the hour difference to determine how many columns need to be merged

    		if(tStartHour == "07"){
    			document.getElementById("t7").innerHTML += subject;
    		}else if(tStartHour=="08"){
    			document.getElementById("t8").innerHTML += subject;
    		}else if(tStartHour=="09"){
    			document.getElementById("t9").innerHTML += subject;
    		}else if(tStartHour=="10"){
    			document.getElementById("t10").innerHTML += subject;
    		}else if(tStartHour=="11"){
    			document.getElementById("t11").innerHTML += subject;
    		}else if(tStartHour=="12"){
    			document.getElementById("t12").innerHTML += subject;
    		}else if(tStartHour=="13"){
    			document.getElementById("t13").innerHTML += subject;
    		}else if(tStartHour=="14"){
    			document.getElementById("t14").innerHTML += subject;
    		}else if(tStartHour=="15"){
    			document.getElementById("t15").innerHTML += subject;
    		}else if(tStartHour=="16"){
    			document.getElementById("t16").innerHTML += subject;
    		}else if(tStartHour=="17"){
    			document.getElementById("t17").innerHTML += subject;
    		}else if(tStartHour=="18"){
    			document.getElementById("t18").innerHTML += subject;
    		}

    		
    		
    		/*if(tEndHour == "07"){
    			document.getElementById("t7").innerHTML = subject;
    		}else if(tEndHour=="08"){
    			document.getElementById("t8").innerHTML = subject;
    		}else if(tEndHour=="09"){
    			document.getElementById("t9").innerHTML = subject;
    		}else if(tEndHour=="10"){
    			document.getElementById("t10").innerHTML = subject;
    		}else if(tEndHour=="11"){
    			document.getElementById("t11").innerHTML = subject;
    		}else if(tEndHour=="12"){
    			document.getElementById("t12").innerHTML = subject;
    		}else if(tEndHour=="13"){
    			document.getElementById("t13").innerHTML = subject;
    		}else if(tEndHour=="14"){
    			document.getElementById("t14").innerHTML = subject;
    		}else if(tEndHour=="15"){
    			document.getElementById("t15").innerHTML = subject;
    		}else if(tEndHour=="16"){
    			document.getElementById("t16").innerHTML = subject;
    		}else if(tEndHour=="17"){
    			document.getElementById("t17").innerHTML = subject;
    		}else if(tEndHour=="18"){
    			document.getElementById("t18").innerHTML = subject;
    		}*/

    		console.log(temp);
    		subjects.push(response_object["value"][i]["subject"]);
    		start_times.push(response_object["value"][i]["start"]["dateTime"]);
    		end_times.push(response_object["value"][i]["end"]["dateTime"]);
    		organisers.push(response_object["value"][i]["organizer"]["emailAddress"]["name"]);
        	console.log(subjects[i]);
        	console.log(organisers[i]);
    		console.log(start_times[i]);
    		console.log(end_times[i]);
    	}
    	// console.log(temp);
    	// subjects.push(response_object["value"][i]["subject"]);
    	// start_times.push(response_object["value"][i]["start"]["dateTime"]);
    	// end_times.push(response_object["value"][i]["end"]["dateTime"]);
    	// organisers.push(response_object["value"][i]["organizer"]["emailAddress"]["name"]);
     //    console.log(subjects[i]);
     //    console.log(organisers[i]);
    	// console.log(start_times[i]);
    	// console.log(end_times[i]);
    }

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

	        
function query(URL, a_t) {
    var req = new XMLHttpRequest();
    req.open("GET", URL, false);
    req.setRequestHeader("Authorization", "bearer " + a_t);
    req.send(null);
    return req.responseText;
}
