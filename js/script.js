console.log("Climate Intelligence Loaded");

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.background="#FFF3E0";

});

card.addEventListener("mouseleave",()=>{

card.style.background="white";

});

});

function counter(id,end){

let count=0;

let speed=30;

let obj=document.getElementById(id);

if(!obj) return;

let interval=setInterval(()=>{

count++;

obj.innerHTML=count;

if(count>=end)

clearInterval(interval);

},speed);

}

counter("temp",48);

counter("cities",120);

counter("alerts",350);

const chart=document.getElementById("tempChart");

if(chart){

new Chart(chart,{

type:"line",

data:{

labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[{

label:"Temperature (°C)",

data:[38,40,41,43,45,44,42],

borderWidth:3,

fill:false,

tension:0.3

}]

},

options:{

responsive:true,

plugins:{

legend:{

display:true

}

}

}

});


}


const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

let subject=document.getElementById("subject").value.trim();

let message=document.getElementById("message").value.trim();

if(name==="" || email==="" || subject==="" || message===""){

alert("Please fill all fields.");

return;

}

alert("Thank you! Your message has been submitted successfully.");

form.reset();

});

}