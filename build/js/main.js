function myFunction() {
    window.pageYOffset >= sticky ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
}

window.onscroll = function () {
    myFunction()
};
var navbar = document.querySelector(".navbar"), sticky = navbar.offsetTop;
$(function () {
    $("#reservation__check-in").datepicker({altField: "#reservation__check-in", altFormat: " d MM, yy"})
}), $(function () {
    $("#reservation__check-out").datepicker({altField: "#reservation__check-out", altFormat: " d MM, yy"})
});
//# sourceMappingURL=../maps/main.js.map
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000);
}