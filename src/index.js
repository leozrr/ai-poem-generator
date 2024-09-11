function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 20,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "atb7e03426c9eba5578b1o9acbffe81a";
  let prompt = `User instructions: Generate a korean and english poem about ${instructionsInput.value}`;
  let context =
    "You are a Poem expert and love to write short poems. Your mission is to generate a four line poem and separate each line with a <br />. Do not name html in the beginning. Make sure to follow the user instructions. Sign it with SheCodes AI in <strong> element at the end of the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#form-poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
