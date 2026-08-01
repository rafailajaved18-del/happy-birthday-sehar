function openGift(){

let music = document.getElementById("music");
music.play();

document.querySelector(".loading").style.display="none";
document.getElementById("main").style.display="block";

for(let i=0;i<80;i++){
    let heart=document.createElement("div");
    heart.innerHTML="💖";
    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"%";
    heart.style.top="100%";
    heart.style.fontSize=(20+Math.random()*25)+"px";
    heart.style.pointerEvents="none";
    heart.style.transition="all 6s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.style.top="-10%";
    },100);

    setTimeout(()=>{
        heart.remove();
    },6000);
}

} 
