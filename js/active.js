function activeRow(x) {
    $(x).addClass('bg-info');
	//$(x).toggleClass('bg-info');
}

function hideRow(x) {
    $(x).hide(5000);
}

function remove(x) {
    $(".tRow0").removeClass(x);
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
    $(".tRow14").removeClass(x);
    $(".tRow15").removeClass(x);
    $(".tRow16").removeClass(x);
}
function pick() {
	var dt = new Date();
	var hh, mm = 0;
	
	hh = dt.getHours();
	mm = dt.getMinutes();
    
	remove("bg-info");
    
    if(hh == 8) {
        if(mm <= 45) {
            activeRow(".tRow1");
        } else if(mm >= 50) {
            activeRow(".tRow2");
            hideRow(".tRow1");
        }
    } else if(hh == 9) {
        if(mm <= 35) {
            activeRow(".tRow2");
            hideRow(".tRow1");
        } else if(mm >= 40) {
            activeRow(".tRow3");
            hideRow(".tRow1");
            hideRow(".tRow2");
        }
    } else if(hh == 10) {
        if(mm <= 25) {
            activeRow(".tRow3");
            hideRow(".tRow1");
            hideRow(".tRow2");
        } else if(mm >= 30) {
            activeRow(".tRow4");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
        }
    } else if(hh == 11) {
        if(mm <= 15) {
            activeRow(".tRow4");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
        } else if(mm >= 20) {
            activeRow(".tRow5");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
        }
    } else if(hh == 12) {
        if(mm <= 5) {
            activeRow(".tRow5");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
        } else if ((mm >= 10) && (mm <= 55)) {
            activeRow(".tRow6");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
            hideRow(".tRow5");
        }
    } else if(hh == 13) {
        if(mm <= 45) {
            activeRow(".tRow7");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
            hideRow(".tRow5");
            hideRow(".tRow6");
        } else if(mm >= 50) {
            activeRow(".tRow8");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
            hideRow(".tRow5");
            hideRow(".tRow6");
            hideRow(".tRow7");
        }
    } else if(hh == 14) {
        if(mm <= 35) {
            activeRow(".tRow8");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
            hideRow(".tRow5");
            hideRow(".tRow6");
            hideRow(".tRow7");
        } else if(mm >= 40) {
            activeRow(".tRow9");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
            hideRow(".tRow5");
            hideRow(".tRow6");
            hideRow(".tRow7");
            hideRow(".tRow8");
        }
    } else if(hh == 15) {
        if(mm <= 25) {
            activeRow(".tRow9");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
            hideRow(".tRow5");
            hideRow(".tRow6");
            hideRow(".tRow7");
            hideRow(".tRow8");
        } else if(mm >= 30) {
            activeRow(".tRow10");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
            hideRow(".tRow5");
            hideRow(".tRow6");
            hideRow(".tRow7");
            hideRow(".tRow8");
            hideRow(".tRow9");
        }
    } else if(hh == 16) {
        if(mm <= 15) {
            activeRow(".tRow10");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
            hideRow(".tRow5");
            hideRow(".tRow6");
            hideRow(".tRow7");
            hideRow(".tRow8");
            hideRow(".tRow9");
        } else if(mm >= 20) {
            activeRow(".tRow11");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
            hideRow(".tRow5");
            hideRow(".tRow6");
            hideRow(".tRow7");
            hideRow(".tRow8");
            hideRow(".tRow9");
            hideRow(".tRow10");
        } 
    } else if(hh == 17) {
        if(mm <= 5) {
            activeRow(".tRow11");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
            hideRow(".tRow5");
            hideRow(".tRow6");
            hideRow(".tRow7");
            hideRow(".tRow8");
            hideRow(".tRow9");
            hideRow(".tRow10");
        } else if((mm >= 10) && (mm <= 55)) {
            activeRow(".tRow12");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
            hideRow(".tRow5");
            hideRow(".tRow6");
            hideRow(".tRow7");
            hideRow(".tRow8");
            hideRow(".tRow9");
            hideRow(".tRow10");
            hideRow(".tRow11");
        }
    } else if(hh == 18) {
        if(mm <= 45) {
            activeRow(".tRow13");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
            hideRow(".tRow5");
            hideRow(".tRow6");
            hideRow(".tRow7");
            hideRow(".tRow8");
            hideRow(".tRow9");
            hideRow(".tRow10");
            hideRow(".tRow11");
            hideRow(".tRow12");
        } else if(mm >= 50) {
            activeRow(".tRow14");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
            hideRow(".tRow5");
            hideRow(".tRow6");
            hideRow(".tRow7");
            hideRow(".tRow8");
            hideRow(".tRow9");
            hideRow(".tRow10");
            hideRow(".tRow11");
            hideRow(".tRow12");
            hideRow(".tRow13");
        }
    } else if(hh == 19) {
        if(mm <= 35) {
            activeRow(".tRow14");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
            hideRow(".tRow5");
            hideRow(".tRow6");
            hideRow(".tRow7");
            hideRow(".tRow8");
            hideRow(".tRow9");
            hideRow(".tRow10");
            hideRow(".tRow11");
            hideRow(".tRow12");
            hideRow(".tRow13");
        } else if(mm >= 40) {
            activeRow(".tRow15");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
            hideRow(".tRow5");
            hideRow(".tRow6");
            hideRow(".tRow7");
            hideRow(".tRow8");
            hideRow(".tRow9");
            hideRow(".tRow10");
            hideRow(".tRow11");
            hideRow(".tRow12");
            hideRow(".tRow13");
            hideRow(".tRow14");
        }
    } else if(hh == 20) {
        if(mm <= 25) {
            activeRow(".tRow15");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
            hideRow(".tRow5");
            hideRow(".tRow6");
            hideRow(".tRow7");
            hideRow(".tRow8");
            hideRow(".tRow9");
            hideRow(".tRow10");
            hideRow(".tRow11");
            hideRow(".tRow12");
            hideRow(".tRow13");
            hideRow(".tRow14");
        } else if(mm >= 30) {
            activeRow(".tRow16");
            hideRow(".tRow1");
            hideRow(".tRow2");
            hideRow(".tRow3");
            hideRow(".tRow4");
            hideRow(".tRow5");
            hideRow(".tRow6");
            hideRow(".tRow7");
            hideRow(".tRow8");
            hideRow(".tRow9");
            hideRow(".tRow10");
            hideRow(".tRow11");
            hideRow(".tRow12");
            hideRow(".tRow13");
            hideRow(".tRow14");
            hideRow(".tRow15");
        }
    } else if(hh == 21) {
        if(mm <= 15) {
            activeRow(".tRow16");
        }
    } else {
        $('.tRow0').toggleClass('bg-warning');
    }
}

$(document).ready(function() {
	var t = setInterval('pick()', 1000);
});