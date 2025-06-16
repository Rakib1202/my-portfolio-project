
//Navigation bar 
window.addEventListener("scroll", function () {
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

//Services Section 
const serviceModals = document.querySelectorAll(".service-model");
const learnmorebtns = document.querySelectorAll(".learn-more-btn");
const modelclosebtns = document.querySelectorAll(".model-close-btn");

var model = function (modelClick) {
    serviceModals[modelClick].classList.add("active");
}

learnmorebtns.forEach((learnmorebtn, i) => {
    learnmorebtn.addEventListener("click", () => {
        model(i);
    });
});

modelclosebtns.forEach((modelclosebtn) => {
    modelclosebtn.addEventListener("click", () => {
        serviceModals.forEach((modelView) => {
            modelView.classList.remove("active");
        });
    });
});


//Portfolio section - model
const porfolioModals = document.querySelectorAll(".porfolio-model");
const imgcards = document.querySelectorAll(".img-card");
const porfolioclosebtns = document.querySelectorAll(".porfolio-close-btn");

var PortfolioModel = function (modelClick) {
    porfolioModals[modelClick].classList.add("active");
}

imgcards.forEach((imgcard, i) => {
    imgcard.addEventListener("click", () => {
        PortfolioModel(i);
    });
});

porfolioclosebtns.forEach((porfolioclosebtn) => {
    porfolioclosebtn.addEventListener("click", () => {
        porfolioModals.forEach((porfolioModallView) => {
            porfolioModallView.classList.remove("active");
        });
    });
});

//Our Clients -Swiper
 
//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50; // subtracting 50 for offset
    const id = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav-items a[href*='" + id + "']").classList.add("active");
    } else {
      document.querySelector(".nav-items a[href*='" + id + "']").classList.remove("active");
    }
  });
});


//Dark theme 
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");
  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? "dark" : "light";

const getCurrentIcon = () =>
  themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}


// Responsive navigation menu close
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItem = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

navItem.forEach((navItem)=>{

  navItem.addEventListener("click",()=>{
    navigation.classList.remove("active");
  });
});