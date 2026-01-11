/**
 * STRATÉGIE : CENTRALISATION DES DONNÉES
 * Pour demain, modifier ce tableau suffit à changer tout le slider.
 */
const sliderData = [
    {
        bg: "./ressources/image/nature9.jpg",
        title: "Découvrez le Cameroun autrement",
        text: "De la savane aux chutes majestueuses, nous créons des expériences uniques qui allient immersion culturelle et authenticité locale."
    },
    {
        bg: "./ressources/image/nature14.jpg",
        title: "L'aventure au cœur de l'Ouest",
        text: "Grimpez les pentes du Mont Cameroun et découvrez la majesté des terres volcaniques. Une aventure humaine sans précédent."
    },
    {
        bg: "./ressources/image/personne11.jpg",
        title: "Escale détente à Kribi",
        text: "Le sable blanc et les chutes de la Lobe vous attendent. Profitez d'un moment de sérénité absolue au bord de l'Atlantique."
    },
    {
        bg: "./ressources/image/personne28.jpg",
        title: "Tradition et Culture",
        text: "Rencontrez les peuples du Nord et vivez au rythme des festivals ancestraux. Une immersion totale dans le patrimoine."
    }
];

// SÉLECTEURS
const mainSection = document.querySelector('main');
const heroH1 = document.querySelector('.hero h1');
const heroP = document.querySelector('.hero p');
const pageIndicator = document.querySelector('.page');
const btnNext = document.querySelector('.go');
const btnBack = document.querySelector('.back');

let currentIndex = 0;
let autoSlideInterval;

/**
 * FONCTION DE MISE À JOUR (LA LOGIQUE)
 */
function updateHero(index) {
    const data = sliderData[index];

    // 1. Animation de sortie (Fondu)
    heroH1.style.opacity = "0";
    heroP.style.opacity = "0";
    heroH1.style.transform = "translateY(-20px)";

    setTimeout(() => {
        // 2. Changement du contenu
        mainSection.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${data.bg}")`;
        heroH1.textContent = data.title;
        heroP.textContent = data.text;
        pageIndicator.textContent = `${index + 1}/${sliderData.length}`;

        // 3. Animation d'entrée
        heroH1.style.opacity = "1";
        heroP.style.opacity = "1";
        heroH1.style.transform = "translateY(0)";
    }, 400);
}

/**
 * ÉVÉNEMENTS
 */
btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderData.length;
    updateHero(currentIndex);
    resetTimer();
});

btnBack.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderData.length) % sliderData.length;
    updateHero(currentIndex);
    resetTimer();
});

/**
 * AUTOMATISME (PRAGMATISME)
 */
function startTimer() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % sliderData.length;
        updateHero(currentIndex);
    }, 6000); // 6 secondes pour laisser le temps de lire
}

function resetTimer() {
    clearInterval(autoSlideInterval);
    startTimer();
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Force la transition CSS sur les textes
    heroH1.style.transition = "all 0.6s ease";
    heroP.style.transition = "all 0.6s ease";

    updateHero(0);
    startTimer();
});