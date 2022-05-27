//  Initialize Swiper 
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

var swiper = new Swiper(".mySlide", {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
  },
  breakpoints: {
   
    200: {
      slidesPerView: 1,
    },
    
    567: {
      slidesPerView: 2,
    },
     992: {
      slidesPerView: 3,
    },
     1000: {
      slidesPerView: 6,
    },
  },
      });


// menuImg onclick show a small device navbar
// when closeImg onclick hide a small device navbar
let navbar = document.querySelector(".navbar");
let menuImg = document.querySelector(".menuImg");
let closeImg = document.querySelector(".closeImg");
menuImg.onclick = () => {
  navbar.classList.add("active");
} 
closeImg.onclick = () => {
  navbar.classList.remove("active");
} 

// window onscroll remove a small device navbar 
window.onscroll = () => {
  navbar.classList.remove("active");
}

// adding active class onclicked navbar link
let navLink = document.querySelectorAll(".navbar .nav li a");
Array.from(navLink).forEach((item, index) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".navbar .nav li a.active");
    currentNavLink.classList.remove("active"); // remove active class
    e.target.classList.add("active"); // adding active class
 
    navbar.classList.remove("active");
  }
})

// adding active class onclicked on filter buttons
// and filter product boxes
let productBox = document.querySelectorAll(".products .container .containerBox .box");
let filterBtn = document.querySelectorAll(".filter .filterBtn");
Array.from(filterBtn).forEach((item, index) => {
  item.onclick = (e) => {
    let currentFilterBtn = document.querySelector(".filter .filterBtn.active");
    currentFilterBtn.classList.remove("active"); // remove active class
    e.target.classList.add("active"); // adding active class


    let filter = e.target.dataset.filter;
    productBox.forEach((item) => {
      if (item.classList.contains(filter)) { 
        item.style.display = "block";
        item.classList.add("activeAnimation");
      }else{
        item.style.display = "none";
      }
    })
  }
})

// show login form when login link is checked
// or hide login form if register link is checked 
let userImg = document.querySelector(".userImg");
let loginForm = document.querySelector(".loginForm");
let registerForm = document.querySelector(".registerForm");
let login = document.querySelector(".login");
let closeLogin = document.querySelector(".closeLogin");
let userLogin = document.querySelector(".userLogin");
let userRegister = document.querySelector(".userRegister");

// hide login form & show register form 
userRegister.onclick = () => {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
}
// hide register form & show login form
userLogin.onclick = () => {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
}

// show login overlay 
userImg.onclick = () => {
  login.classList.add("active");
}

// remove login overlay
closeLogin.onclick = () => {
  login.classList.remove("active");
}



