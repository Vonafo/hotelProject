window.onscroll = function() {myFunction()};
var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

$( function() {
    $( "#reservation__check-in" ).datepicker({
        altField: "#reservation__check-in",
        altFormat: " d MM, yy"
    });
} );
$( function() {
    $( "#reservation__check-out" ).datepicker({
        altField: "#reservation__check-out",
        altFormat: " d MM, yy"
    });
} );

function goToReserv() {
    var adult = document.getElementById('adults').value;
    var child = document.getElementById('children').value;
    var res = parseInt(adult) + parseInt(child);
    localStorage.setItem('quan', res);
}


document.addEventListener('DOMContentLoaded',function () {
    switch (localStorage.getItem('quan')) {
        case 1:
            document.getElementsByClassName('blue')[0].style.display ="block";
            document.getElementsByClassName('red').style.display = 'block';
            document.getElementsByClassName('yellow').style.display = 'block';
            document.getElementsByClassName('green').style.display = 'block';
            break;
    }
},false);





var slideId = 1;
try{
    showDivs(slideId);
}
catch(err){
   console.log(err);
}

function currentDiv(n) {
    showDivs( slideId = n );
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

try{
    carousel();
}
catch (e) {
    console.log(e);
}
var slideIndex = 1;
function carousel() {
    var i;
    var slide = document.getElementsByClassName("mySlides");
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = " none";
    }
    slideIndex++;
    if (slideIndex > slide.length) {slideIndex = 1}
    slide[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000);
}

try{
    showMenu();
}
catch (err_2) {
    console.log(err_2);
}
var showM =  document.getElementById("toggle");
showM.style.display = "none";
function showMenu() {
    if (showM.style.display == "none") {
        showM.style.display = "block";
    }
    else {
        showM.style.display = "none";
    }
}
try{
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
