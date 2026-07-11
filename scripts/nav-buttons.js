const catNextBtn = document.querySelectorAll(".navNextBtn");
const catPrevBtn = document.querySelectorAll(".navPrevBtn");

/* For comic-show container*/
const csNextBtn = document.querySelector("#csNextBtn")
const csPrevBtn = document.querySelector("#csPrevBtn")

function nxtBtn(element, classElement, container) {
    element.addEventListener("click", () => {
        const row = element.closest(classElement).querySelector(container);
        row.scrollLeft += 300;
    })
}
function preBtn(element, classElement, container) {
    element.addEventListener("click", () => {
        const row = element.closest(classElement).querySelector(container);
        row.scrollLeft -= 300;
    })
}

catNextBtn.forEach(next => {
nxtBtn(next, ".comic-category", ".comics-container")
})

catPrevBtn.forEach(prev => {
    preBtn(prev, ".comic-category", ".comics-container")
})
