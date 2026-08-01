let current = 0;


let pages =
document.querySelectorAll(".page");



function nextPage(){


pages[current]
.classList.remove("active");


current++;


pages[current]
.classList.add("active");


}





function confirmDate(){


let date =
document.getElementById("date").value;



if(!date){

alert("Choose a day first ❤️");

return;

}



document.getElementById("result")
.innerHTML=

`
OUTING CONFIRMED ❤️
<br><br>

Reva
+
Me

<br><br>

Date:
${date}

<br><br>

Destination:
Anywhere with you

`;

}
