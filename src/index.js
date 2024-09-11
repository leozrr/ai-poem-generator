function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");
  new Typewriter("#poem", {
    strings: "XYZ",
    autoStart: true,
    cursor: "",
    delay: 20,
  });
}
let poemFormElement = document.querySelector("#form-poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
