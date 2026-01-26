document.addEventListener("DOMContentLoaded", function() {
  const aviso = document.getElementById("avisoLegal");
  const aceptarBtn = document.getElementById("aceptarBtn");

  // Comprobar si ya aceptó
  if (localStorage.getItem("rgpdAceptado")) {
    aviso.style.display = "none";
  }

  aceptarBtn.addEventListener("click", function() {
    localStorage.setItem("rgpdAceptado", "true");
    aviso.style.display = "none";
  });
});


const boton = document.querySelector('.hamburguesa');
const menu = document.querySelector('.menu');

boton.addEventListener('click', () => {
    menu.classList.toggle('activo');
});
