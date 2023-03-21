const form = document.getElementById("register-form");
const emailFild = form.querySelector("[name=email]");

const isEmail = (value) => value.includes("@") && !value.includes("");

const emailValidation = function (event) {
  event.preventDefault();
  const emailErrorMessage = document.querySelector("email-field-error");
  if (!isEmail(e.target.value)) {
    if (!emailErrorMessage) {
      this.insertAdjacentHTML(
        "afterend",
        `<p id ="email-field-error" class = "form-error">email должен содержать символ @ и не содержать пробелов</p>`
      );
    }
    return;
  }

  emailErrorMessage?.remove();
};

emailFild.addEventListener("input", _.throttle(emailValidation, 1000));
