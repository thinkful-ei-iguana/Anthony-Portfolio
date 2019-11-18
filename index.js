// controls the home button in the nav menu
const handleHome = function() {
  $(".sidebar").on("click", ".home", e => {
    e.preventDefault();
    location.reload();
  });
};

// controls the about-me button in the nav menu
const handleAboutMe = function() {
  $(".sidebar").on("click", ".about-me", e => {
    e.preventDefault();
    generateAboutMeHTML();
  });
};

// controls the projects button in the nav menu
const handleProjects = function() {
  $(".sidebar").on("click", ".projects", e => {
    e.preventDefault();
    generateProjectsHTML();
  });
};

//generates the home page HTML
const generateHomeHTML = function() {
  $(".home").toggleClass("active");
  $("button.about-me").removeClass("active");
  $("button.projects").removeClass("active");
  $(".about-section").hide();
  $(".project-sectionL").hide();
  $(".project-sectionR").hide();
  $(".child").show();
};

//generates the about-me page HTML
const generateAboutMeHTML = function() {
  $("button.about-me").toggleClass("active");
  $("button.projects").removeClass("active");
  $("button.home").removeClass("active");
  $(".about-section").show();
  $(".project-sectionL").hide();
  $(".project-sectionR").hide();
  $(".child").hide();
  $("button.about-me").toggleClss("active");
};

//generates the projects page HTML
const generateProjectsHTML = function() {
  $("button.projects").toggleClass("active");
  $("button.home").removeClass("active");
  $("button.about-me").removeClass("active");

  $(".about-section").hide();
  $(".project-sectionL").show();
  $(".project-sectionR").show();
  $(".child").hide();
  $("button.projects").toggleClss("active");
};

//handles the button functions
const runHandlers = function() {
  handleHome();
  handleAboutMe();
  handleProjects();
};

runHandlers();
generateHomeHTML();
