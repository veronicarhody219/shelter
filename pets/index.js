// hamburger
const toggleBtn = document.querySelector(".toggle-btn");
const nav = document.querySelector(".nav");
toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});
// get Data
const cards = document.querySelector(".cards");
const modal = document.querySelector(".modal");

function getData() {
  petData.forEach((item) => {
    cards.innerHTML += `
      <div class="card">
                  <img
                    src="${item.image}"
                    alt="${item.name}"
                    class="card--img"
                  />
                  <h3>${item.name}</h3>
                  <button class="card--btn-light open-modal" onclick="openModal(${item.id})">Learn more</button>
          </div> 
      
      `;
  });
}

function openModal(id) {
  const item = petData.find((item) => item.id === id);
  console.log(item);
  const modalContent = `
            <div class="modal-content">
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
                  </div>
                  <div class="close-modal" onclick="closeModal()">✕</div>
              </div>
  `;
  modal.classList.add("active");
  modal.innerHTML = modalContent;
  console.log(modal);
}

function closeModal() {
  modal.classList.remove("active");
}

window.onclick = (e) => {
  if (e.target == modal) {
    modal.classList.remove("active");
  }
};

// async function getData() {
//   const response = await fetch("./modals/modal.json");
//   const data = await response.json();
//   console.log(data);
//   data
//     .map((item) => {
//       cards.innerHTML += `
//            <div class="card slide">
//             <img
//               src="${item.image}"
//               alt="${item.name}"
//               class="card--img"
//             />
//             <h3>${item.name}</h3>
//             <button class="card--btn-light open-modal">Learn more</button>
//             </div>
//             <div class="modal">
//             <div class="modal-content">
//                 <div class="modal--img">
//                   <img src="${item.image}" alt="${item.name}" />
//                 </div>
//                 <div class="modal-desc">
//                   <h3>${item.name}</h3>
//                   <h4>${item.type}</h4>
//                   <p>
//                     ${item.desc}
//                   </p>
//                   <p><strong>Age: </strong> ${item.age} months</p>
//                   <p><strong>Inoculations: </strong>none</p>
//                   <p><strong>Diseases: </strong> none</p>
//                   <p><strong>Parasites: </strong> none</p>
//                   </div>
//                   <div class="close-modal">✕</div>
//               </div>
//             </div>

//     `;
//     })
//     .join("");

//   // ---------------modal
//   // works but only show last item
//   const modal = cards.querySelectorAll(".modal");

//   modal.forEach((item) => {
// console.log(item);

//     cards.addEventListener("click", (e) => {
//       if (e.target.classList.contains("open-modal"))
//         item.style.display = "flex";

//       if (e.target.classList.contains("close-modal")) {
//         item.style.display = "none";
//       }

//       window.addEventListener("click", (e) => {
//         if (e.target === modal) {
//           item.style.display = "none";
//         }
//       });
//     });
//   });

// ---------works but only show first item
// cards.addEventListener("click", function (e) {

//   if (e.target.classList.contains("open-modal")) {
//      const modal = cards.querySelector(".modal");
//      const closeModal = cards.querySelector(".close-modal");
//     //  show the modal
//     modal.style.display = "flex";
//     // when click on (x), close the modal
//     closeModal.onclick = function () {
//       modal.style.display = "none";
//     };
//     // when click outside the modal, close it
//     window.onclick = function (event) {
//       if (event.target === modal) {
//         modal.style.display = "none";
//       }
//     };
//   }
// })

getData();
