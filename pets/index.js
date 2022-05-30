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
    <div class="card slide">
            <img
              src="${item.image}"
              alt="${item.name}"
              class="card--img"
            />
            <h3>${item.name}</h3>
            <button class="card--btn-light open-modal">Learn more</button>
            </div>
            <div class="modal">
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
                  <div class="close-modal">✕</div>
              </div>
            </div>
         
    `;
    cards.innerHTML += cardContent;

    // modal
    const modalContainer = document.querySelector(".cards");
    console.log(modalContainer);

    modalContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("open-modal")) {
        const modal = modalContainer.querySelector(".modal");
        console.log(modal);
        const closeModal = modalContainer.querySelector(".close-modal");
        //  show the modal
        modal.style.display = "flex";
        // when click on (x), close the modal
        closeModal.onclick = function () {
          modal.style.display = "none";
        };
        // when click outside the modal, close it
        window.onclick = function (event) {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        };
      }
    });

    // slides
    let slideIndex = 1;
    // console.log(showSlides(slideIndex));

    // showSlides(slideIndex + 1);
    // showSlides(slideIndex + 2);
    // showSlides(slideIndex + 3);
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    next.addEventListener("click", slideMove(1));
    prev.addEventListener("click", slideMove(-1));
    function slideMove(n) {
      showSlides((slideIndex += n));
    }
    slideMove(1)
    slideMove(-1)
    function showSlides(n) {
      let slides = modalContainer.getElementsByClassName("slide");
      console.log(slides);
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (let i = 0; i < slides.length; i += 3) {
        slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
    }
  });
}
getData();
