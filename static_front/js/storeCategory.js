/**
 * storeCategory.js
 * Mission : Gérer les mini-sliders pour chaque produit de la liste
 */

const productsGallery = {
    0: ["../ressources/image/nature9.jpg", "../ressources/image/nature9.jpg"],
    1: ["../ressources/image/nature10.jpg", "../ressources/image/nature10.jpg"],
    2: ["../ressources/image/nature14.jpg", "../ressources/image/nature14.jpg"],
    3: ["../ressources/image/personne11.jpg", "../ressources/image/personne11.jpg"],
    4: ["../ressources/image/personne28.jpg", "../ressources/image/personne28.jpg"]
};

const items = document.querySelectorAll('.productList .item');

items.forEach((item, index) => {
    const imageDiv = item.querySelector('.image');
    // On récupère les photos ou un set par défaut
    const photos = productsGallery[index] || ["../ressources/image/nature9.jpg", "../ressources/image/nature10.jpg"];

    let currentPhotoIdx = 0;

    // Initialisation de la première image
    imageDiv.style.backgroundImage = `url("${photos[0]}")`;
    imageDiv.style.backgroundSize = "cover";
    imageDiv.style.backgroundPosition = "center";
    imageDiv.style.transition = "background-image 0.6s ease-in-out";

    // Lancement du mini-slider
    setInterval(() => {
        currentPhotoIdx = (currentPhotoIdx + 1) % photos.length;
        imageDiv.style.backgroundImage = `url("${photos[currentPhotoIdx]}")`;
    }, 3500 + (index * 200)); // Décalage pour un rendu naturel et asynchrone
});

/**
 * PRAGMATISME : Filtrage simple par recherche
 */
const findInput = document.querySelector('.find');
findInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    items.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        item.style.display = title.includes(term) ? 'flex' : 'none';
    });
});