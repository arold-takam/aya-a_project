/**
 * DONNÉES DE SIMULATION (Réaliste pour ton prototype)
 */
const servicePhotos = [
    "../ressources/image/nature9.jpg",
    "../ressources/image/nature10.jpg",
    "../ressources/image/nature14.jpg"
];

// 1. COMPORTEMENT C1 : Slider de fond sur le MAIN
const mainElement = document.querySelector('main');
let bgIndex = 0;

function rotateMainBg() {
    bgIndex = (bgIndex + 1) % servicePhotos.length;
    mainElement.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${servicePhotos[bgIndex]}")`;
}
setInterval(rotateMainBg, 5000); // Change toutes les 5s

// 2. COMPORTEMENT C2 : Injection des photos dans la GALERIE
const galleryLis = document.querySelectorAll('.gallery .photo li');
galleryLis.forEach((li, index) => {
    if(servicePhotos[index] && !li.querySelector('a')) { // On évite le bouton "VOIR PLUS"
        li.style.backgroundImage = `url("${servicePhotos[index]}")`;
        li.style.backgroundSize = "cover";
        li.style.backgroundPosition = "center";
    }
});

// 3. COMPORTEMENT C3 : Slider sur Services Similaires & Scroll Auto
const similarList = document.querySelector('.similar .list');
const similarItems = document.querySelectorAll('.similar .item');

// Slider de fond pour chaque item similaire
similarItems.forEach((item, idx) => {
    let internalIdx = 0;
    const internalPhotos = ["../ressources/image/nature9.jpg", "../ressources/image/nature10.jpg"];

    setInterval(() => {
        internalIdx = (internalIdx + 1) % internalPhotos.length;
        item.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${internalPhotos[internalIdx]}")`;
    }, 3000 + (idx * 400)); // Décalage pour un effet naturel
});

// Scroll automatique horizontal de la liste
function autoScrollSimilar() {
    if (similarList.scrollLeft + similarList.clientWidth >= similarList.scrollWidth) {
        similarList.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        similarList.scrollBy({ left: 300, behavior: 'smooth' });
    }
}
let scrollInterval = setInterval(autoScrollSimilar, 4000);

// Stop scroll si l'utilisateur interagit
similarList.addEventListener('mouseenter', () => clearInterval(scrollInterval));
similarList.addEventListener('mouseleave', () => scrollInterval = setInterval(autoScrollSimilar, 4000));