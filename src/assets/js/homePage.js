// ===== Reels swapper =====
let mainReel = document.querySelector("#reels .mainReel");
let subReels = document.querySelectorAll("#reels .subReel .card");
let mainReelUrl = mainReel.querySelector("iframe");
let mainReelImg = mainReel.querySelector("img");
let mainReelTitle = mainReel.querySelector("h5");
let mainReelCategory = mainReel.querySelector("a");
let mainReelDesc = mainReel.querySelector("p");
for (let i = 0; i < subReels.length; i++) {
  subReels[i].querySelector(".reelCover").addEventListener("click", () => {
    let holderTitle = mainReelTitle.innerText;
    let holderCategory = mainReelCategory.innerText;
    let holderDesc = mainReelDesc.innerText;
    let holderUrl = mainReelUrl.src;
    let holderImg = mainReelImg.src;
    // ======= Main =======
    mainReelTitle.innerText = subReels[i].querySelector("h5").innerText;
    mainReelCategory.innerText = subReels[i].querySelector("a").innerText;
    mainReelDesc.innerText = subReels[i].querySelector("p").innerText;
    mainReelUrl.src = subReels[i]
      .querySelector("img")
      .getAttribute("data-reelUrl");
    mainReelImg.src = subReels[i].querySelector("img").src;
    // ======= Subs =======
    subReels[i].querySelector("h5").innerText = holderTitle;
    subReels[i].querySelector("a").innerText = holderCategory;
    subReels[i].querySelector("p").innerText = holderDesc;
    subReels[i].querySelector("img").setAttribute("data-reelUrl", holderUrl);
    subReels[i].querySelector("img").src = holderImg;
  });
}
// ===== Swipers =====
var swiper = new Swiper("#hero .swiper", {
  effect: "coverflow",
  grabCursor: true,
  autoplay: {
    delay: 3000,
  },
  centeredSlides: true,
  loop: true,
  spaceBetween: -10,
  slidesPerView: 3,
  reverseDirection: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1.3,
    slideShadows: false,
  },
});
var swiper = new Swiper("#portfolio .swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    // enabled: false,
  },
  loop: true,

  spaceBetween: 20,
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      loop: true,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper("#team .swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  spaceBetween: 20,
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      loop: true,
      // enabled: true,
    },
    576: {
      slidesPerView: 2,
      // enabled: false,
    },
    992: {
      slidesPerView: 4,
    },
  },
});
