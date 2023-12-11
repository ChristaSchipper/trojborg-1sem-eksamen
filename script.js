// Show and hide menu overlay
const hamburgerBtn = document.querySelector(".hamburger-btn");
const overlay = document.querySelector("#menu-overlay");
const closeBtn = document.querySelector("#menu-overlay-close");
const header = document.querySelector(".site-header");
const menuItems = document.querySelectorAll(".menu__item");
const menuItemsArray = Array.from(menuItems);

// Burger toggle
hamburgerBtn.addEventListener("click", () => {
  const isOpen = overlay.classList.contains("open");
  overlay.classList.toggle("open", !isOpen); // Toggle the class only if it's not already open
  overlay.setAttribute("aria-hidden", isOpen);
  hamburgerBtn.setAttribute("aria-expanded", !isOpen);
  hamburgerBtn.classList.toggle("is-active");
  header.classList.toggle("is-active");
});

// Close button on tablet/desktop version
closeBtn.addEventListener("click", () => {
  const isOpen = overlay.classList.toggle("open");
  hamburgerBtn.setAttribute("aria-expanded", isOpen);
  hamburgerBtn.classList.toggle("is-active");
  overlay.setAttribute("aria-hidden", !isOpen);
  header.classList.toggle("is-active");
});

// Toggle subnavigation
menuItems.forEach((menuItem) => {
  const linkToggleSubnav = menuItem.querySelector(".menu__link-toggle-subnav");
  const subList = menuItem.querySelector(".menu__sub-list");

  linkToggleSubnav.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the event from propagating to the parent div
    subList.classList.toggle("active");
  });
});


// beer container
const beerCardsContainer = document.querySelector('.beer-cards');
const chevronLeft = document.querySelector('.feather-chevron-left');
const chevronRight = document.querySelector('.feather-chevron-right');
const beerCards = document.querySelectorAll('.beer-card');
let currentIndex = 0;

function moveBeerCards() {
  console.log;
  const cardWidth = beerCards[0].offsetWidth + parseFloat(getComputedStyle(beerCards[0]).marginRight);
  const newPosition = -currentIndex * cardWidth;
  beerCardsContainer.style.transform = `translateX(${newPosition}px)`;
}

function updateVisibility() {
  console.log;
  const totalCards = beerCards.length;
  chevronLeft.style.display = currentIndex > 0 ? 'block' : 'none';
  chevronRight.style.display = currentIndex < totalCards - 1 ? 'block' : 'none';
}

const chevronLeftContainer = document.querySelector('.feather-chevron-left');
const chevronRightContainer = document.querySelector('.feather-chevron-right');

chevronLeftContainer.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    moveBeerCards();
    updateVisibility();
  }
});

chevronRightContainer.addEventListener('click', () => {
  const totalCards = beerCards.length;
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    moveBeerCards();
    updateVisibility();
  }
});

// Initialize visibility and card positioning on page load
updateVisibility();
moveBeerCards();

// alt java script er  ChatGPTs output 