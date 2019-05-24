$(document).ready(function () {
    var nivel = 0;

    // function iniciar(){
    var imgs = new Array(); // Inicializa el array
    // cargarImg(imgs); // Carga las imagenes en un array
    // imgs = shuffle(imgs); // Desordena los elementos del array
    // comenzarNuevo();
    var selected = ""; // Variable de la primera imágen seleccionada
    var destapada = 0;    // }
    var timer;
    var tiempoInicio = 4600;
    var multiplicador = 1;
    var puntaje = 0;
    var timeleft = 30;
    var timetotal = 60;
    var chrometime = 1000;
    //Esto es para que detecte si el navegador es Chrome.
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    var audioElement = document.createElement('audio');
    var audioEnd = document.createElement('audio');
    audioElement.setAttribute('src', 'audio/cartas.ogg');
    audioEnd.setAttribute('src', 'audio/cheer.mp3');

    // reinicio();
    $("#bloqueo").hide();
    $("#modalNivel").modal('show');

    //Voy a mostrar un punto por cada pareja que el jugador consiga.


    $(".fondo").click(function () {
        audioElement.play();
        if (selected == "") {
            selected = $(this);
            selected.hide();
        } else if (selected.parent().attr("id") != $(this).parent().attr("id")) { // Evita que se seleccione la misma carta
            $(this).hide();

            if (selected.parent().css('background-image') != $(this).parent().css('background-image')) {
                $(this).show(2000);
                selected.show(2000);
                multiplicador = 1;
                $('#multiplicador').text("x " + multiplicador);

            }
            /*Esta condicion solo se cumplirá si ambas cartas se muestran. Me sumará 1 a la variable destapada.
            * Nuestra meta es que esta variable acumule puntos hasta llegar al numero 8*/
            else {
                timeleft += 3;
                destapada++;
                puntaje++;
                puntaje =  (puntaje * multiplicador);
                /* Voy a ver la consola para ver si el numero sube a 8*/
                // console.log(destapada);
                //Voy a mostrar un punto por cada pareja que el jugador consiga.
                $('#puntaje').html("Puntos: " + puntaje);
                $('#multiplicador').text("x " + multiplicador);

                /* Voy a crear una alerta en otro lugar que solo se activiará cuando "destapada" sea igual a 8.
                * Cuando llegue a 8, mostrará la alerta "¡Has ganado!"*/
                if (destapada == 4 && nivel == 0) {
                    clearTimeout(timer);
                    nivel = 1;
                    $('#puntaje').html("Puntos: " + puntaje);
                    //Esto se ejecuta solo cuando estas en Chrome.
                    if (isChrome) {
                        /*Esto va a hacer que priemro me muestr la carta, luego me muestre la alerta. */
                        setTimeout(function () {
                            // alert("Vamos al nivel 2");
                            $("#tituloNivel").text('Nivel 2');
                            $("#modalCambio").modal('show');
                            setTimeout(function () {
                                $("#modalCambio").modal('hide');
                            },1000);
                        }, 100);

                        //Se reiniciara, y cargara el siguiente nivel.
                        setTimeout(function () {
                            reinicio(timeleft);
                        }, chrometime);
                    }
                    //Si es cualquier otro navegador, me mostrará el mensaje sin el delay.
                    else {
                        $("#tituloNivel").text('Nivel 2');
                        $("#modalCambio").modal('show');
                        setTimeout(function () {
                            $("#modalCambio").modal('hide');
                        },1000);
                        // alert("Vamos al nivel 2");
                        //Se reiniciara, y cargara el siguiente nivel.
                        setTimeout(reinicio(timeleft), 3000);
                    }
                } else if (destapada == 6 && nivel == 1) {
                    clearTimeout(timer);
                    nivel = 2;
                    $('#puntaje').html("Puntos: " + puntaje);
                    $('#multiplicador').text("x " + multiplicador);

                    //Esto se ejecuta solo cuando estas en Chrome.
                    if (isChrome) {
                        /*Esto va a hacer que priemro me muestr la carta, luego me muestre la alerta. */
                        setTimeout(function () {
                            $("#tituloNivel").text('Nivel 3');
                            $("#modalCambio").modal('show');
                            setTimeout(function () {
                                $("#modalCambio").modal('hide');
                            },1000);
                            // alert("Vamos al nivel 3");
                        }, 100);

                        //Se reiniciara, y cargara el siguiente nivel.
                        setTimeout(function () {
                            reinicio(timeleft);
                        }, chrometime);
                    }
                    //Si es cualquier otro navegador, me mostrará el mensaje sin el delay.
                    else {
                        $("#tituloNivel").text('Nivel 3');
                        $("#modalCambio").modal('show');
                        setTimeout(function () {
                            $("#modalCambio").modal('hide');
                        },1000);
                        // alert("Vamos al nivel 3");
                        //Se reiniciara, y cargara el siguiente nivel.
                        setTimeout(reinicio(timeleft), 3000);
                    }
                    // alert("Vamos al nivel 3");
                    // setTimeout(reinicio(),3000);

                    // puntaje = 0;
                    // multiplicador = 1;
                } else if (destapada == 8 && nivel == 2) {
                    audioEnd.play();
                    setTimeout(function () {
                        audioEnd.pause();
                        audioEnd.currentTime = 0;
                    },3000);
                    clearTimeout(timer);
                    $('#puntaje').html("Puntos: " + puntaje);
                    $('#multiplicador').text("x " + multiplicador);
                    /*Cuando compeltes todas las parejas, te saldrá el mensaje "¡Has ganado!" */

                    if (isChrome) {
                        $("#tituloNivel").text('Has ganado');
                        $("#modalCambio").modal('show');
                        setTimeout(function () {
                            $("#modalCambio").modal('hide');
                        },1000);
                       // alert("Has ganado");/*Esto va a hacer que priemro me muestr la carta, luego me muestre la alerta. */
                        setTimeout(function () {
                            $("#modalNivel").modal("show");
                         //   alert("Has ganado.");
                        }, 2000);
                    } else {
                        $("#tituloNivel").text('Has ganado');
                        $("#modalCambio").modal('show');
                        setTimeout(function () {
                            $("#modalCambio").modal('hide');
                        },1000);
                       // alert("Has ganado.");
                    }
                    // $("#modalNivel").modal("show"); // Revisar si hace falta
                    setTimeout(function () {
                        $("#modalNivel").modal("show");
                        //   alert("Has ganado.");
                    }, 2000);
                }
                multiplicador = multiplicador * 2;
                $('#multiplicador').text("x " + multiplicador);

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
    function cargarImg(arrayImg) {
        if (nivel == 0) {
            for (var i = 0; i < 8; i++) {
                if (i < 4)
                    arrayImg[i] = 'url("img/' + (i + 1) + '.png")';
                else
                    arrayImg[i] = 'url("img/' + (i - 3) + '.png")';
            }
            $(".row3").hide();
            $(".row4").hide();
        }

        if (nivel == 1) {
            for (var i = 0; i < 12; i++) {
                if (i < 6)
                    arrayImg[i] = 'url("img/' + (i + 1) + '.png")';
                else
                    arrayImg[i] = 'url("img/' + (i - 5) + '.png")';
            }
            $(".row3").show();
            $(".row4").hide();
        }

        if (nivel == 2) {
            for (var i = 0; i < 16; i++) {
                if (i < 8)
                    arrayImg[i] = 'url("img/' + (i + 1) + '.png")';
                else
                    arrayImg[i] = 'url("img/' + (i - 7) + '.png")';
            }
            $(".row3").show();
            $(".row4").show();
        }
    }

    function comenzarNuevo() {
        if (nivel == 0) {
            for (var i = 0; i < 8; i++) {
                $("#" + (i + 1)).css("background-image", imgs[i]);
                $("#" + (i + 1)).children().hide();
                $("#" + (i + 1)).children().show(6000);
                $("#bloqueo").fadeOut(5000);
                tiempoInicio = 4800;
            }
        } else if (nivel == 1) {
            for (var i = 0; i < 12; i++) {
                $("#" + (i + 1)).css("background-image", imgs[i]);
                $("#" + (i + 1)).children().hide();
                $("#" + (i + 1)).children().show(5000);
                $("#bloqueo").fadeOut(4000);
                tiempoInicio = 2000;
            }
        } else if (nivel == 2) {
            for (var i = 0; i < 16; i++) {
                $("#" + (i + 1)).css("background-image", imgs[i]);
                $("#" + (i + 1)).children().hide();
                $("#" + (i + 1)).children().show(3000);
                $("#bloqueo").fadeOut(2000);
                tiempoInicio = 250;
            }
        }
    }

    $("#btnStart").click(function () {
        reinicio();
    });

    function reinicio(tiemporestante) {
        imgs = new Array(); // Inicializa el array
        cargarImg(imgs); // Carga las imagenes en un array
        imgs = shuffle(imgs); // Desordena los elementos del array
        //comenzarNuevo();
        selected = ""; // Variable de la primera imágen seleccionada
        destapada = 0;
        $('#puntaje').html("Puntos: " + puntaje);
        $('#multiplicador').text("x " + multiplicador);
        $("#bloqueo").show();
        $("#nivelActual").text("Nivel "+parseInt(nivel+1));
        comenzarNuevo();
        clearTimeout(timer);
        timeleft = tiemporestante;
        setTimeout(function () {
            timer = setInterval(function () {
                progress(timetotal, $('#progressBar'));
            }, 1000);
        }, tiempoInicio);
        // timer = setInterval(function () {
        //    progress(timetotal, $('#progressBar'));
        //  }, 1000);
    }

    function progress(timetotal, $element) {
        var progressBarWidth = timeleft * $element.width() / timetotal;
        $element.find('div').animate({width: progressBarWidth}, 500).html(Math.floor(timeleft / 60) + ":" + timeleft % 60);
        if (timeleft > 0)
            timeleft--;
        else {
            $("#tituloNivel").text('Tiempo agotado');
            $("#modalCambio").modal('show');
            setTimeout(function () {
                $("#modalCambio").modal('hide');
            },1000);
            reinicio(30);
        }
    }

    $(".nivel1").click(function () {
        $("#bloqueo").show();
        $("#modalNivel").modal('hide');
        nivel = 0;
        puntaje = 0;
        multiplicador = 1;
        reinicio(30);
    });
    $(".nivel2").click(function () {
        $("#bloqueo").show();
        $("#modalNivel").modal('hide');
        nivel = 1;
        puntaje = 0;
        multiplicador = 1;
        reinicio(30);
    });
    $(".nivel3").click(function () {
        $("#bloqueo").show();
        $("#modalNivel").modal('hide');
        nivel = 2;
        puntaje = 0;
        multiplicador = 1;
        reinicio(30);
    });
});