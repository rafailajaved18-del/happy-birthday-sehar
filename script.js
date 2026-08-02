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
// ==============================
// 🦋 Floating Butterflies
// ==============================

function createButterflies(){

setInterval(()=>{

const butterfly=document.createElement("span");

butterfly.classList.add("butterfly");

butterfly.innerHTML="🦋";

butterfly.style.top=Math.random()*80+"vh";

butterfly.style.left="-50px";

butterfly.style.animationDuration=8+Math.random()*6+"s";

document.querySelector(".butterflies").appendChild(butterfly);

setTimeout(()=>{

butterfly.remove();

},14000);

},2500);

}
// ==============================
// ✨ Sparkles
// ==============================

function createSparkles(){

for(let i=0;i<60;i++){

const sparkle=document.createElement("span");

sparkle.classList.add("sparkle");

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";

sparkle.style.animationDelay=Math.random()*3+"s";

document.querySelector(".sparkles").appendChild(sparkle);

}

}
