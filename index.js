const lines = document.querySelector("#lines");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const o = document.querySelector("#nav2");
lines.addEventListener("click",() =>{
    bar1.classList.toggle("animate1");
    bar2.classList.toggle("animate2");
    bar3.classList.toggle("animate3");
    o.classList.toggle("open");
});