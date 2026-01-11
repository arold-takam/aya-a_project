// 1. Données spécifiques aux rubriques du Cameroun
const infoData = [
    {
        bg: "../ressources/image/camerMap.png",
        title: "CARTE DU PAYS",
        text: "Situé au cœur de l'Afrique, le Cameroun s'étire du Golfe de Guinée jusqu'au Lac Tchad, offrant une position stratégique unique."
    },
    {
        bg: "../ressources/image/nature9.jpg",
        title: "HISTOIRE",
        text: "Une terre de royaumes ancestraux et de chefferies puissantes, marquée par une résilience et une diversité culturelle millénaire."
    },
    {
        bg: "../ressources/image/nature14.jpg",
        title: "GEOGRAPHIE",
        text: "Des montagnes de l'Ouest aux plaines du Nord, découvrez une variété de paysages qui justifient son nom d'Afrique en miniature."
    },
    {
        bg: "../ressources/image/nature10.jpg",
        title: "ECOLOGIE",
        text: "Sanctuaire de biodiversité, le Cameroun abrite des forêts primaires, des parcs nationaux et des espèces rares comme les gorilles de plaine."
    },
    {
        bg: "../ressources/image/personne11.jpg",
        title: "MISSION TOURISTIQUE",
        text: "Notre mission est de promouvoir un tourisme éthique et durable, valorisant chaque recoin du patrimoine camerounais."
    },
    {
        bg: "../ressources/image/personne28.jpg",
        title: "SITES ICONIQUES",
        text: "Des Chutes de la Lobe aux pics de Rhumsiki, explorez les monuments naturels qui font la fierté de notre nation."
    }
];

// SÉLECTEURS
const mainSection = document.querySelector('main');
const heroH1 = document.querySelector('.heroList h1');
const heroP = document.querySelector('.heroList p');
const dots = document.querySelectorAll('.mobilePaginator li');

let currentIdx = 0;

/**
 * Fonction de mise à jour visuelle
 */
function updateInfo(index) {
    const data = infoData[index];

    // Effet de transition visuelle
    heroH1.style.opacity = "0";
    heroP.style.opacity = "0";

    setTimeout(() => {
        // Fond
        mainSection.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${data.bg}")`;

        // Contenu
        heroH1.textContent = data.title;
        heroP.textContent = data.text;

        // Gestion de la classe active sur les points
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');

        heroH1.style.opacity = "1";
        heroP.style.opacity = "1";
    }, 300);
}

/**
 * Événements sur les pastilles (Points)
 */
dots.forEach((dot, index) => {
    dot.addEventListener('click', (e) => {
        e.preventDefault();
        currentIdx = index;
        updateInfo(currentIdx);
    });
});

// Automatisme optionnel (Toutes les 8 secondes pour laisser lire)
setInterval(() => {
    currentIdx = (currentIdx + 1) % infoData.length;
    updateInfo(currentIdx);
}, 8000);

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
    updateInfo(0);
});