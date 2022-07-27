const closeModal = document.getElementById('close-icon');
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const menuList = document.querySelector(".mobile-menu-list");

closeModal.addEventListener('click', function(){
    mobileMenu.style.display = 'none';
});

menuList.addEventListener('click', function(){
    mobileMenu.style.display = 'none';
});

hamburger.addEventListener('click', function(){
    mobileMenu.style.display = "block";
});
