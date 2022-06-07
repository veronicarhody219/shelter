// hamburger
const toggleBtn = document.querySelector(".toggle-btn");
const nav = document.querySelector(".nav");
toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});

// arrows
const arrowFirst = document.querySelector(".arrow-first");
const arrowLast = document.querySelector(".arrow-last");
const arrowPrev = document.querySelector(".arrow-prev");
const arrowNext = document.querySelector(".arrow-next");
const arrowIndex = document.querySelector(".arrow-index");

let id = 1,
  idFirst = 1,
  idLast = 6;

// permutations of an array
let pet = [0, 1, 2, 3, 4, 5, 6, 7];

function permutations(arr) {
  return arr.length === 1
    ? arr
    : arr.reduce((acc, cv, index) => {
        let remaining = [...arr];
        remaining.splice(index, 1);
        return acc.concat(permutations(remaining).map((a) => [].concat(cv, a)));
      }, []);
}
// get six random arrays
function randomArray(pet) {
  return permutations(pet)[Math.floor(Math.random() * 40320)];
}

// generate array based on window width
function responsive() {
  if (window.matchMedia("(min-width: 1280px)").matches) {
    return randomArray(pet);
  } else if (
    window.matchMedia("(max-width: 1280px) and (min-width: 769px").matches
  ) {
    idLast = 8;
    return randomArray(pet).splice(2);
  } else if (window.matchMedia("(max-width: 768px)").matches) {
    idLast = 16;
    return randomArray(pet).splice(5);
  }
}

// ----------------pagination
arrowIndex.textContent = idFirst;

arrowFirst.addEventListener("click", () => {
  if (id == idFirst) {
    return;
  } else {
    id = idFirst;
    arrowIndex.textContent = id;
    cards.innerHTML = "";
    getData(responsive());
  }
  changeStyle();
});
arrowLast.addEventListener("click", () => {
  if (id == idLast) {
    return;
  } else {
    id = idLast;
    arrowIndex.textContent = id;
    cards.innerHTML = "";
    getData(responsive());
  }
  changeStyle();
});

arrowPrev.addEventListener("click", () => {
  if (id === idFirst) {
    return;
  }
  prevBtn();
  changeStyle();
});

arrowNext.addEventListener("click", () => {
  if (id === idLast) {
    return;
  }
  nextBtn();
  changeStyle();
});

function prevBtn() {
  cards.innerHTML = "";
  id--;
  arrowIndex.textContent = id;
  getData(responsive());
}
function nextBtn() {
  cards.innerHTML = "";
  id++;
  arrowIndex.textContent = id;
  getData(responsive());
}

function changeStyle() {
  if (id === idFirst) {
    arrowFirst.classList.add("disabled");
    arrowPrev.classList.add("disabled");
  } else {
    arrowFirst.classList.remove("disabled");
    arrowPrev.classList.remove("disabled");
  }
  if (id === idLast) {
    arrowNext.classList.add("disabled");
    arrowLast.classList.add("disabled");
  } else {
    arrowNext.classList.remove("disabled");
    arrowLast.classList.remove("disabled");
  }
}
// -------------------------get Data
const cards = document.querySelector(".cards");
const modal = document.querySelector(".modal");

function getData(arr) {
  arr.forEach((index) => {
    petData.forEach((item) => {
      if (index === item.id) {
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
      }
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

getData(responsive());
