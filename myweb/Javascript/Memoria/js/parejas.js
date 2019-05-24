$(document).ready(function () {
    // iniciar();

    // function iniciar(){
        var imgs = new Array(); // Inicializa el array
        cargarImg(imgs); // Carga las imagenes en un array
        imgs = shuffle(imgs); // Desordena los elementos del array
        comenzarNuevo();
        var selected = ""; // Variable de la primera imágen seleccionada
        var destapada = 0;
    // }


    $(".fondo").click(function () {
        if(selected == ""){
            selected = $(this);
            selected.hide(500);
        }

        else if(selected.parent().attr("id") != $(this).parent().attr("id")){
            $(this).hide(500);

            if(selected.parent().css('background-image') != $(this).parent().css('background-image')){
                $(this).show(1000);
                selected.show(1500);
            }
            /*Esta condicion solo se cumplirá si ambas cartas se muestran. Me sumará 1 a la variable destapada.
            * Nuestra meta es que esta variable acumule puntos hasta llegar al numero 8*/
            else{
                destapada++;
                /* Voy a ver la consola para ver si el numero sube a 8*/
                console.log(destapada);
                /* Voy a crear una alerta en otro lugar que solo se activiará cuando "destapada" sea igual a 8.
                * Cuando llegue a 8, mostrará la alerta "¡Has ganado!"*/
                if (destapada == 8){
                    /*Cuando compeltes todas las parejas, te saldrá el mensaje "¡Has ganado!" */
                    alert("¡Has ganado!");
                }
            }
            selected = "";
        }
    });
    // Funcion para desordenar los elementos de un array
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    //Función para cargar array con las rutas de las imágenes
    function cargarImg(arrayImg){
        for(var i = 0; i < 16; i++){
            if(i < 8)
                arrayImg[i] = 'url("img/'+(i+1)+'.png")';
            else
                arrayImg[i] = 'url("img/'+(i-7)+'.png")';
        }
    }

    function comenzarNuevo(){
        for(var i = 0; i < 16; i++){
            $("#"+(i+1)).css("background-image",imgs[i]);
            $("#"+(i+1)).children().show();
        }
    }
$("#btnStart").click(function () {
    imgs = new Array(); // Inicializa el array
    cargarImg(imgs); // Carga las imagenes en un array
    imgs = shuffle(imgs); // Desordena los elementos del array
    //comenzarNuevo();
    selected = ""; // Variable de la primera imágen seleccionada
    destapada = 0;
    comenzarNuevo();
    });
});