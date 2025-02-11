const data = {
    images: {
        playerImage: "../Assets/Images/TemporaryPlayerImage.png",
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    loaded();
})

    function loaded() {

const test = document.getElementById("Ap");
test.innerText = "0dsadas"

const user = document.getElementById("player");
user.innerHTML = data.images.playerImage;

// let scrollPosition = 0;
// let targetPosition = 0;
// let speed = 0.2;

// window.addEventListener('scroll', function(){
//     targetPosition = window.scrollY;
//    })
    
// function smoothParallax() {
//     scrollPosition = (targetPosition - scrollPosition) * speed;
//     document.body.style.backgroundPositionY = scrollPosition * 5 + "px";

//     requestAnimationFrame(smoothParallax);
    
// }   
// smoothParallax()

}
