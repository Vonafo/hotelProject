"use strict";function myFunction(){window.pageYOffset>=sticky?navbar.classList.add("sticky"):navbar.classList.remove("sticky")}function currentDiv(e){showDivs(slideId=e)}function showDivs(e){var o,t=document.getElementsByClassName("mySlider"),l=document.getElementsByClassName("badge");for(e>t.length&&(slideId=1),e<1&&(slideId=t.length),o=0;o<t.length;o++)t[o].style.display="none";for(o=0;o<l.length;o++)l[o].className=l[o].className.replace(" badge-white","");t[slideId-1].style.display=" block",l[slideId-1].className+=" badge-white"}function showMenu(){"none"==showM.style.display?showM.style.display="block":showM.style.display="none"}function showSubMenu(){"none"==showsubMenu.style.display?showsubMenu.style.display="block":showsubMenu.style.display="none"}function goToReserv(){var e=document.getElementById("adults").value,o=document.getElementById("children").value,t=parseInt(e)+parseInt(o);localStorage.setItem("quan",t)}function bookNow(){var e=new FormData(myForm),o={},t=!0,l=!1,s=void 0;try{for(var n,a=e.entries()[Symbol.iterator]();!(t=(n=a.next()).done);t=!0){var m=n.value;o[m[0]]=m[1]}}catch(e){l=!0,s=e}finally{try{!t&&a.return&&a.return()}finally{if(l)throw s}}o=JSON.stringify(o),arr.push(o),null===localStorage.getItem("info")?arr.push(o):(arr.push(localStorage.getItem("info")),arr.push(o)),localStorage.setItem("info",arr);for(var r=arrRooms.length,d=0;d<r;++d){var c=arrRooms[d];if(c.id==document.getElementsByClassName("id-of-selected-room")[0].value){console.log(c),c.classList.add("disabled-room");break}}var y=[],i=document.getElementsByClassName("id-of-selected-room")[0].value;arr.push(i),localStorage.setItem("rooms",y),console.log(y)}window.onscroll=function(){myFunction()};var navbar=document.querySelector(".navbar"),sticky=navbar.offsetTop;$(function(){$("#reservation__check-in").datepicker({altField:"#reservation__check-in",altFormat:" d MM, yy"})}),$(function(){$("#reservation__check-out").datepicker({altField:"#reservation__check-out",altFormat:" d MM, yy"})});var slideId=1;try{showDivs(slideId)}catch(e){console.log(e)}window.addEventListener("load",function(){function e(){var t,l=document.getElementsByClassName("mySlides");for(t=0;t<l.length;t++)l[t].style.display=" none";o++,o>l.length&&(o=1),l[o-1].style.display="block",setTimeout(e,2e3)}var o=0;e()});try{showMenu()}catch(e){console.log(e)}var showM=document.getElementById("toggle");showM.style.display="none";try{showSubMenu()}catch(e){console.log(e)}var showsubMenu=document.getElementById("toggleSub");showsubMenu.style.display="none",window.addEventListener("load",function(){1==localStorage.getItem("quan")?(document.getElementsByClassName("single-type-room")[0].style.display="block",document.getElementsByClassName("double-type-room")[0].style.display="block",document.getElementsByClassName("deluxe-type-room")[0].style.display="block",document.getElementsByClassName("royal-type-room")[0].style.display="block"):2==localStorage.getItem("quan")?(document.getElementsByClassName("double-type-room")[0].style.display="block",document.getElementsByClassName("deluxe-type-room")[0].style.display="block",document.getElementsByClassName("royal-type-room")[0].style.display="block"):3==localStorage.getItem("quan")?(document.getElementsByClassName("deluxe-type-room")[0].style.display="block",document.getElementsByClassName("royal-type-room")[0].style.display="block"):document.getElementsByClassName("royal-type-room")[0].style.display="block"},!1);for(var arrRooms=[document.getElementById("single-room-1"),document.getElementById("single-room-2"),document.getElementById("single-room-3"),document.getElementById("single-room-4"),document.getElementById("double-room-1"),document.getElementById("double-room-2"),document.getElementById("double-room-3"),document.getElementById("double-room-4"),document.getElementById("deluxe-room-1"),document.getElementById("deluxe-room-2"),document.getElementById("deluxe-room-3"),document.getElementById("deluxe-room-4"),document.getElementById("royal-room-1"),document.getElementById("royal-room-2"),document.getElementById("royal-room-3"),document.getElementById("royal-room-4")],isActive=!1,prevElem,rooms=document.getElementsByClassName("universal-room"),i=0;i<rooms.length;i++){var current=rooms[i];current.addEventListener("click",function(){isActive?(prevElem.style.borderColor="#deaa86",this.style.borderColor="#374853",prevElem=this):(prevElem=this,this.style.borderColor="#374853",isActive=!0),document.getElementsByClassName("name-of-selected-room")[0].value=this.textContent,document.getElementsByClassName("id-of-selected-room")[0].value=this.id})}var arr=[],myForm=document.getElementById("bookingForm");
//# sourceMappingURL=../maps/main.js.map
