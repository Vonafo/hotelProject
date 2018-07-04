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

