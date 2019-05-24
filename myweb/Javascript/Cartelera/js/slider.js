var cont =0 ;
arrowRight = document.getElementById("right-arrow");
arrowLeft = document.getElementById("left-arrow");

arrowRight.addEventListener('click',function(){ // Evento para detectar click en la flecha derecha
    if(cont == 0){
        document.getElementById("image").style.backgroundImage = "url('./img/matrix2.jpg')";// Verifica si la imágen actual es la última.
        document.getElementById("texto1").style.display = "none";
        document.getElementById("texto2").style.display = "block";
        cont++;
    }
    else if(cont ==1){
        document.getElementById("image").style.backgroundImage = "url('./img/animatrix.jpg')";// Verifica si la imágen actual es la última.
        document.getElementById("texto2").style.display = "none";
        document.getElementById("texto3").style.display = "block";
        cont++;
    }
    else if(cont == 2){
        document.getElementById("image").style.backgroundImage = "url('./img/matrixrevolutions.jpg')";// Verifica si la imágen actual es la última.
        document.getElementById("texto3").style.display = "none";
        document.getElementById("texto4").style.display = "block";
        cont++;
    }
    else if(cont == 3){
        document.getElementById("image").style.backgroundImage = "url('./img/matrix.jpg')";// Verifica si la
        // imágen actual es la última.
        document.getElementById("texto4").style.display = "none";
        document.getElementById("texto1").style.display = "block";
        cont = 0;
    }
}); // Fin del Evento
arrowLeft.addEventListener('click',function(){ // Evento para detectar click en la flecha derecha
    if(cont == 0){
        document.getElementById("image").style.backgroundImage = "url('./img/matrixrevolutions.jpg')";// Verifica si la
        // imágen actual es la última.
        document.getElementById("texto1").style.display = "none";
        document.getElementById("texto4").style.display = "block";
        cont = 3;
    }
    else if(cont == 1){
        document.getElementById("image").style.backgroundImage = "url('./img/matrix.jpg')";// Verifica si la imágen
        // actual es la última.
        document.getElementById("texto2").style.display = "none";
        document.getElementById("texto1").style.display = "block";
        cont--;
    }
    else if(cont == 2){
        document.getElementById("image").style.backgroundImage = "url('./img/matrix2.jpg')";// Verifica si la imágen
        // actual es la última.
        document.getElementById("texto3").style.display = "none";
        document.getElementById("texto2").style.display = "block";
        cont --;
    }
    else if(cont == 3){
        document.getElementById("image").style.backgroundImage = "url('./img/animatrix.jpg')";// Verifica si la imágen
        // actual es la última.
        document.getElementById("texto4").style.display = "none";
        document.getElementById("texto3").style.display = "block";
        cont --;
    }
}); // Fin del Evento