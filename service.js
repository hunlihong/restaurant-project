const service = [
  {
    id: 0,
    icon: '<i class="fa-solid fa-cake-candles"></i>',
    title: "Wedding Services",
  },
  {
    id: 1,
    icon: '<i class="fa-solid fa-pizza-slice"></i>',
    title: "Corporate Catering",
  },
  {
    id: 2,
    icon: '<i class="fa-solid fa-hotdog"></i>',
    title: "Cocktail Reception",
  },
  {
    id: 3,
    icon: '<i class="fa-solid fa-burger"></i>',
    title: "Bento Catering",
  },
  {
    id: 4,
    icon: '<i class="fa-solid fa-wine-glass"></i>',
    title: "Pub Party",
  },
  {
    id: 5,
    icon: '<i class="fa-solid fa-person-walking"></i>',
    title: "Home Delivery",
  },
  {
    id: 6,
    icon: '<i class="fa-solid fa-wheelchair"></i>',
    title: "Sit-down Catering",
  },
  {
    id: 7,
    icon: '<i class="fa-solid fa-utensils"></i>',
    title: "Buffet Catering",
  },
];

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

const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  section.classList.add("active");
});
