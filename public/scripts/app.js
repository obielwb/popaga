// card modal 
const cards = document.querySelectorAll(".card");
const cardModal = document.querySelector(".card-modal");
const closeModal = document.querySelector(".close-modal");

cards.forEach((card) => {
  card.addEventListener('click', () => {
    cardModal.classList.add("active");
  });

  closeModal.addEventListener('click', () => {
    cardModal.classList.remove("active");
  });
});