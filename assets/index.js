"use strict";

const projNav1 = document.getElementById("projects-nav-1");
const projNav2 = document.getElementById("projects-nav-2");
const projNav3 = document.getElementById("projects-nav-3");
const serviceNav1 = document.getElementById("services-nav-1");
const serviceNav2 = document.getElementById("services-nav-2");
const serviceNav3 = document.getElementById("services-nav-3");

const projNavs = [projNav1, projNav2, projNav3];
const servNavs = [serviceNav1, serviceNav2, serviceNav3];

const toggleActive = (e, arr, property) => {
    
    arr.forEach(i => {
        i.classList.remove(`${property}`)
    });
    e.classList.add(`${property}`);
    console.log(property);
}

servNavs.forEach(e => {
    e.addEventListener("click", function(){toggleActive(e, servNavs, 'serv-active')})
})

projNavs.forEach(e => {
    e.addEventListener("click", function(){toggleActive(e, projNavs, 'proj-active')})
})