function showAlert(){
    alert('Hola, esta es una alerta desde JavaScript');
}

let boton1 = document.getElementById("miBoton");

function handleClick(){
    alert("Hiciste click en el botón");
}

boton1.addEventListener("click",handleClick);


let form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}
function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const nameInput = document.getElementById('nombre');
    const name = nameInput.value;
    if (!validateEmail(email)) {
      alert(`${name}, por favor ingrese un correo electrónico válido.`);
    } else {
      alert(`${name}, Correo electrónico enviado correctamente.`);
    }

}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})