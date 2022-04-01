const input__user = document.querySelector(".input__user");
const user__button = document.querySelector(".user__button");

const use__4 = document.querySelector(".use__4");
const use__5 = document.querySelector(".use__5");

user__button.addEventListener("click", displayBlock);



function displayBlock() {
  const password = input__user.value;
  console.log(password);
  if (password == 102010) {
    use__4.click();
  } else if (password == 201020) {
    use__5.click();
  } else {
    alert("Неправильный пароль");
  }
}
