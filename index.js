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
        For this app I worked with another member of my cohort and our goal was to build a quiz app that used DOM manipulation to change what the users saw. 
        We used vanilla JS and jQuery to manipulate the dom and styled the app with css. 
        The app also is a11y friendly so screen readers work properly and the user can fulling complete the quiz with keyboard.
      </p>
      <div class="button-row">
        <a class="github-button" href="https://github.com/thinkful-ei-iguana/Anthony-Maggie-Quiz" target="blank_"><i class="fab fa-github"></i></a>
        <a class="live-button" href="https://thinkful-ei-iguana.github.io/Anthony-Maggie-Quiz/" target="blank_"><i class="fas fa-desktop"></i></a>
      </div>
      </div>
      <div class="right-box">
        <img class="quiz-app-imgL" src="./imgs/quiz-app1.png"></img> 
      </div>
    </section>
    <section class="project-sectionR">
      <div class="left-box">
        <img class="quiz-app-imgR" src="./imgs/bookmark-app1.png"></img> 
      </div>
      <div class="right-box">
      <h3 class="project-titleR">Bookmarks App</h3>
      <p class="projectR-writeup">
        The bookmark app was my first solo project I completed. The app allows users to store their favorite websites. 
        For each bookmark the user can give it a Name, Rating, Description, and a link. I used vanilla JS and jQuery to manipulate the DOM. 
        I used a private API to make the users bookmarks persistent after refresh.
      </p>
      <div class="button-row">
        <a class="github-button" href="https://github.com/thinkful-ei-iguana/Anthony-Bookmarks-App" target="blank_"><i class="fab fa-github"></i></a>
        <a class="live-button" href="https://thinkful-ei-iguana.github.io/Anthony-Bookmarks-App" target="blank_"><i class="fas fa-desktop"></i></a>
      </div>
      </div>
    </section>
    <section class="project-sectionL">
      <div class="left-box">
      <h3 class="project-titleL">Park App</h3>
      <p class="projectL-writeup">
        For this project I also worked with another member of my cohort. The purpose of this app is to let users input one or more US state(s).
        Then when the user submits their form it sends a API call to a public park API. The API call returns a list of parks with their location 
        and descriptions in the state(s) the user inputed. The user can also choose how many parks they want returned.
      </p>
      <div class="button-row">
        <a class="github-button" href="https://github.com/thinkful-ei-iguana/Anthony-Austin-ParkApp" target="blank_"><i class="fab fa-github"></i></a>
        <a class="live-button" href="https://thinkful-ei-iguana.github.io/Anthony-Austin-ParkApp/" target="blank_"><i class="fas fa-desktop"></i></a>
      </div>
      </div>
      <div class="right-box">
        <img class="quiz-app-imgL" src="./imgs/parklist-app1.png"></img> 
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
