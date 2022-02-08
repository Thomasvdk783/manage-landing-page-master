// main js //

const scrollContainer = document.querySelector('.box-profil-comments');

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});



/// nav mobile ///
const navMobile = document.querySelector('.nav-header-mobile');
const btnOpenNavMobile = document.querySelector('.fa-bars');
const icons = document.querySelector('i')

icons.addEventListener("click", () => {
    navMobile.style.display = "block"
    icons.classList.toggle('fa-times');
});


