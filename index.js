const cards = document.querySelector(".cards");
const modal = document.querySelector(".modal");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

// hamburger
const toggleBtn = document.querySelector(".toggle-btn");
const nav = document.querySelector(".nav");
toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});

// get random

let pet = [];

function getRandom(min, max, num) {
  while (pet.length < num) {
    let r = Math.floor(Math.random() * (max - min)) + min;
    if (pet.indexOf(r) === -1) pet.push(r);
  }
  return pet;
}

// generate array based on window width
function responsive(min, max) {
  if (window.matchMedia("(min-width: 1280px)").matches) {
    return getRandom(min, max, 3);
  } else if (
    window.matchMedia("(max-width: 1280px) and (min-width: 769px").matches
  ) {
    return getRandom(min, max, 2);
  } else if (window.matchMedia("(max-width: 768px)").matches) {
    return getRandom(min, max, 1);
  }
}
responsive(0, 7);
console.log(pet);

getData();

// get next slides
next.addEventListener("click", () => {
  cards.innerHTML = "";

  for (let i = 0; i < pet.length; i++) {
    let r = Math.floor(Math.random() * 7);
    if (pet.indexOf(r) === -1 && pet[i] !== r) pet[i] = r;
  }
  console.log(pet);
  getData();
});
// get previous slides
prev.addEventListener("click", () => {
  cards.innerHTML = "";

  for (let i = 0; i < pet.length; i++) {
    let r = Math.floor(Math.random() * 7);
    if (pet.indexOf(r) === -1 && r != pet[i]) pet[i] = r;
  }
  console.log(pet);
  getData();
});

function getData() {
  petData.forEach((item) => {
    pet.forEach((i) => {
      if (i === item.id)
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
