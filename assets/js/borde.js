bordeenlaimagen = false;

function bordeimg() {

    if (!bordeenlaimagen) {
        imagen.style.border = "2px solid red";
        bordeenlaimagen = true;
    } 
    
    else {
        imagen.style.border = "none";
        bordeenlaimagen = false;
    }
}
