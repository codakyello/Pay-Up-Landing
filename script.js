const signUpEL = document.querySelector(".cta-input-wrapper .btn--dark");

// Set current year
// const yearEl = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// yearEl.textContent = currentYear;

signUpEL.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.currentTarget);
  document.body.classList.toggle("btn-grow");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

const scrollEl = document.querySelector(".scroll-up");

const faqEl = document.querySelector(".faq-list");

const faqItems = document.querySelectorAll(".faq-item");

// Write the scrollup functionality here.

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section--hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-70px",
  }
);
obs.observe(sectionHeroEl);

function toggleActive(section) {
  let listOpt = document.querySelectorAll(".faqActive");
  listOpt.forEach(function (item) {
    item.classList.remove("faqActive");
  });

  section.classList.add("faqActive");
}

// faqEl.addEventListener("mouseover", (e) => {
//   faqItems.forEach((item, i) => {
//     console.log("ready");
//     item.classList.remove("faqActive");
//   });

//   console.log(e.target);
//   e.target.classList.add("faqActive");
// });
const faqList = document.querySelector(".faq-list");

// Event delegation: Listen for mouseover and mouseout events on the faq-list
faqList.addEventListener("mouseover", function (event) {
  const target = event.target;

  // Check if the event target is a question (h3 element with class 'couple')
  if (target.matches(".faq-item h3.couple")) {
    // Add .faqActive class to the parent faq-item
    const faqItem = target.closest(".faq-item");
    faqItem.classList.add("faqActive");
  }
});

faqList.addEventListener("mouseout", function (event) {
  const target = event.target;

  // Check if the event target is a question (h3 element with class 'couple')
  if (target.matches(".faq-item h3.couple")) {
    // Remove .faqActive class from the parent faq-item
    const faqItem = target.closest(".faq-item");
    faqItem.classList.remove("faqActive");
  }
});

// scroll to top
const scrollUpBox = document.querySelector(".scroll-up-box");
const scrollUp = document.querySelector(".scroll-up");

scrollUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Main nav toggle
const mainNavOpen = document.querySelector(".main-nav__open");
const mainNavClose = document.querySelector(".main-nav__close");
const mainNavWrapper = document.querySelector(".main-nav-wrapper");
const overlay = document.querySelector(".overlay");

mainNavOpen.addEventListener("click", toggleNav);
mainNavClose.addEventListener("click", toggleNav);
overlay.addEventListener("click", toggleNav);

function toggleNav() {
  mainNavWrapper.classList.toggle("active");
  overlay.classList.toggle("overlay--show");

  const isMenuActive = document.body.getAttribute("data-menu");
  document.body.setAttribute("data-menu", isMenuActive ? "" : "active");
}
