// main js //

const scrollContainer = document.querySelector('.box-profil-comments');

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});