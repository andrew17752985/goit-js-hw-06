const textEl = document.getElementById("text");

const inputEl = document.getElementById("font-size-control");

textEl.style.fontSize = inputEl.value + 'px';

inputEl.addEventListener("input", () => {
  const size = inputEl.value;
  console.log(size);

  textEl.style.fontSize = size + "px";
});