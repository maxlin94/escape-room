const menuBtn = document.querySelector('.menu-button');
const menuMobile = document.querySelector('.menu-mobile');
const menuMobileClose = document.querySelector('.menu-mobile__close');
const menuItems = Array.from(document.querySelector('.menu-mobile__ul').children);
const backdrop = document.querySelector('.backdrop');
menuBtn.addEventListener('click', () => {
    setTimeout(() => {
        menuMobile.style.display = 'flex';
    }
    , 100);
    backdrop.style.display = 'block';
    document.body.style.overflowY = 'hidden';
});

menuMobileClose.addEventListener('click', () => {
    menuMobile.style.display = '';
    backdrop.style.display = '';
    document.body.style.overflowY = '';
});
menuItems.forEach(child => child.addEventListener('click', () => {
    menuMobile.style.display = '';
    backdrop.style.display = '';
    document.body.style.overflowY = '';
 }));
 