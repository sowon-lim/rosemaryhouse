const menu = document.getElementById('mobileMenu');
const openBtn = document.getElementById('menuToggle');
const closeBtn = document.getElementById('menuClose');
const toggleBtn = document.getElementById('toggleRooms');
const subMenu = document.getElementById('subMenu');

let isOpen = false;

openBtn?.addEventListener('click', () => {
    menu.classList.remove('translate-x-full');
});

closeBtn?.addEventListener('click', () => {
    menu.classList.add('translate-x-full');
});

toggleBtn?.addEventListener('click', () => {
    isOpen = !isOpen;
    if (isOpen) {
        subMenu.classList.remove('max-h-0');
        subMenu.classList.add('max-h-[500px]');
    } else {
        subMenu.classList.add('max-h-0');
        subMenu.classList.remove('max-h-[500px]');
    }
});

// ✅ 메뉴 내 모든 링크 클릭 시 슬라이드 닫기
const allLinks = document.querySelectorAll('#mobileMenu a');
allLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('translate-x-full');
    });
});