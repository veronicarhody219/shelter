const toggleBtn = document.querySelector(".toggle-btn");
const nav = document.querySelector(".nav");
toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
openModal.addEventListener("click", () => {
  modal.showModal();
});

async function getData() {
  const response = await fetch("./modals/modal.json");
  const data = await response.json();
  console.log(data);
  data.map((item) => {});
}
getData();
