function botoncontraseña(){
  const select1 = document.getElementById("digito1").value;
  const select2 = document.getElementById("digito2").value;
  const select3 = document.getElementById("digito3").value;

  let clave = select1 + select2 + select3;

  switch (clave) {
    case "911":
      document.getElementById("respuesta").textContent = "password 1 correcto";
      break;
    case "714":
      document.getElementById("respuesta").textContent = "password 2 correcto";
      break;
    default:
      document.getElementById("respuesta").textContent = "password incorrecto";
      break;
    }
}

  