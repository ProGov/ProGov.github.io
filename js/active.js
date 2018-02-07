function activeRow(x, y) {
	$(x).addClass("bg-info");
    $(y).hide(10000);
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
    
    hh += 5;
    
	remove("bg-info");
    
    if(hh == 8) {
        if(mm <= 45) {
            activeRow(".tRow1", ".tRow16");
        } else if(mm >= 50) {
            activeRow(".tRow2", ".tRow1");
        }
    } else if(hh == 9) {
        if(mm <= 35) {
            activeRow(".tRow2", ".tRow1");
        } else if(mm >= 40) {
            activeRow(".tRow3", ".tRow2");
        }
    } else if(hh == 10) {
        if(mm <= 25) {
            activeRow(".tRow3", ".tRow2");
        } else if(mm >= 30) {
            activeRow(".tRow4", ".tRow3");
        }
    } else if(hh == 11) {
        if(mm <= 15) {
            activeRow(".tRow4", ".tRow3");
        } else if(mm >= 20) {
            activeRow(".tRow5", ".tRow4");
        }
    } else if(hh == 12) {
        if(mm <= 5) {
            activeRow(".tRow5", ".tRow4");
        } else if ((mm >= 10) && (mm <= 55)) {
            activeRow(".tRow6", ".tRow5");
        }
    } else if(hh == 13) {
        if(mm <= 45) {
            activeRow(".tRow7", ".tRow6");
        } else if(mm >= 50) {
            activeRow(".tRow8", ".tRow7");
        }
    } else if(hh == 14) {
        if(mm <= 35) {
            activeRow(".tRow8", ".tRow7");
        } else if(mm >= 40) {
            activeRow(".tRow9", ".tRow8");
        }
    } else if(hh == 15) {
        if(mm <= 25) {
            activeRow(".tRow9", ".tRow8");
        } else if(mm >= 30) {
            activeRow(".tRow10", ".tRow9");
        }
    } else if(hh == 16) {
        if(mm <= 15) {
            activeRow(".tRow10", ".tRow9");
        } else if(mm >= 20) {
            activeRow(".tRow11", ".tRow10");
        } 
    } else if(hh == 17) {
        if(mm <= 5) {
            activeRow(".tRow11", ".tRow10");
        } else if((mm >= 10) && (mm <= 55)) {
            activeRow(".tRow12", ".tRow11");
        }
    } else if(hh == 18) {
        if(mm <= 45) {
            activeRow(".tRow13", ".tRow12");
        } else if(mm >= 50) {
            activeRow(".tRow14", ".tRow13");
        }
    } else if(hh == 19) {
        if(mm <= 35) {
            activeRow(".tRow14", ".tRow13");
        } else if(mm >= 40) {
            activeRow(".tRow15", ".tRow14");
        }
    } else if(hh == 20) {
        if(mm <= 25) {
            activeRow(".tRow15", ".tRow14");
        } else if(mm >= 30) {
            activeRow(".tRow16", ".tRow15");
        }
    } else if(hh = 21) {
        if(mm <= 15) {
            activeRow(".tRow16", ".tRow15");
        }
    } else {
        $('.tRow0').toggleClass(".bg-warning");
    }
}

$(document).ready(function() {
	var t = setInterval('pick()', 1000);
});