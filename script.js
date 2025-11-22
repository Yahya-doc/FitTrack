const hamburger = document.getElementById("hamburger");
const drawer = document.getElementById("mobile-drawer");
const closeBtn = document.getElementById("close-drawer");

function openDrawer() {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  hamburger.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}
function closeDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  hamburger.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

hamburger.addEventListener("click", () => {
  drawer.classList.contains("open") ? closeDrawer() : openDrawer();
});

closeBtn.addEventListener("click", closeDrawer);
drawer.querySelector(".backdrop").addEventListener("click", closeDrawer);
drawer
  .querySelectorAll(".mobile-nav a")
  .forEach((a) => a.addEventListener("click", closeDrawer));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDrawer();
});
