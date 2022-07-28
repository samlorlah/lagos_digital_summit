const closeModal = document.getElementById('close-icon');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuList = document.querySelector('.mobile-menu-list');

closeModal.addEventListener('click', () => {
  mobileMenu.style.left = '-100%';
});

menuList.addEventListener('click', () => {
  mobileMenu.style.left = '-100%';
});

hamburger.addEventListener('click', () => {
  mobileMenu.style.left = '0';
});
