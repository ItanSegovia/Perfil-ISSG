document.getElementById('año').textContent = new Date().getFullYear();

const tarjeta = document.querySelector('.perfil-card');
const nombre = document.getElementById('nombre');
const ocupacion = document.getElementById('ocupacion');

let esMasculino = true;

tarjeta.addEventListener('click', () => {
  if (esMasculino) {
    nombre.textContent = 'Itana Segovia';
    ocupacion.textContent = 'Desarrolladora Web';
    alert('Se cambió el perfil a femenino');
  } else {
    nombre.textContent = 'Itan Segovia';
    ocupacion.textContent = 'Desarrollador Web';
    alert('Se cambió el perfil a masculino');
  }
  esMasculino = !esMasculino;
});