function myFunction(){window.pageYOffset>=sticky?navbar.classList.add("sticky"):navbar.classList.remove("sticky")}function currentDiv(e){showDivs(slideId=e)}function showDivs(e){var t,s=document.getElementsByClassName("mySlider"),o=document.getElementsByClassName("badge");for(e>s.length&&(slideId=1),e<1&&(slideId=s.length),t=0;t<s.length;t++)s[t].style.display="none";for(t=0;t<o.length;t++)o[t].className=o[t].className.replace(" badge-white","");s[slideId-1].style.display=" block",o[slideId-1].className+=" badge-white"}function carousel(){var e,t=document.getElementsByClassName("mySlides");for(e=0;e<t.length;e++)t[e].style.display=" none";slideIndex++,slideIndex>t.length&&(slideIndex=1),t[slideIndex-1].style.display="block",setTimeout(carousel,2e3)}function showMenu(){"none"==showM.style.display?showM.style.display="block":showM.style.display="none"}function showSubMenu(){"none"==showsubMenu.style.display?showsubMenu.style.display="block":showsubMenu.style.display="none"}function goToReserv(){var e=document.getElementById("adults").value,t=document.getElementById("children").value,s=parseInt(e)+parseInt(t);localStorage.setItem("quan",s)}function bookNow(){var e=document.getElementsByClassName("name-of-selected-room")[0].id;arr.push(e),localStorage.setItem("info",arr),console.log(arr)}window.onscroll=function(){myFunction()};var navbar=document.querySelector(".navbar"),sticky=navbar.offsetTop;$(function(){$("#reservation__check-in").datepicker({altField:"#reservation__check-in",altFormat:" d MM, yy"})}),$(function(){$("#reservation__check-out").datepicker({altField:"#reservation__check-out",altFormat:" d MM, yy"})});var slideId=1;try{showDivs(slideId)}catch(e){console.log(e)}try{carousel()}catch(e){console.log(e)}var slideIndex=1;try{showMenu()}catch(e){console.log(e)}var showM=document.getElementById("toggle");showM.style.display="none";try{showSubMenu()}catch(e){console.log(e)}var showsubMenu=document.getElementById("toggleSub");showsubMenu.style.display="none",window.addEventListener("load",function(){1==localStorage.getItem("quan")?(document.getElementsByClassName("single-type-room")[0].style.display="block",document.getElementsByClassName("double-type-room")[0].style.display="block",document.getElementsByClassName("deluxe-type-room")[0].style.display="block",document.getElementsByClassName("royal-type-room")[0].style.display="block"):2==localStorage.getItem("quan")?(document.getElementsByClassName("double-type-room")[0].style.display="block",document.getElementsByClassName("deluxe-type-room")[0].style.display="block",document.getElementsByClassName("royal-type-room")[0].style.display="block"):3==localStorage.getItem("quan")?(document.getElementsByClassName("deluxe-type-room")[0].style.display="block",document.getElementsByClassName("royal-type-room")[0].style.display="block"):document.getElementsByClassName("royal-type-room")[0].style.display="block"},!1);for(var arr=[],rooms=document.getElementsByClassName("universal-room"),i=0;i<rooms.length;i++){var current=rooms[i];current.addEventListener("click",function(){this.style.borderColor="#374853",document.getElementsByClassName("name-of-selected-room")[0].value=this.textContent;var e=document.getElementsByClassName("name-of-selected-room")[0]=this.id;document.getElementsByClassName("name-of-selected-room")[0].id=e})}
//# sourceMappingURL=../maps/main.js.map
