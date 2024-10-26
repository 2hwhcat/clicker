//Variables
let clicks = 0;
const audio = new Audio("mixkit-fast-double-click-on-mouse-275.wav");
const auddio = new Audio("Pesnya_Tap_tap_tap_po_homyaku.mp3");
const buttons = document.querySelectorAll("button");
let random = Math.floor(Math.random());
//end

function add() {
    clicks++;
    document.getElementById("clickcount").innerHTML = 'Coins: ' + clicks;

}


buttons.forEach(clickcount => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

buttons.forEach(block => {
  button.addEventListener("click", () => {
    auddio.play();
  });
});