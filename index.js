const toggleBtn = document.querySelector(".toggle-btn");
const nav = document.querySelector(".nav");
toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});
// const modal = document.querySelectorAll(".modal");
const openModal = document.querySelectorAll(".open-modal");
const closeModal = document.querySelectorAll(".close-modal");
const overlay = document.querySelectorAll(".overlay");
openModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    openModal(modal);
  });
});
