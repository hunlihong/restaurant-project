import { service, events, menu } from "./data.js";

// service-start
const serviceCards = service.map((card) => {
  return `
        <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card text-center" data-id=${card.id}>
        <div class="service-bg"></div>
        <div class="card-img-top">
            ${card.icon}
        </div>
        <div class="card-body">
            <h3 class="card-title">${card.title}</h3>
            <p class="card-text">
            Contrary to popular belief, ipsum is not simply random.
            </p>
            <a class="btn btn-primary" href="#">Read more</a>
        </div>
        </div>
    </div>
    `;
});
document.querySelector(".service .card-group").innerHTML =
  serviceCards.join("");

// event-start
function displayEvents(eventType) {
  const eventCards = eventType.map((event) => {
    return `
    <div class="col-lg-3 col-md-6 col-sm-12">
      <div class="position-relative overflow-hidden rounded">
        <div class="event-effect w-100 h-100 t-0 l-0 position-absolute p-4">
          <h3>${event.title.charAt(0).toUpperCase() + event.title.slice(1)}</h3>
          <span data-bs-toggle="modal" data-bs-target="#exampleModal"
            ><i class="fa-solid fa-magnifying-glass-plus"></i
          ></span>
        </div>
        <img class="w-100" src="${event.img}" alt="" />
      </div>
    </div>
  </div>
    `;
  });
  document.querySelector(".events").innerHTML = eventCards.join("");
}
displayEvents(events);

const explore = document.querySelectorAll(".event-effect > span");
explore.forEach((ex) => {
  ex.addEventListener("click", (event) => {
    const modal = {
      title: event.currentTarget.offsetParent.outerText,
      img: event.currentTarget.offsetParent.nextElementSibling,
    };
    document.querySelector("#exampleModal .modal-title").textContent =
      modal.title;
    document.querySelector("#exampleModal .modal-body > img").src =
      modal.img.src;
  });
});

const eventButtons = document.querySelectorAll(".event-btn-group > button");
eventButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const active = e.currentTarget;
    if (active.classList.contains("active")) {
      return null;
    } else {
      for (let i = 0; i < eventButtons.length; i++) {
        eventButtons[i].classList.remove("active");
      }
      active.classList.add("active");
      const filterEvent = events.filter((event) => {
        return event.title === active.textContent.toLowerCase();
      });
      if (active.textContent === "All Events") {
        displayEvents(events);
      } else {
        displayEvents(filterEvent);
      }
    }
  });
});
// event-end

// menu-start
function displayMenu(menuArr) {
  const sortedMenu = menuArr.map((menu) => {
    return `
        <div class="col-lg-6 col-md-12">
          <article
            class="d-flex justify-content-center align-items-center gap-3"
          >
            <img class="rounded-circle" src="${menu.img}" alt="" />
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
// menu-end

// lihong-animation-onscroll
function scrollAnimation() {
  const sections = document.querySelectorAll("section");

  for (let i = 0; i < sections.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = sections[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", scrollAnimation);
