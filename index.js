const handleAboutMe = function() {
  $('.sidebar').on('click', '.about-me', e => {
    e.preventDefault();
    generateAboutMeHTML();
  });
};

const handleProjects = function() {
  $('.sidebar').on('click', '.projects', e => {
    e.preventDefault();
    generateProjectsHTML();
  });
};

const generateAboutMeHTML = function() {
  $('.container').html(
    `
    <section class="about-section">
    <h3>About Me</h3>
    <p class="about-writeup">
    I started learning web development in early 2018. After going to school and practicing in my free time. After building static websites for a year. 
    I decided to take my interest to the next level and join a coding bootcamp to learn more and learn how to work as a team with other developers. 
    I am usually on medium reading up on the latest framework updates.
    </p>
    </section>
    `
  );
};

const generateProjectsHTML = function() {
  $('.container').html(`
    <section class="project-sectionL">
    <div class="left-box">
    <h3 class="project-titleL">Quiz App</h3>
    <p class="projectL-writeup">
    I started learning web development in early 2018. After going to school and practicing in my free time. After building static websites for a year. 
    I decided to take my interest to the next level and join a coding bootcamp to learn more and learn how to work as a team with other developers. 
    I am usually on medium reading up on the latest framework updates.
    </p>
    </div>
    <div class="right-box">

    </div>
    </section>
    `);
};

const render = function() {};

const runHandlers = function() {
  handleAboutMe();
  handleProjects();
};

runHandlers();
