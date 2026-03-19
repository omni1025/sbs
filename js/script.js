// LOADER
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// DARK MODE
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// FILTER
function filter(type){
  let cards = document.querySelectorAll(".bed-card");

  cards.forEach(card => {
    if(type === "all" || card.classList.contains(type)){
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
