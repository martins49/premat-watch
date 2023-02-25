console.log("i was called")
const hamburgerEl = document.getElementById("hamburger")
const menuEl = document.getElementById("menu")
const exitEl = document.getElementById("exit")

hamburgerEl.addEventListener("click", function () {
    if (menuEl.classList.contains("hidden")) {
        menuEl.classList.remove("hidden")
        exitEl.classList.remove("hidden")
        hamburgerEl.classList.add("hidden")
    }
})

exitEl.addEventListener("click", function () {
    exitEl.classList.add("hidden")
    menuEl.classList.add("hidden")
    hamburgerEl.classList.remove("hidden")
})