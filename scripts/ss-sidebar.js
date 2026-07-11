const sidebarBtn = document.querySelector(".sidebar-button");
const backSideBarBtn = document.querySelector(".ss-sidebar-back-button");
const sideBar = document.querySelector(".sidebar-small-screens");

sidebarBtn.addEventListener("click", () => {
    sideBar.classList.add("active")
})


backSideBarBtn.addEventListener("click", () => {
    sideBar.classList.remove("active")
})