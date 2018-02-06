function activeRow(x) {
	$(x).addClass("bg-info");
}

function remove(x) {
	$(".tRow1").removeClass(x);
	$(".tRow2").removeClass(x);
	$(".tRow3").removeClass(x);
	$(".tRow4").removeClass(x);
	$(".tRow5").removeClass(x);
	$(".tRow6").removeClass(x);
	$(".tRow7").removeClass(x);
	$(".tRow8").removeClass(x);
	$(".tRow9").removeClass(x);
	$(".tRow10").removeClass(x);
	$(".tRow11").removeClass(x);
	$(".tRow12").removeClass(x);
	$(".tRow13").removeClass(x);
}
function pick() {
	var dt = new Date();
	var hh, mm, ss = 0;
	
	hh = dt.getHours();
	mm = dt.getMinutes();
	ss = dt.getSeconds();
	
	remove("bg-info");
	
	if((hh == 8) && (mm < 45)) {
		activeRow(".tRow1");
	} else if((hh == 9) && (mm <= 35) && (mm < 40)) {
		activeRow(".tRow2");
	} else if((hh == 9) && (mm >= 40)) {
		activeRow(".tRow3");
	} else if((hh == 10) && (mm >= 30)) {
		activeRow(".tRow4");
	} else if((hh == 11) && (mm >= 20)) {
		activeRow(".tRow5");
	} else if((hh == 12) && (mm >= 10)) {
		activeRow(".tRow6");
	} else if((hh == 13) && (mm >= 00) && (mm < 50)) {
		activeRow(".tRow7");
	} else if((hh == 13) && (mm >= 50)) {
		activeRow(".tRow8");
	} else if((hh == 14) && (mm >= 40)) {
		activeRow(".tRow9");
	} else if((hh == 15) && (mm >= 30)) {
		activeRow(".tRow10");
	} else if((hh == 16) && (mm >= 20)) {
		activeRow(".tRow11");
	} else if((hh == 17) && (mm >= 10)) {
		activeRow(".tRow12");
	} else if((hh == 18) && (mm >= 00)) {
		activeRow(".tRow13");
	}
}

$(document).ready(function() {
	/*
	$(".top").add(".middle").addClass("selected");
	*/
	//var t = setInterval("toggleRow('.tRow1')", 7000);
	//$(".tRow1").addClass("bg-success");
	var t = setInterval('pick()', 1000);
});