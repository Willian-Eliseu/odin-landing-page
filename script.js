// document.addEventListener('DOMContentLoaded', function() {
//   const menuToggle = document.querySelector('.menu-toggle');
//   const navBarNav = document.querySelector('.navbar-nav');

//   menuToggle.addEventListener('click', function() {
//     navBarNav.classList.toggle('show');
//   });
// });


document.addEventListener('DOMContentLoaded', function () {
  // Se um link tiver dropdown, adiciona o toggle do submenu
  // const links = document.querySelectorAll('nav ul li a:not(:only-child)');
  // links.forEach(link => {
  //   link.addEventListener('click', function (e) {
  //     const dropdown = this.parentElement.querySelector('.nav-dropdown');
  //     if (dropdown) {
  //       dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  //     }

  //     // Fecha outros dropdowns
  //     document.querySelectorAll('.nav-dropdown').forEach(otherDropdown => {
  //       if (otherDropdown !== dropdown) {
  //         otherDropdown.style.display = 'none';
  //       }
  //     });

  //     e.stopPropagation();
  //   });
  // });

  // Clique fora do dropdown fecha todos
  // document.documentElement.addEventListener('click', function () {
  //   document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
  //     dropdown.style.display = 'none';
  //   });
  // });

  // Toggle do menu de navegação
  const navToggle = document.getElementById('nav-toggle');
  navToggle.addEventListener('click', function () {
    const navUl = document.querySelector('nav ul');
    if (navUl.style.display === 'block') {
      navUl.style.display = 'none';
    } else {
      navUl.style.display = 'block';
    }

    // Alterna classe "active" no botão hamburguer
    this.classList.toggle('active');
  });
});
