let hambuMenu = document.querySelector(".hamburger_menu");
let hambuContent = document.getElementsByClassName("hamburger_content")[0];
let closeMenu = document.getElementsByClassName("close_menu");

hambuMenu.addEventListener("click", () => {
  hambuContent.classList.toggle("hamburger_open");
});

for (let i = 0; i < closeMenu.length; i++) {
  closeMenu[i].addEventListener("click", () => {
    hambuContent.classList.toggle("hamburger_open");
  });
}
