var dt, hh, mm, ss;

function check(i) {
    "use strict";
    return ((i < 10) ? "0" + i : i);
}

function startTime() {
    "use strict";
    dt = new Date();
	
	hh = dt.getHours();
	mm = dt.getMinutes();
	ss = dt.getSeconds();
	
	hh = check(hh);
	mm = check(mm);
	ss = check(ss);
	
	document.getElementById('clock').innerHTML = hh + ":" + mm;
}