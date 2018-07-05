var days = ["Sunday", "Monday", "Tuesday",
            "Wednesday", "Thursday", "Friday",
            "Saturday"],
    months = ["January", "February", "March",
              "April", "May", "June", "July",
              "August", "September", "October",
              "November", "December"];
var yy = 0,
    mM = 0,
    ww = 0,
    date = 0,
    dd = 0,
    hh = 0,
    mm = 0,
    ss = 0,
    dt = 0;

function check(i) {
    "use strict";
    
    return ((i < 10) ? "0" + i : i);
}

function month() {
    'use strict';
    mM = dt.getMonth();
    
    return months[mM];
}

function day() {
    'use strict';
    
    dd = dt.getDay();
    
    return days[dd];
}

function startTime() {
    "use strict";
	
    dt = new Date();
    
	hh = dt.getHours();
	mm = dt.getMinutes();
	ss = dt.getSeconds();
    yy = dt.getFullYear();
    date = dt.getDate();

	hh = check(hh);
	mm = check(mm);
	ss = check(ss);
    date = check(date);
	
	document.getElementById('clock').innerHTML = hh + ":" + mm + ":" + ss;
   // document.getElementById('head').innerHTML = date + " " + month() + " " + yy;
}