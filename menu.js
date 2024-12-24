const menu = [
  {
    img: "images/menu-01.jpg",
    title: "Paneer",
    price: 90,
  },
  {
    img: "images/menu-02.jpg",
    title: "Sweet Potato",
    price: 90,
  },
  {
    img: "images/menu-03.jpg",
    title: "Sabudana Tikki",
    price: 90,
  },
  {
    img: "images/menu-04.jpg",
    title: "Piza",
    price: 90,
  },
  {
    img: "images/menu-05.jpg",
    title: "Bacon",
    price: 90,
  },
  {
    img: "images/menu-06.jpg",
    title: "Chicken",
    price: 90,
  },
  {
    img: "images/menu-07.jpg",
    title: "Blooming",
    price: 90,
  },
  {
    img: "images/menu-08.jpg",
    title: "Sweet",
    price: 90,
  },
];

function displayMenu(menuArr) {
  const sortedMenu = menuArr.map((menu) => {
    return `
          <div class="col-lg-6 col-md-12">
            <article
              class="d-flex justify-content-center align-items-center gap-3"
            >
              <img class="rounded-circle" src="../${menu.img}" alt="" />
              <div class="d-flex flex-column">
                <div
                  class="header d-flex justify-content-between align-items-center pb-1 mb-1"
                >
                  <h4 class="fs-4">${menu.title}</h4>
                  <span class="price fs-4 fw-bold">${menu.price}$</span>
                </div>
                <div>
                  <p class="text-muted fs-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                    quo.
                  </p>
                </div>
              </div>
            </article>
          </div>
      `;
  });
  document.querySelector(".menu .row").innerHTML = sortedMenu.join("");
}
displayMenu(menu);

const menuButtons = document.querySelectorAll(".menu-btn-group > button");
menuButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const active = e.currentTarget;
    if (active.classList.contains("active")) {
      return null;
    } else {
      for (let i = 0; i < eventButtons.length; i++) {
        menuButtons[i].classList.remove("active");
      }
      active.classList.add("active");
      console.log(menu);
      for (let i = menu.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [menu[i], menu[j]] = [menu[j], menu[i]];
      }
      displayMenu(menu);
    }
  });
});

const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  section.classList.add("active");
});
