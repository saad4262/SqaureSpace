window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 0) {
    nav.classList.add("scrolled"); // Add the "scrolled" class
  } else {
    nav.classList.remove("scrolled"); // Remove the "scrolled" class
  }
});

//   document.addEventListener("DOMContentLoaded", function() {
//     const navBar = document.querySelector(".nav-bar");
//     const navList = document.querySelector("nav ul");

//     navBar.addEventListener("click", function() {

//       navList.style.display = (navList.style.display === "block") ? "none" : "block";    });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   const signinButton1 = document.querySelector(".fa-bars");

//   signinButton1.addEventListener("click", () => {
//       window.location.href = "nav ul";
//   });
// });

const navIcon = document.getElementById("nav-bar1");
const navUl = document.getElementById("nav-ul");
// const container3 = document.querySelector(".container-3");
let isNavOpen = false;

navIcon.addEventListener("click", () => {
  if (isNavOpen) {
    
    navUl.style.left = "0%";
    // container3.style.display = "none";
  } else {
    
    navUl.style.left = "100%";
    // container3.style.display = "block";
  }
  isNavOpen = !isNavOpen;
});

const navIcon1 = document.getElementById("cross-1");
const navUl1 = document.getElementById("nav-ul");

navIcon1.addEventListener("click", () => {
  if (navUl.style.left === "0%") {

    navUl.style.left = "100%";
  } else {
    
    navUl.style.left = "0%";
  }
});
