const closeMenu = document.querySelector(".closeMnu");
const asideSection = document.querySelector("aside");
const openMenu = document.querySelector(".openMnu");

closeMenu.addEventListener("click", () => {
    asideSection.style.transform = "translateX(-100%)";
    asideSection.style.opacity = "0";
});

openMenu.addEventListener("click", () => {
    asideSection.style.transform = "translateX(0)";
    asideSection.style.opacity = "1";
});