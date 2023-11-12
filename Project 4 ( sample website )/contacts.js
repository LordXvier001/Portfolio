const input = document.querySelectorAll("input");
const button1 = document.querySelector("#btn");
const textarea = document.getElementById("textarea");

input.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.background = "none";
  });
});

textarea.addEventListener("click", () => {
  textarea.style.background = "none";
});

button1.addEventListener("click", () => {
  event.preventDefault();
  if (
    input[0].value.trim() !== "" &&
    input[1].value.trim() !== "" &&
    input[2].value.trim() !== ""
  ) {
    alert(`Thanks! ${input[0].value} for Your Generous Response.`);
  } else {
    alert("Enter Complete Details Man");
  }
});
