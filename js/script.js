document.getElementById("contact-us").addEventListener("submit", function(event) {
    const name = document.getElementById("name-input").value
    const email = document.getElementById("email-input").value
    const option = document.getElementById("option").value

    const errorName = document.getElementById("error-name")
    const errorEmail = document.getElementById("error-email")
    const errorOption = document.getElementById("error-option")

    var isValid = true
    var alertMessage = "YOUR SUCCESSFULL DATA HAS BEEN RECEIVED ✔"

    if (name === "") {
        isValid = false
        alertMessage = ""
        errorName.textContent = "NAME REQUIRED !"
    } else {
        errorName.textContent = ""
    }

    if (email === "") {
        isValid = false
        alertMessage = ""
        errorEmail.textContent = "EMAIL REQUIRED !"
    } else {
        errorEmail.textContent = ""
    }

    if (option === "option1") {
        isValid = false
        alertMessage = ""
        errorOption.textContent = "OPTION REQUIRED !"
    } else {
        errorOption.textContent = ""
    }

    if (isValid) {
        alert(alertMessage)
    } else {
        event.preventDefault()
    }
})

let a = 0
const images = [
    "assets/images/beach.jpg",
    "assets/images/beach2.jpg",
    "assets/images/montains-one.jpg",
    "assets/images/montains-two.jpg",
    "assets/images/traditional-one.jpg",
    "assets/images/traditional-two.jpg",
    "assets/images/family-one.jpg",
    "assets/images/family-two.jpg",
    "assets/images/alone-one.jpg",
    "assets/images/alone-two.jpg",
]

function bannerSlide() {
    a += 1
    if (a == images.length) {
        a = 0
    }
    document.getElementById("image-slider").src = images[a]
}
setInterval(bannerSlide, 1000)

let b = 0
const image = [
    "assets/images/map.jpg",
    "assets/images/fly.jpg",
    "assets/images/show.jpg",
    "assets/images/wait.jpg",
    "assets/images/walk.jpg",
    "assets/images/water.jpg",
]

function bannerSlide2() {
    b += 1
    if (b == image.length) {
        b = 0
    }
    document.getElementById("images-slider").src = image[b]
}
setInterval(bannerSlide2, 1000)

// ========================================================================= try later 

// const submitButton = document.getElementsByClassName('primary-button')
// const nameInput = document.getElementById('name-input')
// const emailInput = document.getElementById('email-input')
// const nameOutput = document.getElementById('username')
// const imageSlider = document.getElementById('slider')

// submitButton[0].addEventListener("click", function(event) {
//     if ( nameInput.value.length === 0 || emailInput.value.length === 0) {
//         alert("Nama atau email tidak boleh kosong")
//     } else {
//         nameOutput.textContent = nameInput.value
//     }
// })

// var i = 0
// const images = [
//     "assets/images-1.jpeg",
//     "assets/images-2.jpeg",
//     "assets/images-3.jpg"
// ]

// function bannerSlide() {
//     i += 1
//     if (i == images.length) {
//         i = 0
//     }
//     imagesSlider.src = images[i]
// }
// setInterval(bannerSlide, 1000)
// =========================================================================

