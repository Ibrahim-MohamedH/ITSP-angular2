// let theme = document.querySelector(".theme");
// let themeBtn = document.querySelector(".themeBtn");
// let sTop = document.querySelector(".scroll-top");
// let currentTheme = localStorage.getItem("theme");

// function light() {
//   // themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
//   theme.href = theme.href.replace("dark", "light");
//   themeBtn.classList.replace("dark", "light");
// }
// function dark() {
//   // themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
//   theme.href = theme.href.replace("light", "dark");
//   themeBtn.classList.replace("light", "dark");
// }

// if (currentTheme) {
//   if (currentTheme == "dark") {
//     dark();
//   } else {
//     light();
//   }
// }
// function changeTheme() {
//   console.log("hello");
//   if (themeBtn.classList.contains("light")) {
//     dark();
//     localStorage.setItem("theme", "dark");
//   } else {
//     light();
//     localStorage.setItem("theme", "light");
//   }
// }

// themeBtn.addEventListener("click", changeTheme);
// sTop.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });
