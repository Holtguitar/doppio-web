"use strict";
// Fade-in Animation
const headerSection = document.querySelector("#header-section");
const servicesHeader = document.querySelector("#services__header");
const servicesContent = document.querySelector("#services__content");
const projectsHeader = document.querySelector("#projects__header");
const projectsContent = document.querySelector("#projects__content");
const bioContent = document.querySelector("#bio__content");
const contactTitle = document.querySelector("#contact__title");
const contactForm = document.querySelector("#contact__form");

const fadeIn = (element) => {
    element.classList.add("fade-in-view")
    element.classList.add("in-view")
}
//Nav Links IDs
const navHome = document.querySelector("#nav-home");
const navServices = document.querySelector("#nav-services");
const navProjects = document.querySelector("#nav-projects");
const navBio = document.querySelector("#nav-bio");
const navContact = document.querySelector("#nav-contact");
const home = 0
const services = 687;
const projects = 1632
const bio = 2578;
const contact = 3389;
const navLinks = [navHome, navServices, navProjects, navBio, navContact];

//Content pagination links IDs
const projNav1 = document.getElementById("projects-nav-1");
const projNav2 = document.getElementById("projects-nav-2");
const projNav3 = document.getElementById("projects-nav-3");
const serviceNav1 = document.getElementById("services-nav-1");
const serviceNav2 = document.getElementById("services-nav-2");
const serviceNav3 = document.getElementById("services-nav-3");
const projNavs = [projNav1, projNav2, projNav3];
const servNavs = [serviceNav1, serviceNav2, serviceNav3];


//                  Content Pagination
const toggleActive = (e, arr, property) => {
    arr.forEach(i => {
        i.classList.remove(`${property}`)
    });
    e.classList.add(`${property}`);
};

servNavs.forEach(e => {
    e.addEventListener("click", function(){toggleActive(e, servNavs, 'serv-active')})
});

projNavs.forEach(e => {
    e.addEventListener("click", function(){toggleActive(e, projNavs, 'proj-active')})
});



//              Nav Smooth Scroll - Account for sticky header
navHome.addEventListener("click", function(){
    window.scrollTo(0, home)
});

navServices.addEventListener("click", function(){
    window.scrollTo(0, services)
});

navProjects.addEventListener("click", function(){
    window.scrollTo(0, projects)
});

navBio.addEventListener("click", function(){
    window.scrollTo(0, bio)
});

navContact.addEventListener("click", function(){
    window.scrollTo(0, contact)
});

const toggleActiveLink = (link) => {
    navLinks.forEach(e => {
        e.classList.remove("active-link")
    });

    link.classList.add("active-link");
};

//                   Header Sticky on Scroll
const stickyHeader = () => {
    const header = document.querySelector(".header-section")
    let headerHeight = window.scrollY;
    const serviceHead = 687;
    const projHead = 1632
    const bioHead = 2578;
    const contactHead = 3389;

    if (headerHeight >= serviceHead && headerHeight < projHead){
        header.classList.add("fixed-top");
        header.classList.add("service__fixed-top");
        toggleActiveLink(navServices);
    }

    if(headerHeight >= 180){
        fadeIn(servicesContent);
        fadeIn(servicesHeader);
    }

    if (headerHeight < serviceHead){
        header.classList.remove("service__fixed-top");
        header.classList.remove("fixed-top");
        header.classList.remove("project__fixed-top");
        toggleActiveLink(navHome);
    }

    if(headerHeight >= projHead && headerHeight < bioHead) {
        header.classList.remove("service__fixed-top");
        header.classList.add("project__fixed-top");
        toggleActiveLink(navProjects);
    }

    if(headerHeight >= 1080){
        fadeIn(projectsHeader)
        fadeIn(projectsContent)
    }

    if(headerHeight >= bioHead && headerHeight < contactHead){
        toggleActiveLink(navBio)
    }

    if(headerHeight >= 2050) {
        fadeIn(bioContent)
    }

    if(headerHeight < projHead && headerHeight > serviceHead) {
        header.classList.remove("project__fixed-top");
        header.classList.add("service__fixed-top");
        toggleActiveLink(navServices);
    }

    if(headerHeight >= contactHead) {
        header.classList.remove("bio__fixed-top");
        header.classList.add("contact__fixed-top");
        toggleActiveLink(navContact);
    }

    if(headerHeight >= 2800) {
        fadeIn(contactTitle);
        fadeIn(contactForm);
    }

    if(headerHeight < contactHead && headerHeight > bioHead) {
        header.classList.remove("contact__fixed-top");
        header.classList.add("bio__fixed-top");
        toggleActiveLink(navBio);
    }

    console.log(headerHeight)
}

window.addEventListener("scroll", function(){
    stickyHeader();
})

window.addEventListener("load",function() {
    fadeIn(headerSection)
})