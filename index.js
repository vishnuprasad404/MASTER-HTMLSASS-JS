let cardContainer = document.querySelector(".card-container");
let card = document.querySelector(".card");
let text = document.querySelector(".text");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (let i = 0; i < arr.length; i++) {
  let prevCard = document.querySelector(".card-container").innerHTML;
  cardContainer.innerHTML =
    prevCard +
    `<div class="card">
       <h1 class="text">${arr[i]}</h1>
    </div>`;
}
