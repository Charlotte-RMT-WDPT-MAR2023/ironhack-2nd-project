function handleAttendanceChange() {
  var attendSelect = document.getElementById("attend");
  var guestsContainer = document.getElementById("guestsContainer");
  var guestNamesContainer = document.getElementById("guestNamesContainer");

  guestsContainer.style.display = "none";
  guestNamesContainer.style.display = "none";

  if (attendSelect.value === "yes") {
    guestsContainer.style.display = "block";
  }
}

function submitForm(event) {
  event.preventDefault();

  var attendSelect = document.getElementById("attend");
  var guestsContainer = document.getElementById("guestsContainer");
  var guestNamesContainer = document.getElementById("guestNamesContainer");
  var guestNamesDiv = document.getElementById("guestNames");

  guestNamesDiv.innerHTML = "";

  if (attendSelect.value === "yes") {
    var guests = parseInt(document.getElementById("guests").value, 10);

    if (guests > 0) {
      guestNamesContainer.style.display = "block";

      for (var i = 0; i < guests; i++) {
        var guestNameInput = document.createElement("input");
        guestNameInput.type = "text";
        guestNameInput.name = "guestName";
        guestNameInput.required = true;

        var guestLabel = document.createElement("label");
        guestLabel.appendChild(guestNameInput);

        guestNamesDiv.appendChild(guestLabel);
        guestNamesDiv.appendChild(document.createElement("br"));
      }
    }
  }

  var dietaryContainer = document.getElementById("dietaryContainer");
  dietaryContainer.style.display = "block";
}

function handleDietaryInformation() {
   
  var dietaryInfo = document.getElementById("dietaryInfo");
  dietaryInfo.style.display = "block";

 
}

function handleMealInformation() {
var mealDetailsContainer = document.getElementById("mealDetailsContainer");
mealDetailsContainer.style.display = "block";
}

