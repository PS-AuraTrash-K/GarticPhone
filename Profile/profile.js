let start = document.querySelector(".start-btn")


start.addEventListener("click", function() {
    let inpit = document.querySelector(".shoot")
    console.log(inpit.value)
    window.location.href = "../Loby/loby.html?name="+inpit.value
})