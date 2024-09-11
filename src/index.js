function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "atb7e03426c9eba5578b1o9acbffe81a";
  let prompt = `User instructions: Generate an easy but fancy asian food recipe of ${instructionsInput.value}`;
  let context =
    "You are a Gastronomy expert and love to cook asian recipes. Your mission is to generate an easy but also fancy recipe including the ingredients the user instruct as well as other ingredients that fit to the instructions. Make sure to follow the user instructions. Include the name of the recipe as the headline and in <strong> element at the beginning of the recipe and use one < /br> afterwards. Separate the ingredients list from the steps with < /br>. Include two < /br> after the list of ingredients.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⌛ Just a second. I am generating the recipe with the mentioned ingredients for you...</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#form-recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
