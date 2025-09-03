document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navBarNav = document.querySelector('.navbar-nav');

  menuToggle.addEventListener('click', function() {
    navBarNav.classList.toggle('show');
  });
});