const cards = document.querySelector(".cards");

// hamburger
const toggleBtn = document.querySelector(".toggle-btn");
const nav = document.querySelector(".nav");
toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});
// get Data

async function getData() {
  const response = await fetch("./modals/modal.json");
  const data = await response.json();
  console.log(data);
  data.map((item) => {
    const cardContent = `
    <div class="card card-1">
            <img
              src="${item.image}"
              alt="${item.name}"
              class="card--img"
            />
            <h3>${item.name}</h3>
            <button class="card--btn-light open-modal">Learn more</button>
            <div class="modal">
             
                <div class="modal--img">
                  <img src="${item.image}" alt="${item.name}" />
                </div>
                <div class="modal-desc">
                  <h3>${item.name}</h3>
                  <h4>${item.type}</h4>
                  <p>
                    ${item.desc}
                  </p>
                  <p><strong>Age: </strong> ${item.age} months</p>
                  <p><strong>Inoculations: </strong>none</p>
                  <p><strong>Diseases: </strong> none</p>
                  <p><strong>Parasites: </strong> none</p>
                  <div class="close-modal">✕</div>
               
              </div>
            </div>
          </div>
    `;
    cards.innerHTML += cardContent;

    // modal
    const openModalBtn = document.querySelectorAll(".open-modal");

    const closeModalBtn = document.querySelectorAll(".close-modal");
    const modal = document.querySelectorAll(".modal");
    openModalBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const modal = document.querySelector(".modal");
        openModal(modal);
      });
    });
    closeModalBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const modal = document.querySelector(".modal");
        closeModal(modal);
        windowClose(modal);
      });
    });
    function openModal(modal) {
      if (modal == null) return;
      modal.style.display = "flex";
    }
    function closeModal(modal) {
      if (modal == null) return;
      modal.style.display = "none";
    }
    function windowClose(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
}
getData();

// // modal
// const openModalBtn = document.querySelectorAll(".open-modal");

// const closeModalBtn = document.querySelectorAll(".close-modal");
// const modal = document.querySelectorAll(".modal");
// openModalBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const modal = document.querySelector(".modal");
//     openModal(modal);
//   });
// });
// closeModalBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const modal = document.querySelector(".modal");
//     closeModal(modal);
//     windowClose(modal);
//   });
// });
// function openModal(modal) {
//   if (modal == null) return;
//   modal.style.display = "flex";
// }
// function closeModal(modal) {
//   if (modal == null) return;
//   modal.style.display = "none";
// }
// function windowClose(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
