// ==============================
// Open Surprise Button
// ==============================

const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const birthday = document.getElementById("birthday");
const music = document.getElementById("music");

openBtn.addEventListener("click", () => {

    welcome.style.display = "none";

    birthday.style.display = "flex";

    music.play();

    createHearts();
    createButterflies();
    createSparkles();

});
// ==============================
// Floating Hearts
// ==============================

function createHearts(){

setInterval(()=>{

const heart=document.createElement("span");

heart.classList.add("heart");

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=4+Math.random()*5+"s";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},300);

}
