const cardContainer = document.querySelector(".card-container");
const cards = document.querySelectorAll(".box")
const cardsLength = document.querySelectorAll(".box").length;
const buttons = document.querySelectorAll(".button");

let cardIndex = 1;
let translateX = 0;

buttons.forEach(button => {
 button.addEventListener("click", (e) => {
  if(e.target.id === "prev"){
   if(cardIndex !== 1){
    cardIndex--;
    translateX += 250;
   }
  } else {
   if(cardIndex !== cardsLength){
    cardIndex++;
    translateX -= 250;
   }
  }

  cardContainer.style.transform = `translateX(${translateX}px)`;
  cards.forEach((card, index) => {
    if (index === cardIndex - 1) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
});
});

