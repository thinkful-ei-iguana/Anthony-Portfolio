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
  $(".sidebar").html(
    `
    <nav class="nav1">
      <hr class="divider" />
            <button class="about-me">about me</button>
            <button class="projects">projects</button>
            <a class="github" href="https://github.com/AnthonyTB" target="blank_">github</a>
            <a class="linkedin" href="https://www.linkedin.com/in/anthonytb/" target="blank_">linkedin</a>
            <a class="email" href="mailto:anthonytb97@gmail.com">email</a>
    </nav>
  `
  );
  $(".about-section").hide();
  $(".project-sectionL").hide();
  $(".project-sectionR").hide();
  $(".child").show();
};

//generates the about-me page HTML
const generateAboutMeHTML = function() {
  $(".sidebar").html(
    `
    <nav class="nav2">
     <hr class="divider" />
            <button class="home">home</button>
            <button class="projects">projects</button>
            <a class="github" href="https://github.com/AnthonyTB" target="blank_">github</a>
            <a class="linkedin" href="https://www.linkedin.com/in/anthonytb/" target="blank_">linkedin</a>
            <a class="email" href="mailto:anthonytb97@gmail.com">email</a>
    </nav>
  `
  );
  $(".about-section").show();
  $(".project-sectionL").hide();
  $(".project-sectionR").hide();
  $(".child").hide();
};

//generates the projects page HTML
const generateProjectsHTML = function() {
  $(".sidebar").html(
    `
    <nav class="nav2">
     <hr class="divider" />
            <button class="home">home</button>
            <button class="about-me">about me</button>
            <a class="github" href="https://github.com/AnthonyTB" target="blank_">github</a>
            <a class="linkedin" href="https://www.linkedin.com/in/anthonytb/" target="blank_">linkedin</a>
            <a class="email" href="mailto:anthonytb97@gmail.com">email</a>
    </nav>
  `
  );
  $(".about-section").hide();
  $(".project-sectionL").show();
  $(".project-sectionR").show();
  $(".child").hide();
};

//handles the button functions
const runHandlers = function() {
  handleHome();
  handleAboutMe();
  handleProjects();
};

runHandlers();
generateHomeHTML();
