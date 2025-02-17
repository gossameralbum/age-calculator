const birthday = document.getElementById("birthday");
const agenumber = document.getElementById("agenumber");
const button = document.getElementById("btn");
const error = document.getElementById("error");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const date = new Date(birthday.value);
  const today = new Date();
  const age = today.getFullYear() - date.getFullYear();
  if (age >= 0) {
      agenumber.textContent = age;
      error.textContent = "";
      result.hidden = false;
  } else {
        error.textContent = "invalid date!";
        result.hidden = true;
  }
});