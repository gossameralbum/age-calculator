const birthday = document.getElementById("birthday");
const agenumber = document.getElementById("agenumber");
const button = document.getElementById("btn");
const error = document.getElementById("error");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const date = new Date(birthday.value);
  const today = new Date();
  let age = today.getFullYear() - date.getFullYear();
  if (today.getMonth() < date.getMonth()) {
    age--;
    }
  if (age >= 0) {
      agenumber.textContent = age;
      error.textContent = "";
      result.hidden = false;
  } else {
        error.textContent = "invalid date!";
        result.hidden = true;
  }
}
);