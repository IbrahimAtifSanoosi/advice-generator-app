const btn = document.querySelector(".dice");
const textContainer = document.querySelector(".text-container");
const adviceNumber = document.querySelector(".advice-id");

// api url
// const api_url =
//     "https://api.adviceslip.com";

window.addEventListener("load", generateAdvice);
btn.addEventListener("click", generateAdvice);

async function generateAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    var data = await response.json();


    adviceNumber.innerHTML = data.slip.id;
    textContainer.innerHTML = " \" " + data.slip.advice + " \" ";

    console.log(data.slip.id);
    console.log(data.slip.advice);
}