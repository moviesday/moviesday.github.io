let form = document.getElementById("form1");
let btn = document.getElementById("continue-btn");
let closeBtn = document.getElementById("cross");
let mainPage = document.getElementById("whole");

function showForm() {
  form.classList.remove("rot");
  mainPage.classList.add("hide");
}
function hideForm() {
  form.classList.add("rot");
  mainPage.classList.remove("hide");
}

btn.addEventListener("click", showForm);
closeBtn.addEventListener("click", hideForm);
