/**
 * DONNÉES DE LA BOUTIQUE (Réalisme & Pragmatisme)
 */
const storeData = {
    heroBgs: [
        "../ressources/image/nature9.jpg",
        "../ressources/image/nature10.jpg",
        "../ressources/image/nature14.jpg"
    ],
    products: [
        {
            images: ["../ressources/image/nature9.jpg", "../ressources/image/nature10.jpg"],
            title: "Sac à dos Expédition",
            price: "45 000 FCFA",
            desc: "Imperméable et ergonomique, idéal pour le Mont Cameroun."
        },
        {
            images: ["../ressources/image/nature9.jpg", "../ressources/image/nature14.jpg"],
            title: "Tente Bivouac Pro",
            price: "85 000 FCFA",
            desc: "Protection totale contre les intempéries tropicales."
        },
        {
            images: ["../ressources/image/nature9.jpg", "../ressources/image/nature10.jpg"],
            title: "Gourde Isotherme Aya'a",
            price: "12 500 FCFA",
            desc: "Garde votre eau fraîche sous le soleil du Nord."
        }
    ]
};

// SÉLECTEURS
const mainSection = document.querySelector('main');
const productItems = document.querySelectorAll('.item');

// --- COMPORTEMENT C1 : SLIDER DU FOND PRINCIPAL ---
let mainBgIdx = 0;
function rotateStoreBg() {
    mainBgIdx = (mainBgIdx + 1) % storeData.heroBgs.length;
    mainSection.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${storeData.heroBgs[mainBgIdx]}")`;
}
setInterval(rotateStoreBg, 6000);

// --- COMPORTEMENT C2 : SLIDER DES IMAGES PRODUITS ---
productItems.forEach((item, idx) => {
    // On récupère les données du produit (boucle sur le tableau pour le prototype)
    const data = storeData.products[idx % storeData.products.length];
    const imageContainer = item.querySelector('.image');
    const titleEl = item.querySelector('h3');
    const priceEl = item.querySelector('.price b');
    const descEl = item.querySelector('.detail p');

    // Injection des données réelles dans le HTML
    titleEl.textContent = data.title;
    priceEl.textContent = data.price;
    descEl.textContent = data.desc;
    imageContainer.style.backgroundImage = `url("${data.images[0]}")`;
    imageContainer.style.backgroundSize = "cover";

    // Logique de slider interne pour l'image
    let internalImgIdx = 0;
    setInterval(() => {
        internalImgIdx = (internalImgIdx + 1) % data.images.length;
        imageContainer.style.backgroundImage = `url("${data.images[internalImgIdx]}")`;
    }, 3000 + (idx * 300)); // Décalage pour ne pas que tout bouge en même temps
});