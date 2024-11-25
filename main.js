const form = document.querySelector("[data-form]");
const inputs = form.querySelectorAll("[data-inputs]");
const error = form.querySelectorAll("[data-error]");
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input, index) => {
    if (input.value === "") {
      error[index].classList.remove("d-none");
      input.classList.add("input_error");
    } else if (
      input.dataset.inputs === "emailAddress" &&
      !input.value.match(mailformat)
    ) {
      error[index].classList.remove("d-none");
      input.classList.add("input_error");
    } else {
      error[index].classList.add("d-none");
      input.classList.remove("input_error");
    }
  });
});
