const firstPassword = document.querySelector(".first");
const confirmPassword = document.querySelector(".confirm");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", () => {
  if (firstPassword.value !== confirmPassword.value) {
    alert("Passwords do not match");
    firstPassword.value = "";
    confirmPassword.value = "";
  }
});
