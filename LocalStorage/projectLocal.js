// instancias:

const nameForm = document.querySelector('#name-form')
const welcomeContainer = document.querySelector('#welcome')
const logoutButton = document.querySelector('#logout')
// metodo :
function checkUsers() {
  const userName = localStorage.getItem("name")
  //checo
  if (userName) {
    //Se tiver faço:
    nameForm.style.display = "none"
    welcomeContainer.style.display = "block"

    const userNameElement = document.querySelector('#username')
    userNameElement.textContent = userName;
  } else {
    // senão tiver faço:
    nameForm.style.display = "block"
    welcomeContainer.style.display = "none"
  }
}

// formulario:

nameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = document.querySelector("#name");
  localStorage.setItem('name', nameInput.value);
  nameInput.value = '';

  // metodo criado fora do scopo:
  checkUsers()
});
// logout:
logoutButton.addEventListener('click', () => {
  localStorage.removeItem('name')
  checkUsers()
})
// starting aplication:
checkUsers()