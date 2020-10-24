const cardContainer = document.querySelector(".card-container");
const cardImg = document.querySelectorAll(".card img");
const cardsLength = document.querySelectorAll(".card").length;
const buttons = document.querySelectorAll(".button");

let cardIndex = 1,
  translateX = 0,
  width = document.querySelector(".card").clientWidth;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "prev") {
      if (cardIndex !== 1) {
        cardIndex--;
        translateX += width;
      }
    } else {
      if (cardIndex < cardsLength) {
        cardIndex++;
        translateX -= width;
      }
    }

    cardContainer.style.transform = `translateX(${translateX}px)`;
    cardImg.forEach((card, index) => {
      if (index === cardIndex - 1) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  });
});
