const closeAside = document.querySelector(".right .asideBtn");
const aside = document.querySelector("aside");

const main = document.querySelector("main");
const openAside = document.querySelector("main .left");

closeAside.addEventListener("click", () => {
    aside.style.opacity = "0";
    aside.style.width = "0"

    main.style.width = "100%";

    openAside.style.display = "flex";
});

openAside.addEventListener("click", () => {
    aside.style.opacity = "1";
    aside.style.width = "24rem";

    main.style.width = "calc(100% - 24rem)";

    openAside.style.display = "none";
});