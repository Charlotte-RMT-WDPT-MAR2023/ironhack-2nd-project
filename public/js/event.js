var guestCounter = 5;

function addGuestField() {
  var guestFieldsDiv = document.getElementById("guestFields");
  var newGuestField = document.createElement("div");

  var label = document.createElement("label");
  label.innerHTML = "Name " + ":";
  newGuestField.appendChild(label);

  var input = document.createElement("input");
  input.type = "text";
  input.name = "guests[]";
  input.required = true;
  newGuestField.appendChild(input);

  newGuestField.appendChild(document.createElement("br"));
  newGuestField.appendChild(document.createElement("br"));

  guestFieldsDiv.appendChild(newGuestField);
  guestCounter++;
}

document.getElementById("inviteMethod").addEventListener("change", function () {
  var inviteMethod = this.value;
  var emailField = document.getElementById("emailField");

  if (inviteMethod === "email") {
    emailField.style.display = "block";
  } else {
    emailField.style.display = "none";
  }
});
