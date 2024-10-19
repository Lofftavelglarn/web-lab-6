'use strict'

const imageColumns = document.querySelectorAll(".image-container__item");

const applyDefaultStyles = () => {
    imageColumns.forEach(column => {
        column.style.flex = "1";
        column.style.padding = "20px";
    });
}

const updateColumnStyles = (activeIndex) => {
    applyDefaultStyles();
    imageColumns[activeIndex].style.flex = "1 0 auto"
    imageColumns[(activeIndex + 1) % imageColumns.length].style.flex = "0 0"
}

function handleNavigationClick(button) {
    const sectionIndex = parseInt(button.dataset.section);
    updateColumnStyles(sectionIndex);
}

applyDefaultStyles();

document.querySelectorAll(".header__button").forEach(button => {
    button.addEventListener("click", () => handleNavigationClick(button));
});
