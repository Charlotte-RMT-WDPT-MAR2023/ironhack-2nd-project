function addSuggestion() {
  var dishName = document.getElementById("dishName").value;
  var allergens = document.querySelectorAll('input[name="allergens"]:checked');
  var dietaryRequirements = document.getElementById(
    "dietaryRequirements"
  ).selectedOptions;
  var recipeLink = document.getElementById("recipeLink").value;
  var allergensArray = [];
  var dietaryReqArray = [];

  allergens.forEach(function (allergen) {
    allergensArray.push(allergen.value);
  });

  for (var i = 0; i < dietaryRequirements.length; i++) {
    dietaryReqArray.push(dietaryRequirements[i].value);
  }

  var suggestion = document.createElement("li");
  suggestion.innerHTML =
    "<strong>Dish Name:</strong> " +
    dishName +
    "<br><strong>Allergens:</strong> " +
    allergensArray.join(", ") +
    "<br><strong>Dietary Requirements:</strong> " +
    dietaryReqArray.join(", ") +
    "<br><strong>Recipe Link:</strong> <a href='" +
    recipeLink +
    "' target='_blank'>" +
    recipeLink +
    "</a>";

  document.getElementById("suggestionList").appendChild(suggestion);

  // Clear input fields after adding a suggestion
  document.getElementById("dishName").value = "";
  allergens.forEach(function (allergen) {
    allergen.checked = false;
  });
  document.getElementById("dietaryRequirements").selectedIndex = -1;
}
