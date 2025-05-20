// Fonction pour générer une couleur aléatoire
function randomColor() {
  const r = Math.floor(Math.random() * 256); // 0 à 255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Sélectionne le bouton et la boîte à colorer
const button = document.getElementById("change-color-btn");
const box = document.getElementById("color-box");

// Au clic, change la couleur
button.addEventListener("click", function(){
  box.style.backgroundColor = button.style.backgroundColor = randomColor();

});