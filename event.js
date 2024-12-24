const events = [
  {
    img: "images/event-1.jpg",
    title: "wedding",
  },
  {
    img: "images/event-2.jpg",
    title: "corporate",
  },
  {
    img: "images/event-3.jpg",
    title: "wedding",
  },
  {
    img: "images/event-4.jpg",
    title: "buffet",
  },
  {
    img: "images/event-5.jpg",
    title: "cocktail",
  },
  {
    img: "images/event-6.jpg",
    title: "wedding",
  },
  {
    img: "images/event-7.jpg",
    title: "buffet",
  },
  {
    img: "images/event-8.jpg",
    title: "corporate",
  },
];

console.log(events);

function displayEvents(eventType) {
  const eventCards = eventType.map((event) => {
    return `
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="position-relative overflow-hidden rounded">
          <div class="event-effect w-100 h-100 t-0 l-0 position-absolute p-4">
            <h3>${
              event.title.charAt(0).toUpperCase() + event.title.slice(1)
            }</h3>
            <span data-bs-toggle="modal" data-bs-target="#exampleModal"
              ><i class="fa-solid fa-magnifying-glass-plus"></i
            ></span>
          </div>
          <img class="w-100" src="../${event.img}" alt="" />
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

const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  section.classList.add("active");
});
