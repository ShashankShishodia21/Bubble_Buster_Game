
function getRandomColor() {
    colorList = ["gray", "red", "#007820", "blue", "orange", "orangered", "crimson", "purple", "brown", "#8400f0"];
    return colorList[Math.floor(Math.random() * colorList.length)];
}


function bubbleMaker(){
    var clutter = "";
    for(var i = 1; i<=140; i++){
        var ran = Math.floor(Math.random()*10);
        const color = getRandomColor();
        clutter += `<div id="Bubble" style="background:${color};">${ran}</div>`;
    }
    document.querySelector("#main-bottom").innerHTML = clutter;
}
var timer = 60;
var score = 0;
var hitran = 0;
function TimeSelector(){
    setTimeout(function(){
        var timeint = setInterval(() => {
            if(timer>0){
             timer--;
             document.querySelector("#time").textContent = timer;
            }
            else{
             clearInterval(timeint);
             document.querySelector("#main-bottom").innerHTML = `<div><h1>Game Over!!!</h1> <div><a href = "main.html"><i class="fa-solid fa-rotate-right"></i></a><a href = "index.html" ><i class="fa-solid fa-house"></i></a> </div></div>`;
            }
         }, 1000);
    },1000);
}
function Hitvalue(){
    hitran = Math.floor(Math.random()*10); 
    document.querySelector("#hit").textContent = hitran;
}

function scoreCounter(){
    score += 10;
    document.querySelector("#score").textContent = score;
}
function scoredec(){
    score -= 10;
    document.querySelector("#score").textContent = score;
}
document.querySelector("#main-bottom").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitran){
        scoreCounter();
        bubbleMaker();
        Hitvalue();
    }
    else if(clickedNum != hitran){
        if(score > 0){
            scoredec();
            bubbleMaker();
            Hitvalue();
        }
    }
});



Hitvalue();
TimeSelector();
bubbleMaker();
