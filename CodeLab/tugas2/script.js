const VALID_CLASS = "valid";
const ERROR_CLASS = "error";

const fullNameInput = document.getElementById("full-name-input");
const fullNameError = document.getElementById("full-name-error");
const emptyFullNameError = document.getElementById("empty-full-name");

const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("email-error");
const emptyEmailError = document.getElementById("empty-email");

const addressInput = document.getElementById("address-input");
const addressError = document.getElementById("address-error");
const emptyAddressError = document.getElementById("empty-address");

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  // Validasi nama lengkap
  if (fullNameInput.value.trim() === "") {
    emptyFullNameError.classList.remove("hide");
    fullNameError.classList.add(ERROR_CLASS);
    fullNameInput.classList.add(ERROR_CLASS);
  } else {
    emptyFullNameError.classList.add("hide");
    fullNameError.classList.remove(ERROR_CLASS);
    fullNameInput.classList.remove(ERROR_CLASS);
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

  // Validasi alamat
  const addressValue = addressInput.value.trim();
  if (addressValue === "") {
    emptyAddressError.classList.remove("hide");
    addressError.classList.add(ERROR_CLASS);
    addressInput.classList.add(ERROR_CLASS);
  } else {
    emptyAddressError.classList.add("hide");
    addressError.classList.remove(ERROR_CLASS);
    addressInput.classList.remove(ERROR_CLASS);
  }
});

function isValidEmail(email) {
  // Validasi sederhana untuk alamat email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
