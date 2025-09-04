document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navbar-toggle');
  navToggle.addEventListener('click', function () {
    const navUl = document.querySelector('nav ul');
    if (navUl.classList.contains('active')) {
      navUl.classList.remove('active');
    } else {
      navUl.classList.add('active');
    }

    this.classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('.navbar-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      const navUl = document.querySelector('nav ul');
      if (navUl.classList.contains('active')) {
        navUl.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  });
});
