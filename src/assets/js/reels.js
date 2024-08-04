let showReel = document.querySelector(".bigScreen");
let mainFrame = document.querySelector(".bigScreen iframe");
let allReels = document.querySelectorAll("#allReels .card img");
let covers = document.querySelectorAll(".blackout");
for (let i = 0; i < allReels.length; i++) {
  covers[i].addEventListener("click", () => {
    mainFrame.src = allReels[i].getAttribute("data-reelUrl");
    showReel.classList.remove("hidden");
  });
}
showReel.addEventListener("click", () => {
  mainFrame.src = "";
  showReel.classList.add("hidden");
});
