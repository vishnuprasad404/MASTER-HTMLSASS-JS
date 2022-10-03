let cardContainer = document.querySelector(".card-container");
let card = document.querySelector(".card");
let text = document.querySelector(".text");

const apiUrl = "http://localhost:3000/";
fetch(apiUrl)
  .then((res) => {
    res.json().then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        let prevCard = document.querySelector(".card-container").innerHTML;
        cardContainer.innerHTML =
          prevCard +
          `<div class="card">
             <h1 class="text">${data[i].name}</h1>
          </div>`;
        }
    });
  })
  .catch((err) => {
    console.log(err);
  });


