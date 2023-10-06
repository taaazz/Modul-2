const VALID_CLASS = "valid";
const ERROR_CLASS = "error";

const firstNameInput = document.getElementById("first-name-input");
const firstNameError = document.getElementById("first-name-error");
const emptyFirstNameError = document.getElementById("empty-first-name");

const lastNameInput = document.getElementById("last-name-input");
const lastNameError = document.getElementById("last-name-error");
const emptyLastNameError = document.getElementById("empty-last-name");

const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("email-error");
const emptyEmailError = document.getElementById("empty-email");

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  // Validasi nama depan
  if (firstNameInput.value.trim() === "") {
    emptyFirstNameError.classList.remove("hide");
    firstNameError.classList.add(ERROR_CLASS);
    firstNameInput.classList.add(ERROR_CLASS);
  } else {
    emptyFirstNameError.classList.add("hide");
    firstNameError.classList.remove(ERROR_CLASS);
    firstNameInput.classList.remove(ERROR_CLASS);
  }

  // Validasi nama belakang
  if (lastNameInput.value.trim() === "") {
    emptyLastNameError.classList.remove("hide");
    lastNameError.classList.add(ERROR_CLASS);
    lastNameInput.classList.add(ERROR_CLASS);
  } else {
    emptyLastNameError.classList.add("hide");
    lastNameError.classList.remove(ERROR_CLASS);
    lastNameInput.classList.remove(ERROR_CLASS);
  }

  // Validasi email
  const emailValue = emailInput.value.trim();
  if (emailValue === "") {
    emptyEmailError.classList.remove("hide");
    emailError.classList.add(ERROR_CLASS);
    emailInput.classList.add(ERROR_CLASS);
  } else if (!isValidEmail(emailValue)) {
    emptyEmailError.classList.add("hide");
    emailError.classList.remove("hide");
    emailInput.classList.add(ERROR_CLASS);
  } else {
    emptyEmailError.classList.add("hide");
    emailError.classList.add("hide");
    emailInput.classList.remove(ERROR_CLASS);
  }
});

function isValidEmail(email) {
  // Validasi sederhana untuk alamat email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
