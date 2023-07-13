function stiker() {
    const stikers1 = Number(document.getElementById("p1").value);
    const stikers2 = Number(document.getElementById("p2").value);
    const stikers3 = Number(document.getElementById("p3").value);
    const mensaje = document.getElementById("resultado");

    let total = stikers1 + stikers2 + stikers3;

    if(stikers1 < 0 || stikers2 < 0 || stikers3 < 0) {
        mensaje.textContent = "los valores ingresados deben ser mayor o igual a 0";
        document.getElementById("p1").evalue = "0";
        return;
    }
     else if (total > 10) {
        mensaje.textContent ="Llevas demasiados stikers";
     }
     else{
        mensaje.textContent = " Llevas " + total + " stikers ";
     }
}