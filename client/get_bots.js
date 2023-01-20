// fetching the sample.json file
// fetch("sample.json")
//   .then((response) => response.json())
//   .then((data) => {
//     // looping through each key-value pair in the data
//     for (var key in data) {
//       console.log(key, data[key]);
//       // creating a new card element
//       var card = document.createElement("div");
//       card.classList.add("card");
//       card.innerHTML = "Name : " + data[key]["name"];
//       // creating a new edit button element
//       var editButton = document.createElement("button");
//       editButton.classList.add("edit");
//       editButton.innerHTML = "Edit";
//       editButton.
//       // appending the edit button to the card
//       card.appendChild(editButton);
//       // appending the card to the container element
//       document.querySelector(".container").appendChild(card);
//     }
//   })
//   .catch(function (err) {
//     console.log("Fetch Error :-S", err);
//   });

// document.querySelectorAll("edit").forEach(function (editButton) {
//   editButton.addEventListener("click", function (event) {
//     console.log("Dfd");
//     var card = event.target.parentNode;
//     var text = card.querySelector(".text");
//     var formContainer = card.querySelector(".form-container");
//     text.style.display = "none";
//     formContainer.style.display = "block";
//   });
// });
// document.querySelectorAll("form").forEach(function (form) {
//   form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     var card = event.target.parentNode.parentNode;
//     var text = card.querySelector(".text");
//     var formContainer = card.querySelector(".form-container");
//     var input = event.target.querySelector("input");
//     var value = input.value;
//     text.innerHTML = value;
//     text.style.display = "block";
//     formContainer.style.display = "none";
//   });
// });
// fetching the sample.json file

fetch("sample.json")
  .then((response) => response.json())
  .then((data) => {
    // creating a dictionary to store form elements
    var forms = {};
    var editButtons = {};
    // looping through each key-value pair in the data
    for (var key in data) {
      // creating a new card element
      var card = document.createElement("div");
      card.classList.add("card");
      //   card.style.backgroundColor = "#00B3C5";
      card.innerHTML = "Name : " + data[key]["name"];
      // creating a new edit button element
      var editButton = document.createElement("button");
      console.log(key);
      editButton.value = key;
      //   editButton = editButton;
      editButton.classList.add("edit");
      editButton.innerHTML = "Edit";
      // appending the edit button to the card
      card.appendChild(editButton);
      // creating a new form element
      var form = document.createElement("form");

      forms[key] = form;
      forms[key].classList.add("form");
      // creating a new input element for the form
      var input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "Enter new value");
      // appending the input to the form
      forms[key].appendChild(input);
      // creating a new submit button element
      var submitButton = document.createElement("button");
      submitButton.innerHTML = "Submit";
      // appending the submit button to the form
      forms[key].appendChild(submitButton);
      // appending the form to the card
      card.appendChild(forms[key]);
      // appending the card to the container element
      document.querySelector(".container").appendChild(card);
      // adding an event listener
      editButtons[key] = editButton;
      editButton.addEventListener("click", function () {
        console.log(editButton.value);
        if (forms[key].style.display === "none") {
          forms[key].style.display = "block";
        } else {
          forms[key].style.display = "none";
        }
      });
      submitButton.addEventListener("click", function (e) {
        console.log(key);
        e.preventDefault();
        data[key] = input.value;
        forms[key].style.display = "none";
        location.reload();
      });
      // adding the form element to the forms dictionary
    }
  })
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
