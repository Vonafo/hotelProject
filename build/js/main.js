function myFunction(){window.pageYOffset>=sticky?navbar.classList.add("sticky"):navbar.classList.remove("sticky")}function currentDiv(e){showDivs(slideId=e)}function showDivs(e){var s,n=document.getElementsByClassName("mySlider"),l=document.getElementsByClassName("badge");for(e>n.length&&(slideId=1),e<1&&(slideId=n.length),s=0;s<n.length;s++)n[s].style.display="none";for(s=0;s<l.length;s++)l[s].className=l[s].className.replace(" badge-white","");n[slideId-1].style.display=" block",l[slideId-1].className+=" badge-white"}function carousel(){var e,s=document.getElementsByClassName("mySlides");for(e=0;e<s.length;e++)s[e].style.display=" none";slideIndex++,slideIndex>s.length&&(slideIndex=1),s[slideIndex-1].style.display="block",setTimeout(carousel,2e3)}function showMenu(){"none"==showM.style.display?showM.style.display="block":showM.style.display="none"}function showSubMenu(){"none"==showsubMenu.style.display?showsubMenu.style.display="block":showsubMenu.style.display="none"}window.onscroll=function(){myFunction()};var navbar=document.querySelector(".navbar"),sticky=navbar.offsetTop;$(function(){$("#reservation__check-in").datepicker({altField:"#reservation__check-in",altFormat:" d MM, yy"})}),$(function(){$("#reservation__check-out").datepicker({altField:"#reservation__check-out",altFormat:" d MM, yy"})});var slideId=1;try{showDivs(slideId)}catch(e){console.log(e)}try{carousel()}catch(e){console.log(e)}var slideIndex=1;try{showMenu()}catch(e){console.log(e)}var showM=document.getElementById("toggle");showM.style.display="none";try{showSubMenu()}catch(e){console.log(e)}var showsubMenu=document.getElementById("toggleSub");showsubMenu.style.display="none";
//# sourceMappingURL=../maps/main.js.map
