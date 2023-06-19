let loginBtn = document.querySelector("#loginBtn");
let signupBtn = document.querySelector("#signupBtn");
let logoutBtn = document.querySelector("#logoutBtn");
let userName = document.querySelector("#userName");

loginBtn.addEventListener("click", () => {
  window.location.href = "login.html";
});

signupBtn.addEventListener("click", () => {
  window.location.href = "signup.html";
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("login");
  window.location.reload();
});

let loginData = JSON.parse(localStorage.getItem("login"));

if (loginData) {
  loginBtn.style.display = "none";
  signupBtn.style.display = "none";
  logoutBtn.style.display = "block";
  userName.textContent = loginData.name;
  userName.style.display = "block";
} else {
  loginBtn.style.display = "block";
  signupBtn.style.display = "block";
  logoutBtn.style.display = "none";
  userName.style.display = "none";
}