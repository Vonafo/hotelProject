window.onscroll = function () {
    myFunction()
};
var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

$(function () {
    $("#reservation__check-in").datepicker({
        altField: "#reservation__check-in",
        altFormat: " d MM, yy"
    });
});
$(function () {
    $("#reservation__check-out").datepicker({
        altField: "#reservation__check-out",
        altFormat: " d MM, yy"
    });
});


var slideId = 1;
try {
    showDivs(slideId);
}
catch (err) {
    console.log(err);
}

function currentDiv(n) {
    showDivs(slideId = n);
}

function showDivs(n) {
    var j;
    var x = document.getElementsByClassName("mySlider");
    var dots = document.getElementsByClassName("badge");
    if (n > x.length) {
        slideId = 1
    }
    if (n < 1) {
        slideId = x.length
    }
    for (j = 0; j < x.length; j++) {
        x[j].style.display = "none";
    }
    for (j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" badge-white", "");
    }
    x[slideId - 1].style.display = " block";
    dots[slideId - 1].className += " badge-white";
}


window.addEventListener('load', function (){
    var slideIndex = 0;
    carousel();
    function carousel() {
        var i;
        var slide = document.getElementsByClassName("mySlides");
        for (i = 0; i < slide.length; i++) {
            slide[i].style.display = " none";
        }
        slideIndex++;
        if (slideIndex > slide.length) {
            slideIndex = 1
        }
        slide[slideIndex-1].style.display = "block";
        setTimeout(carousel, 2000);
    }
});

try {
    showMenu();
}
catch (err_2) {
    console.log(err_2);
}
var showM = document.getElementById("toggle");
showM.style.display = "none";

function showMenu() {
    if (showM.style.display == "none") {
        showM.style.display = "block";
    }
    else {
        showM.style.display = "none";
    }
}

try {
    showSubMenu();
}
catch (err_3) {
    console.log(err_3);
}
var showsubMenu = document.getElementById("toggleSub");
showsubMenu.style.display = "none";

function showSubMenu() {
    if (showsubMenu.style.display == "none") {
        showsubMenu.style.display = "block";
    }
    else {
        showsubMenu.style.display = "none";
    }
}


function goToReserv() {
    var adult = document.getElementById('adults').value;
    var child = document.getElementById('children').value;
    var res = parseInt(adult) + parseInt(child);
    localStorage.setItem('quan', res);
}


window.addEventListener('load', function toInvoke() {
    if (localStorage.getItem('quan') == 1) {
        document.getElementsByClassName('single-type-room')[0].style.display = "block";
        document.getElementsByClassName('double-type-room')[0].style.display = 'block';
        document.getElementsByClassName('deluxe-type-room')[0].style.display = 'block';
        document.getElementsByClassName('royal-type-room')[0].style.display = 'block';
    }
    else if (localStorage.getItem('quan') == 2) {
        document.getElementsByClassName('double-type-room')[0].style.display = 'block';
        document.getElementsByClassName('deluxe-type-room')[0].style.display = 'block';
        document.getElementsByClassName('royal-type-room')[0].style.display = 'block';
    }
    else if (localStorage.getItem('quan') == 3) {
        document.getElementsByClassName('deluxe-type-room')[0].style.display = 'block';
        document.getElementsByClassName('royal-type-room')[0].style.display = 'block';
    }
    else {
        document.getElementsByClassName('royal-type-room')[0].style.display = 'block';
    }
}, false);

 var arrRooms = [document.getElementById('single-room-1'),
            document.getElementById('single-room-2'),
            document.getElementById('single-room-3'),
            document.getElementById('single-room-4'),
            document.getElementById('double-room-1'),
            document.getElementById('double-room-2'),
            document.getElementById('double-room-3'),
            document.getElementById('double-room-4'),
            document.getElementById('deluxe-room-1'),
            document.getElementById('deluxe-room-2'),
            document.getElementById('deluxe-room-3'),
            document.getElementById('deluxe-room-4'),
            document.getElementById('royal-room-1'),
            document.getElementById('royal-room-2'),
            document.getElementById('royal-room-3'),
            document.getElementById('royal-room-4')];
var isActive = false;
var prevElem;
var rooms = document.getElementsByClassName("universal-room");
for (var i = 0; i < rooms.length; i++) {
    var current = rooms[i];
    current.addEventListener("click", function () {
        if (!isActive) {
            prevElem = this;
            this.style.borderColor = '#374853';
            isActive = true;
        } else {
            prevElem.style.borderColor = '#deaa86';
            this.style.borderColor = '#374853';
            prevElem = this;
        }
        document.getElementsByClassName("name-of-selected-room")[0].value = this.textContent;
        document.getElementsByClassName('id-of-selected-room')[0].value = this.id;

    });
}
var arr = [];
var myForm = document.getElementById('bookingForm');

function bookNow() {
    var formData = new FormData(myForm),
        result = {};
    for (var entry of formData.entries()) {
        result[entry[0]] = entry[1];
    }
    result = JSON.stringify(result);
    arr.push(result);
    let test = localStorage.getItem('info');
    if (test === null) {
        arr.push(result);
    } else {
        arr.push(localStorage.getItem('info'));
        arr.push(result);
    }
    localStorage.setItem('info', arr);
    let ln1 = arrRooms.length;
    for (var i = 0; i < ln1; ++i) {
        let cache = arrRooms[i];
        if (cache.id == document.getElementsByClassName('id-of-selected-room')[0].value) {
            console.log(cache);
            cache.classList.add('disabled-room');
              break;
        }
    }
    var newarr=[];
    var currentRoom = document.getElementsByClassName('id-of-selected-room')[0].value;
    arr.push(currentRoom);
    localStorage.setItem('rooms', newarr);
    console.log(newarr);
}
