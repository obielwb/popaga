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


// show user debts when hovering over
const bills = document.querySelectorAll("tbody tr");

bills.forEach((bill) => {
  const usersInDebtContaiter = bill.querySelector("td.had-to-pay");

  usersInDebtContaiter.forEach((user) => {
    user.addEventListener("focus", () => {
      // construir o elemento que irá aparecer
    });
  });
});