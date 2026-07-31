function createHeart() {

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = "❤️";

heart.style.left = Math.random() * 100 + "vw";

heart.style.animationDuration = (Math.random() * 3 + 5) + "s";

heart.style.fontSize = (Math.random() * 15 + 18) + "px";

document.body.appendChild(heart);

setTimeout(() => {
    heart.remove();
}, 8000);

}

setInterval(createHeart, 300);

// Welcome Message

window.onload = function(){

alert("❤️ Welcome to Naekkeo ❤️");

};
