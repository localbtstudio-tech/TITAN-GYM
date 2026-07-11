import "./style.css";

import { initAnimations } from "./js/animations";

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

initAnimations();

import { initCounter } from "./js/counter";

initCounter();

import { initSwiper } from "./js/swiper";

initSwiper();


import { initProgressBar } from "./js/progress";

initProgressBar();


import { initCursor } from "./js/cursor";

initCursor();

import { initSpotlight } from "./js/spotlight";

initSpotlight();

import { initParallax } from "./js/parallax";

initParallax();


const programs = {

strength:{

title:"Strength Training",

description:"Build maximum strength through progressive overload and compound movements.",

list:[
"Bench Press",
"Squat",
"Deadlift",
"Overhead Press",
"Barbell Row"
]

},

cardio:{

title:"Cardio",

description:"Improve endurance and burn calories with high intensity sessions.",

list:[
"Treadmill",
"HIIT",
"Cycling",
"Rowing",
"Jump Rope"
]

},

crossfit:{

title:"CrossFit",

description:"Functional workouts combining strength and conditioning.",

list:[
"Burpees",
"Wall Balls",
"Kettlebells",
"Box Jumps",
"Pull Ups"
]

},

powerlifting:{

title:"Powerlifting",

description:"Master the big three lifts with expert coaching.",

list:[
"Squat",
"Bench",
"Deadlift",
"Mobility",
"Competition Prep"
]

},

nutrition:{

title:"Nutrition",

description:"Personal meal plans to maximize results.",

list:[
"Calories",
"Protein",
"Meal Timing",
"Recovery",
"Hydration"
]

},

personal:{

title:"Personal Training",

description:"One-on-one coaching designed around your goals.",

list:[
"Custom Program",
"Body Analysis",
"Weekly Tracking",
"Technique",
"Support"
]

}

};

window.openProgramModal=function(name){

const modal=document.getElementById("programModal");

document.getElementById("modalTitle").textContent=programs[name].title;

document.getElementById("modalDescription").textContent=programs[name].description;

document.getElementById("modalList").innerHTML=
programs[name].list.map(item=>`<li>✔ ${item}</li>`).join("");

modal.classList.add("active");

}

window.closeProgramModal=function(){

document.getElementById("programModal").classList.remove("active");

}