let collapse;
let scrollPosition = 0;
let isNavbarHidden = false;
let navbarHiddenTimeoutId;

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
 * function hidden or show navbar
 * @param { boolean } hidden
 */
const hiddenNavbar = (hidden) => {
  const headerElement = document.querySelector(".header");

  if (hidden) {
    headerElement.classList.add("hidden");
    headerElement.style.top = `${scrollPosition - 60}px`;
  } else {
    headerElement.classList.remove("hidden");
    headerElement.style.top = `${scrollPosition - 60}px`;
  }

  hiddenSubNavbarItem();
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

  // close the navbar
  closeNavItem();

  // clear timeout fn
  clearTimeout(navbarHiddenTimeoutId);

  // get position
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // check scroll up or scroll down
  // deltaY < 0: scroll up
  // deltaY > 0: scroll down
  if (scrollTop > scrollPosition) {
    hiddenNavbar(true);
    setNavbarTimeout();
  } else {
    if (!isNavbarHidden) {
      hiddenNavbar(false);
      clearTimeout(navbarHiddenTimeoutId);
    } else {
      hiddenNavbar(true);
      setNavbarTimeout();
    }
  }

  scrollPosition = scrollTop;
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
  // close the navbar
  closeNavItem();

  // clear timeout fn
  clearTimeout(navbarHiddenTimeoutId);

  // check wheel up or wheel down
  // deltaY < 0: wheel up
  // deltaY > 0: wheel down
  if (event.deltaY > 0) {
    hiddenNavbar(true);
    setNavbarTimeout();
  } else {
    if (!isNavbarHidden) {
      hiddenNavbar(false);
      clearTimeout(navbarHiddenTimeoutId);
    } else {
      hiddenNavbar(true);
      setNavbarTimeout();
    }
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
/**
 * function set
 */
const setNavbarTimeout = () => {
  navbarHiddenTimeoutId = setTimeout(() => {
    isNavbarHidden = false;
  }, 500);
};
