const souvenirImages = {
    0: ["../ressources/image/nature9.jpg", "../ressources/image/nature9.jpg"], // Images différentes !
    1: ["../ressources/image/nature10.jpg", "../ressources/image/nature10.jpg"],
    2: ["../ressources/image/nature14.jpg", "../ressources/image/nature14.jpg"],
    3: ["../ressources/image/personne11.jpg", "../ressources/image/personne11.jpg"],
    4: ["../ressources/image/personne28.jpg", "../ressources/image/personne28.jpg"]
};

const souvenirItems = document.querySelectorAll('.souvenirList .item');

souvenirItems.forEach((item, index) => {
    let imgIndex = 0;
    const photos = souvenirImages[index] || ["../ressources/image/nature9.jpg", "../ressources/image/nature10.jpg"];

    // Config visuelle de base
    item.style.backgroundSize = "cover";
    item.style.backgroundPosition = "center";
    item.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${photos[0]}")`;
    item.style.transition = "background-image 1s ease-in-out";

    setInterval(() => {
        imgIndex = (imgIndex + 1) % photos.length;
        item.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${photos[imgIndex]}")`;
    }, 4500 + (index * 400));
});

// Recherche (Parfaitement pragmatique)
const searchInput = document.querySelector('.find');
if(searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        souvenirItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            item.style.display = title.includes(term) ? 'flex' : 'none';
        });
    });
}