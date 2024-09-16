let collapse;
let scrollPosition = 0;
let isNavbarHidden = false;
let navbarHiddenTimeoutId;
let navbarShowTimeoutId;

const headerElement = document.querySelector(".header");
const navbarContainer = document.querySelector(".navbar__container");
const navbarItemElement = document.querySelectorAll(".nav-item");
const navbarBtn = document.querySelector(".navbar-toggler");
const collapseConteiner = document.querySelector(".navbar-collapse");

// function
/**
 * function close item of the navbar when it's showing
 */
const closeNavItem = () => {
  const navbarItem = document.querySelector(".navbar-collapse.collapse.show");
  if (navbarItem) {
    navbarBtn.click();
  }
};

/**
 * function close sub navbar item
 */
const hiddenSubNavbarItem = () => {
  const subNavbar = document.querySelector(".nav-link.active.dropdown-toggle");
  const subNavbarItem = document.querySelector(".dropdown-menu");
  subNavbar.classList.remove("show");
  subNavbarItem.classList.remove("show");
};

// ============== Window ==============
/* Event Scroll */
window.addEventListener("scroll", (event) => {
  // console.log("Event Scroll", event);

  // close the navbar collapse
  closeNavItem();

  // close the navber item
  hiddenSubNavbarItem();

  // get position
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // check scroll up or scroll down
  // scrollTop < scrollPosition: scroll up
  // scrollTop > scrollPosition: scroll down
  if (scrollTop > scrollPosition) {
  } else {
  }

  scrollPosition = scrollTop;
  console.log(scrollPosition);
  const navButton = document.querySelector(".nav__button");
  if (scrollPosition > 100) {
    navButton.style.display = "flex";
  } else {
    navButton.style.display = "none";
  }
});

/* ========== Event Listener ========== */
// =============== BODY ===============
/* Event Click */
document.body.addEventListener("click", function (event) {
  // console.log("Event Click", event);
  if (!navbarContainer.contains(event.target)) {
    closeNavItem();
  }
});
/* Event Wheel*/
document.body.addEventListener("wheel", (event) => {
  // console.log("Event Wheel", event);
  const modalElement = document.querySelector(".modal.show");
  if (modalElement) {
    return;
  }

  // close the navbar collapse
  closeNavItem();

  // close the navber item
  hiddenSubNavbarItem();

  // check wheel up or wheel down
  // deltaY < 0: wheel up
  // deltaY > 0: wheel down
  if (event.deltaY > 0) {
  } else {
  }

  const navButton = document.querySelector(".nav__button");
  if (scrollPosition > 100) {
    navButton.style.display = "flex";
  } else {
    navButton.style.display = "none";
  }
});

/* ========== Event Listener ========== */
// =============== Navbar ===============
/* Event Click */
navbarItemElement.forEach((element) => {
  element.addEventListener("click", () => {
    const item = document.querySelector(".projects--item");
    if (item !== element) {
      isNavbarHidden = true;
      hiddenNavbar(true);
    }
  });
});

/* =========== Async await Fn =========== */
