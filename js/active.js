var mon = " .mon",
    tue = " .tue",
    wed = " .wed",
    thu = " .thu",
    fri = " .fri",
    sat = " .sat",
    sun = " .sun",
    dd,
    dt,
    hh,
    mm,
    ss = new Date();

function activeCell(x) {
    'use strict';
    
    dd = dt.getDay();
    
    switch (dd) {
    case 0:
        $(x + sun).toggleClass('bg-info');
        break;
    case 1:
        $(x + mon).toggleClass('bg-info');
        break;
    case 2:
        $(x + tue).toggleClass('bg-info');
        break;
    case 3:
        $(x + wed).toggleClass('bg-info');
        break;
    case 4:
        $(x + thu).toggleClass('bg-info');
        break;
    case 5:
        $(x + fri).toggleClass('bg-info');
        break;
    default:
        $(x + sat).toggleClass('bg-primary');
    }
}
function activeTime(x) {
    'use strict';
    $('.time' + x).addClass('text-white').addClass('bg-dark');
}

function hideRows(x) {
    'use strict';
    
    for (var i = 1; i <= x; i++) {
        $(".tRow" + i).hide(5000);   
    }
}

function remove(x, y) {
    'use strict';
    
    $(".tRow" + x).removeClass(y);
}

function pick() {
    'use strict';
	
	hh = dt.getHours();
	mm = dt.getMinutes();
    
    for(var i = 0; i < 17; i++) {
        remove(i, "bg-info")
    }
    
    if (hh == 8) {
        if (mm <= 45) {
            activeCell(".tRow1");
            activeTime(1);
        } else if (mm >= 50) {
            activeCell(".tRow2");
            hideRows(1);
            activeTime(2);
        }
    } else if (hh == 9) {
        if (mm <= 35) {
            activeCell(".tRow2");
            hideRows(1);
            activeTime(2);
        } else if (mm >= 40) {
            activeCell(".tRow3");
            hideRows(2);
            activeTime(3);
        }
    } else if (hh == 10) {
        if (mm <= 25) {
            activeCell(".tRow3");
            hideRows(2);
            activeTime(3);
        } else if (mm >= 30) {
            activeCell(".tRow4");
            hideRows(3);
            activeTime(4);
        }
    } else if (hh == 11) {
        if (mm <= 15) {
            activeCell(".tRow4");
            hideRows(3);
            activeTime(4);
        } else if (mm >= 20) {
            activeCell(".tRow5");
            hideRows(4);
            activeTime(5);
        }
    } else if (hh == 12) {
        if (mm <= 5) {
            activeCell(".tRow5");
            hideRows(4);
            activeTime(5);
        } else if ((mm >= 10) && (mm <= 55)) {
            activeCell(".tRow6");
            hideRows(5);
            activeTime(6);
        }
    } else if (hh == 13) {
        if (mm <= 45) {
            activeCell(".tRow7");
            hideRows(6);
            activeTime(7);
        } else if (mm >= 50) {
            activeCell(".tRow8");
            hideRows(7);
            activeTime(8);
        }
    } else if (hh == 14) {
        if (mm <= 35) {
            activeCell(".tRow8");
            hideRows(7);
            activeTime(8);
        } else if (mm >= 40) {
            activeCell(".tRow9");
            hideRows(8);
            activeTime(9);
        }
    } else if (hh == 15) {
        if (mm <= 25) {
            activeCell(".tRow9");
            hideRows(8);
            activeTime(9);
        } else if (mm >= 30) {
            activeCell(".tRow10");
            hideRows(9);
            activeTime(10);
        }
    } else if (hh == 16) {
        if (mm <= 15) {
            activeCell(".tRow10");
            hideRows(9);
            activeTime(10);
        } else if (mm >= 20) {
            activeCell(".tRow11");
            hideRows(10);
            activeTime(11);
        }
    } else if (hh == 17) {
        if (mm <= 5) {
            activeCell(".tRow11");
            hideRows(10);
            activeTime(11);
        } else if ((mm >= 10) && (mm <= 55)) {
            activeCell(".tRow12");
            hideRows(11);
            activeTime(12);
        }
    } else if (hh == 18) {
        if (mm <= 45) {
            activeCell(".tRow13");
            hideRows(12);
            activeTime(13);
        } else if (mm >= 50) {
            activeCell(".tRow14");
            hideRows(13);
            activeTime(14);
        }
    } else if (hh == 19) {
        if (mm <= 35) {
            activeCell(".tRow14");
            hideRows(13);
            activeTime(14);
        } else if (mm >= 40) {
            activeCell(".tRow15");
            hideRows(14);
            activeTime(15);
        }
    } else if (hh == 20) {
        if (mm <= 25) {
            activeCell(".tRow15");
            hideRows(14);
            activeTime(15);
        } else if (mm >= 30) {
            activeCell(".tRow16");
            hideRows(15);
            activeTime(16);
        }
    } else if (hh == 21) {
        if (mm <= 15) {
            activeCell(".tRow16");
            hideRows(15);
            activeTime(16);
        }
    } else {
        $('.tRow0').hide(1000).show(500).delay(3000);
    }
}

$(document).ready(function () {
    'use strict';
	var u = setInterval('pick()', 1000);
    $('.class').addClass('bg-secondary').addClass('text-white');
    $('.tutorial').addClass('bg-success').addClass('text-white');
    $('.practical').addClass('bg-warning');
});