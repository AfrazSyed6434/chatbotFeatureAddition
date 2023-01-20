/* Use Fetch API to read data from sample.json */
fetch("sample.json")
  .then((response) => response.json())
  .then((data) => {
    /* Create cards for each key in data */
    for (const key in data) {
      const card = document.createElement("div");
      card.classList.add("card");

      /* Add key value in card */
      const cardContent = document.createElement("p");
      cardContent.innerHTML =
        "Bot Name :" +
        data[key]["name"] +
        "\n" +
        "Rate Limit  :" +
        data[key]["dailyLimit"];
      card.appendChild(cardContent);

      /* Add submit button */
      const button = document.createElement("button");
      button.innerHTML = "Launch";
      var botCode = data[key]["modelCode"];
      button.onclick = () => {
        /* Redirect to body.html and pass key as parameter */
        window.location.href = `bot_page.html?key=${botCode}`;
      };
      card.appendChild(button);

      /* Add card to container */
      document.getElementById("card-container").appendChild(card);
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
