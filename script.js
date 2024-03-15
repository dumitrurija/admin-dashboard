
// Close / Open Admin Dashboard
const activateDashboard = document.getElementsByClassName("activate-dashboard")[0]
const adminDashboard = document.getElementsByClassName("admin-dashboard")[0]
activateDashboard.style.left = "-300px"

let adminOpen = true
document.getElementsByClassName("fa-xmark")[0].addEventListener("click", () => {
    if (adminOpen) {
        adminDashboard.style.transition = "0.15s ease-in-out"
        adminDashboard.style.left = "-300px"
        activateDashboard.style.transition = "0.15s ease-in-out"
        activateDashboard.style.left = "5%"
        document.getElementsByClassName("main")[0].style.marginLeft = "0px"
        document.getElementsByClassName("main")[0].style.transition = "0.5s ease-in-out"
        adminOpen = false
    }
})

activateDashboard.addEventListener("click", () => {
    adminDashboard.style.transition = "0.15s ease-in-out"
    adminDashboard.style.left = "0px"
    activateDashboard.style.transition = "0.15s ease-in-out"
    activateDashboard.style.left = "-300px"
    document.getElementsByClassName("main")[0].style.marginLeft = "225px"
    document.getElementsByClassName("main")[0].style.transition = "0.5s ease-in-out"
    adminOpen = true
})

// Buttons to press on Admin Dashboard
const H1submitBtn = document.getElementById("H1submitBtn")
const PsubmitBtn = document.getElementById("PsubmitBtn")
const BsubmitBtn = document.getElementById("BsubmitBtn")

// CHANGE FONT FAMILY ------------------------
// Change font family for H1
H1submitBtn.addEventListener("click", () => {
    const changeFontFamily = document.getElementsByName("font")[0].value
    const mainTitle = document.getElementById("mainTitle")
    const mainTitleSpan = document.getElementById("mainTItleSpan")
    mainTitle.style.fontFamily = `${changeFontFamily}`
    mainTitleSpan.style.fontFamily = `${changeFontFamily}`
})

// Change font family for P
PsubmitBtn.addEventListener("click", () => {
    const changeFontFamily = document.getElementsByName("font")[0].value
    const mainDescription = document.getElementById("mainDescription")
    mainDescription.style.fontFamily = `${changeFontFamily}`
})

// CHANGE FONT SIZE ------------------------
// Change font size for H1
H1submitBtn.addEventListener("click", () => {
    const changeFontSize = document.getElementsByName("font")[0].value
    const mainTitle = document.getElementById("mainTitle")
    const mainTitleSpan = document.getElementById("mainTItleSpan")
    mainTitle.style.fontSize = `${changeFontSize}px`
    mainTitleSpan.style.fontSize = `${changeFontSize}px`
})

// Change font size for P
PsubmitBtn.addEventListener("click", () => {
    const changeFontSize = document.getElementsByName("font")[0].value
    const mainDescription = document.getElementById("mainDescription")
    mainDescription.style.fontSize = `${changeFontSize}px`
})


// CHANGE COLOR ------------------------
// Change color for H1
H1submitBtn.addEventListener("click", () => {
    const changeColor = document.getElementsByName("color")[0].value
    const mainTitle = document.getElementById("mainTitle")
    const mainTitleSpan = document.getElementById("mainTItleSpan")
    mainTitle.style.color = `${changeColor}`
    mainTitleSpan.style.color = `${changeColor}`
})

// Change color for P
PsubmitBtn.addEventListener("click", () => {
    const changeColor = document.getElementsByName("color")[0].value
    const mainDescription = document.getElementById("mainDescription")
    mainDescription.style.color = `${changeColor}`
})


// CHANGE BTNS RADIUS ------------------------
// Change btns radius
BsubmitBtn.addEventListener("click", () => {
    const changeBtnRadius = document.getElementsByName("button-radius")[0].value
    const getnowBtn = document.getElementById("getnowBtn")
    const livedemoBtn = document.getElementById("livedemoBtn")
    getnowBtn.style.borderRadius = `${changeBtnRadius}px`
    livedemoBtn.style.borderRadius = `${changeBtnRadius}px`
})

// Mobile Bars
const hamburgerMenu = document.getElementsByClassName("fa-bars")[0]
let isHamburgerMenu = false
hamburgerMenu.addEventListener("click", () => {
    if (!isHamburgerMenu) {
        document.getElementById("headerNav").style.display = "block"
        hamburgerMenu.classList.add("fa-square-xmark")
        hamburgerMenu.classList.remove("fa-bars")
        isHamburgerMenu = true
        document.getElementsByTagName("header")[0].style.padding = "25px"
    } else {
        document.getElementById("headerNav").style.display = "none"
        hamburgerMenu.classList.remove("fa-square-xmark")
        hamburgerMenu.classList.add("fa-bars")
        isHamburgerMenu = false
    }
 })