/**
 * infoService.js
 * Mission : Faire défiler les backgrounds des cartes services
 */

// 1. Définition des sets d'images par service (Pragmatique)
const serviceImages = {
    0: ["../ressources/image/nature9.jpg", "../ressources/image/nature10.jpg", "../ressources/image/nature14.jpg"],
    1: ["../ressources/image/personne11.jpg", "../ressources/image/personne28.jpg"]
    // Ajoute autant de sets que tu as d'items dans ton HTML
};

const serviceItems = document.querySelectorAll('.serviceList .item');

serviceItems.forEach((item, index) => {
    let imgIndex = 0;
    // On récupère les images spécifiques ou on met un set par défaut
    const images = serviceImages[index] || serviceImages[0];

    // Fonction de changement de fond pour CETTE carte
    const changeBg = () => {
        imgIndex = (imgIndex + 1) % images.length;
        item.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${images[imgIndex]}")`;
    };

    // Lancement du slider interne (intervalle décalé pour le réalisme)
    setInterval(changeBg, 4000 + (index * 500));
});

/**
 * BONUS PRAGMATIQUE : Recherche Simple
 */
const searchInput = document.querySelector('.find');
searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    serviceItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        item.style.display = title.includes(value) ? 'flex' : 'none';
    });
});