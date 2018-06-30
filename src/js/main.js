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