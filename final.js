const button = document.querySelector('#btn')
const button1 = document.querySelector('#btn1')
const button2 = document.querySelector('#btn2')
const button3 = document.querySelector('#btn3')
const h1 = document.querySelector("h1")
const h2 = document.querySelector("h2")
const p = document.querySelector('p')
const list = document

console.log(button, h1);

button.addEventListener("click",function(){
    if(h1.className == "darkmode"){
        h1.classList.remove("darkmode");
        h1.classList.add("lightmode");
    }
    else{
        h1.classList.remove("lightmode");
        h1.classList.add("darkmode");
    }
})

console.log(button2, h2);

button2.addEventListener("click", function(){
    if(h2.className == "green"){
        h2.classList.remove("green");
        h2.classList.add("red");
    }
    else{
        h2.classList.remove("red");
        h2.classList.add("green");
    }
})

button1.addEventListener("click", function(){
    const li = document.createElement("li");
    const text = document.createTextNode("L.O.L");

    li.append(text);
    list.append(li);
})

button3.removeEventListener("click", function(){
    li.append(text);
    list.append(li);
})

let play = document.getElementById("play");
function playMusic(){
    let audio = Audio("C:\Users\lucas\Desktop\IIM\Coding\JavaScript\IIM_A1JS_{CREVET Lucas}_Gr8\FARTReal_Pet 3 (ID 0241)_LS.mp3")
    audio.play()
}
play.addEventListener("click", playMusic);


Element.style.color
querySelector 
querySelectorAll
inner
classList/Add/Remove/toggle