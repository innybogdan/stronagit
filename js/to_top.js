
const toTopBtn = document.querySelector('.toTop');

// When the user scrolls down 1800px from the top of the document, show the icon
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
}

// toTopBtn.addEventListener("click", function () {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0
// });

toTopBtn.addEventListener("click", function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});