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
const mobileTitle = document.querySelector("#mobile-title");

//Nav Links IDs
const navHome = document.querySelector("#nav-home");
const navServices = document.querySelector("#nav-services");
const navProjects = document.querySelector("#nav-projects");
const navBio = document.querySelector("#nav-bio");
const navContact = document.querySelector("#nav-contact");
let home;
let services;
let projects;
let bio;
let contact;
const navLinks = [navHome, navServices, navProjects, navBio, navContact];


//Content pagination links IDs
const projNav1 = document.getElementById("projects-nav-1");
const projNav2 = document.getElementById("projects-nav-2");
const projNav3 = document.getElementById("projects-nav-3");
const projImgContainer = document.getElementById("projects__image-container")
const servNav1 = document.getElementById("services-nav-1");
const servNav2 = document.getElementById("services-nav-2");
const servNav3 = document.getElementById("services-nav-3");
const servImgContainer = document.getElementById("services__image-container")
const projNavs = [projNav1, projNav2, projNav3];
const servNavs = [servNav1, servNav2, servNav3];

const fadeIn = (element) => {
    element.classList.add("fade-in-view")
    element.classList.add("in-view")
}

if(window.innerWidth <= 640){
    // Mobile Phone
    home = 0;
    services = 768;
    projects = 1873;
    bio = 2980;
    contact = 3868;

    fadeIn(mobileTitle);
} else if(window.innerWidth > 640 && window.innerWidth <= 1007 ) {
    // Tablet
    home = 0;
    services = 687;
    projects = 1632;
    bio = 2578;
    contact = 3389;

    fadeIn(mobileTitle);
} else {
    // PC/Laptop
    home = 0;
    services = 767;
    projects = 1632;
    bio = 2578;
    contact = 3389;
}


//                  Content Pagination
const toggleActive = (e, arr, property) => {
    arr.forEach(i => {
        i.classList.remove(`${property}`)
    });

    e.classList.add(`${property}`);
};

servNavs.forEach(e => {
    e.addEventListener("click", function(){toggleActive(e, servNavs, 'serv-active')});
});

projNavs.forEach(e => {
    e.addEventListener("click", function(){toggleActive(e, projNavs, 'proj-active')})
});

if(window.innerWidth <= 640){
    // Mobile Phone
    projNav1.addEventListener("click", function(){
        projImgContainer.style.left = "0px";
    });
    
    projNav2.addEventListener("click", function(){
        // projImgContainer.style.left = "-1000px"
        projImgContainer.style.left = "-70vw";
    });
    
    projNav3.addEventListener("click", function(){
        // projImgContainer.style.left = "-2000px"
        projImgContainer.style.left = "-140vw";
    });
    
    servNav1.addEventListener("click", function(){
        servImgContainer.style.left = "0px";
    });
    
    servNav2.addEventListener("click", function(){
        // servImgContainer.style.left = "-1000px"
        servImgContainer.style.left = "-70vw";
    });
    
    servNav3.addEventListener("click", function(){
        // servImgContainer.style.left = "-2000px"
        servImgContainer.style.left = "-140vw";
    });

    fadeIn(mobileTitle);
} else if(window.innerWidth > 640 && window.innerWidth <= 1007 ) {
    // Tablet
   

    fadeIn(mobileTitle);
} else {
    // PC/Laptop
    projNav1.addEventListener("click", function(){
        projImgContainer.style.left = "0px";
    });
    
    projNav2.addEventListener("click", function(){
        // projImgContainer.style.left = "-1000px"
        projImgContainer.style.left = "-70vw";
    });
    
    projNav3.addEventListener("click", function(){
        // projImgContainer.style.left = "-2000px"
        projImgContainer.style.left = "-140vw";
    });
    
    servNav1.addEventListener("click", function(){
        servImgContainer.style.left = "0px";
    });
    
    servNav2.addEventListener("click", function(){
        // servImgContainer.style.left = "-1000px"
        servImgContainer.style.left = "-70vw";
    });
    
    servNav3.addEventListener("click", function(){
        // servImgContainer.style.left = "-2000px"
        servImgContainer.style.left = "-140vw";
    });
}




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