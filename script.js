function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
  
    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
}
  
function filterProjects(category) {
    const projects = document.getElementsByClassName('project-item');
    const buttons = document.getElementsByClassName('filter-btn');
    let selectedCategories = [];
  
    // Toggle the active class on the clicked button
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].innerText.toLowerCase() === category.toLowerCase()) {
        buttons[i].classList.toggle('active');
      }
      if (buttons[i].classList.contains('active') && buttons[i].innerText.toLowerCase() !== 'clear filters') {
        selectedCategories.push(buttons[i].innerText.toLowerCase());
      }
    }
  
    for (let i = 0; i < projects.length; i++) {
      let projectCategories = projects[i].className.split(' ');
      if (selectedCategories.length === 0) {
        projects[i].style.display = 'block';
      } else {
        if (selectedCategories.some(category => projectCategories.includes(category))) {
          projects[i].style.display = 'block';
        } else {
          projects[i].style.display = 'none';
        }
      }
    }
}
  
function clearFilters() {
    const projects = document.getElementsByClassName('project-item');
    const buttons = document.getElementsByClassName('filter-btn');
  
    // Remove active class from all buttons
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
  
    // Show all projects
    for (let i = 0; i < projects.length; i++) {
      projects[i].style.display = 'block';
    }
}
  
filterProjects('');
