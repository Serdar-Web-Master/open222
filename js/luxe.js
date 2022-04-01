const input__luxe = document.querySelector(".input__luxe");
const luxe__button = document.querySelector(".luxe__button");

const luxe__2 = document.querySelector(".luxe__2");
const luxe__3 = document.querySelector(".luxe__3");

luxe__button.addEventListener("click", displayBlock);

function displayBlock() {
  const password = input__luxe.value;
  console.log(password);
  if (password == 102010) {
    luxe__2.click();
  } else if (password == 201020) {
    luxe__3.click();
  } else {
    alert("Неправильный пароль");
  }
}
