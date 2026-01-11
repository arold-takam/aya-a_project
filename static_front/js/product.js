/**
 * DONNÉES DU PRODUIT (C1 & C2)
 */
const productImages = [
    "../ressources/image/nature9.jpg",
    "../ressources/image/nature10.jpg",
    "../ressources/image/nature14.jpg"
];

// 1. C1 : Rotation du fond du MAIN
const mainProduct = document.querySelector('main');
let productBgIdx = 0;

function rotateProductBg() {
    productBgIdx = (productBgIdx + 1) % productImages.length;
    mainProduct.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${productImages[productBgIdx]}")`;
}
setInterval(rotateProductBg, 5000);

// 2. C2 : Galerie Photo (Injection)
const productGalleryLis = document.querySelectorAll('.gallery .photo li');
productGalleryLis.forEach((li, index) => {
    // On n'injecte pas dans le dernier li qui contient "VOIR PLUS"
    if (productImages[index] && !li.querySelector('a')) {
        li.style.backgroundImage = `url("${productImages[index]}")`;
        li.style.backgroundSize = "cover";
        li.style.backgroundPosition = "center";
    }
});

// 3. C3 : Slider sur Produits Similaires & Scroll Auto
const similarItems = document.querySelectorAll('.similar .item');

similarItems.forEach((item, idx) => {
    let internalIdx = 0;
    // Photos de simulation pour les autres produits
    const placeholderPhotos = ["../ressources/image/personne11.jpg", "../ressources/image/personne28.jpg"];

    setInterval(() => {
        internalIdx = (internalIdx + 1) % placeholderPhotos.length;
        const imgDiv = item.querySelector('.image'); // Cible la div .image du produit
        imgDiv.style.backgroundImage = `url("${placeholderPhotos[internalIdx]}")`;
    }, 3500 + (idx * 500));
});

// Scroll automatique de la liste similaire
const similarList = document.querySelector('.similar .list');
function autoScroll() {
    if (similarList.scrollLeft + similarList.clientWidth >= similarList.scrollWidth - 10) {
        similarList.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        similarList.scrollBy({ left: 350, behavior: 'smooth' });
    }
}
let scrollInterval = setInterval(autoScroll, 4500);

// Stop scroll au survol
similarList.addEventListener('mouseenter', () => clearInterval(scrollInterval));
similarList.addEventListener('mouseleave', () => scrollInterval = setInterval(autoScroll, 4500));