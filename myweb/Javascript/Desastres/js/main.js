var timeline = document.getElementById("timeline");
var items = 4;
var paginas = 0; // página actual
postActual = 0;


var post = document.createElement("div");
var imagen = document.createElement("div");
var titulo = document.createElement("h2");
var texto = document.createElement("div");
var hr = document.createElement("hr");
var enlace = document.createElement("a");
var modalbody = document.getElementById("modal-body");
var modaltitle = document.getElementById("exampleModalLabel");
var modalimg = document.getElementById("imagenmodal");
var login = 0;

var imagenes =  Array();

var titulos = [
"Derrame del golfo de méxico",
"Desastre de Bhopal",
"Chernobyl",
"Deforestación en Indonesia"
];

var textos = [
"Deepwater Horizon fue una plataforma petrolífera semisumergible de posicionamiento rápido de aguas ultra-profundas2​ construida en el año 2001 y situada en el golfo de México, compartido por Estados Unidos, Cuba y México. Se hundió el 22 de abril de 2010 como resultado de una explosión que había tenido lugar dos días antes, provocando el más importante vertido de petróleo de la historia,3​ estimado en 779 000 t de petróleo crudo.",
"El desastre de Bhopal, ocurrido el 3 de diciembre de 1984 en la región de Bhopal (India), se originó al producirse una fuga de isocianato de metilo en una fábrica de plaguicidas propiedad de un 51% de la compañía estadounidense Union Carbide (parte de cuyos activos fueron posteriormente adquiridos por Dow Chemical) y del restante 49%, del gobierno de la India.",
"El accidente de Chernóbil1​ fue un accidente nuclear sucedido en la central nuclear Vladímir Ilich Lenin (a 3 km de la ciudad de Prípiat, actual Ucrania) el sábado 26 de abril de 1986. Considerado, junto con el accidente nuclear de Fukushima I en Japón en 2011, como el más grave en la Escala Internacional de Accidentes Nucleares (accidente mayor, nivel 7), constituye uno de los mayores desastres medioambientales de la historia",
"La industria del aceite de palma es la principal responsable de la destrucción de los bosques de Indonesia. Las empresas productoras de aceite de palma y del sector papelero, han deforestado más de 130.000 hectáreas de bosque tropical desde finales de 2015. "
];

var textosFull = [
    "Catástrofe del golfo de México\n" +
    "Deepwater Horizon fue una plataforma petrolífera semisumergible, situada en el golfo de México. Se hundió el 22 de abril de 2010 como resultado de una explosión que había tenido lugar dos días antes, provocando el más importante vertido de petróleo de la historia,3 estimado en 779 000 t de petróleo crudo.\n" +
    "Entre 22,71 y 37,85 millones de litros de crudo están enterrados en las profundidades del mar. La tragedia medioambiental ha dejado un rastro de mil delfines muertos, entre 27.000 y 65.000 tortugas fallecidas, así como la desaparición del 12 % de los pelícanos marrones y el 32 % de las gaviotas en la zona norte del Golfo. Las personas que trabajaron en el derrame tenían perfiles sanguíneos significativamente alterados que los ponen en un mayor riesgo de desarrollar cáncer de hígado, leucemia y otros trastornos. <iframe class='mx-auto d-block m-4' width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Ky42GYc884s\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
    "Se originó al producirse una fuga de isocianato de metilo en una fábrica de plaguicidas de la compañía estadounidense Union Carbide. Al entrar en contacto con la atmósfera, el compuesto liberado comenzó a descomponerse en varios gases muy tóxicos que formaron una nube letal que, al ser más densos los gases que la formaban que el aire atmosférico, recorrió a ras de suelo toda la ciudad. Miles de personas y seres vivos murieron de forma casi inmediata asfixiadas por la nube tóxica.\n" +
    "Se estima que entre 6.000 y 8.000 personas murieron en la primera semana tras el escape tóxico y al menos otras 12.000 fallecieron posteriormente como consecuencia directa de la catástrofe, que afectó a más de 600.000 personas, 150.000 de las cuales sufrieron graves secuelas. Además, perecieron también miles de cabezas de ganado y animales domésticos. Todo el entorno del lugar del accidente quedó seriamente contaminado por sustancias tóxicas y metales pesados que tardarán muchos años en desaparecer. <iframe class='m-4 d-block mx-auto' width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/XNOtSoKSW1I\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
    "El accidente de Chernóbil fue un accidente nuclear sucedido en la central nuclear Vladímir Ilich Lenin, el sábado 26 de abril de 1986. Se produjo un aumento súbito de potencia en el reactor 4 que produjo el sobrecalentamiento del núcleo del reactor, lo que terminó provocando la explosión del hidrógeno acumulado en su interior. La cantidad de materiales radiactivos y tóxicos que se expulsaron, se estimó que fue unas 500 veces mayor que el liberado por la bomba atómica arrojada en Hiroshima.\n" +
    "Causó directamente la muerte de 31 personas, y se cifra en 9.000 las muertes causadas por el escape. La alta radiación a la que fueron expuestas las poblaciones colindantes aumentó en 4.000 los fallecimientos por cáncer, mientras que otros 5.000 serían atribuibles a la radiación que se diseminó por otras regiones.\n" +
    "En un radio de unos 20 o 30 kilómetros alrededor del reactor se produjo un aumento de la mortalidad de plantas y animales, así como pérdidas en su capacidad reproductiva. <iframe class='m-4 d-block mx-auto' width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/bMgBYWwo7dE\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
    "La industria del aceite de palma es la principal responsable de la destrucción de los bosques de Indonesia. Las empresas productoras de aceite de palma y del sector papelero, han deforestado más de 130.000 hectáreas de bosque tropical desde finales de 2015. Indonesia ha perdido la cuarta parte de sus bosques en los últimos 25 años. La deforestación, provocada comúnmente a través de la quema de la selva, colocaron la pasada década a a Indonesia como el tercer país emisor en gases de efecto invernadero del mundo. \n" +
    "\n" +
    "La población de orangutanes de Borneo se ha reducido a la mitad en los últimos diez años y en el caso de los orangutanes de Sumatra la situación es crítica. Ambas especies están en serio peligro de extinción debido a la destrucción de su hábitat. <iframe class='m-4 d-block mx-auto' width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/yQBHRKCRccE\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
];
LoadImages(); // Carga las imágenes de los posts en un array
Cargar();

function LoadImages(){
    for(var i = 1; i <= items; i++){
        imagenes.push("url('./img/"+i+".jpg')");
    }
}

function Cargar(){
    timeline.innerText = "";
    for(var  i = (paginas*2)+1; i <= (paginas*2)+2; i++){

        var post = document.createElement("div");
        var imagen = document.createElement("div");
        var titulo = document.createElement("h2");
        var texto = document.createElement("div");
        var hr = document.createElement("hr");
        var enlace = document.createElement("a");
        var modalbody = document.getElementById("modal-body");
        var modaltitle = document.getElementById("exampleModalLabel");
        var modalimg = document.getElementById("imagenmodal");
// for(var i = 1; i <= items; i++){
        if(i <= items){
            post.setAttribute("class", "post");
            imagen.setAttribute("class","imagenes");
            enlace.setAttribute("id", (i).toString());
            enlace.setAttribute("href", "#");
            enlace.setAttribute("onclick", "Leer("+i+")");

            // Atributos para cargar modal con los títulos
            titulo.setAttribute("id", (i).toString());
            titulo.setAttribute("data-target", "#basicExampleModal");
            titulo.setAttribute("data-toggle", "modal");
            titulo.setAttribute("onclick", "Leer("+i+")");

            // Atributos para cargar modal con las imagenes
            imagen.setAttribute("id", (i).toString());
            imagen.setAttribute("data-target", "#basicExampleModal");
            imagen.setAttribute("data-toggle", "modal");
            imagen.setAttribute("onclick", "Leer("+i+")");

            enlace.setAttribute("data-toggle", "modal");
            enlace.setAttribute("data-target", "#basicExampleModal");
            enlace.innerText = "Leer Más...";
            imagen.style.backgroundImage = imagenes[i-1];
            titulo.innerText = titulos[i-1];
            texto.innerText = textos[i-1];
            post.appendChild(imagen);
            post.appendChild(titulo);
            post.appendChild(texto);
            post.appendChild(enlace);
            post.appendChild(enlace);
            timeline.appendChild(post);
            timeline.appendChild(hr);
        }
    }
    document.getElementById("npag").innerText = paginas+1+" de "+parseInt(items/2);
}
function Leer(id){
    // modalimg.style.backgroundImage = "url('./img/"+id+".png')";
    modalimg.style.backgroundImage = imagenes[id-1];
    modaltitle.innerText = titulos[id-1];
    modalbody.innerHTML = textosFull[id-1];
    postActual = id;
}
document.getElementById("btnNext").addEventListener("click",function(){
    if(paginas+1 < items/2){
        paginas++;
        Cargar();
        $('html,body').scrollTop(0);
        document.getElementById("npag").innerText = paginas+1;
        document.getElementById("npag").innerText = paginas+1+" de "+parseInt(items/2);
    }
});
titulo.addEventListener("click", function()
{
   Leer(this.id);
});

document.getElementById("btnPrev").addEventListener("click",function(){
    if(paginas > 0 ){
        paginas--;
        Cargar();
        $('html,body').scrollTop(0);
        document.getElementById("npag").innerText = paginas+1+" de "+parseInt(items/2);
    }
});

function editPost(){
    if(login == 0)
        alert("Must log in");
    else{
        modaltitle.innerHTML = "<textarea id='tituloArea'>"+titulos[postActual-1]+"</textarea>";
        modalbody.innerHTML = "<textarea id='textoArea' class='textoFull'>"+textosFull[postActual-1]+"</textarea>";

        document.getElementById("btnSave").classList.remove("d-none");
        document.getElementById("btnEdit").classList.remove("d-inline-block");
        document.getElementById("btnEdit").classList.add("d-none");

        document.getElementById("btnImg").classList.remove('d-none');
        document.getElementById("btnCambiar").classList.remove('d-none');


    }
}

function savePost(){
    titulos[postActual-1] = document.getElementById("tituloArea").value;
    textosFull[postActual-1] = document.getElementById("textoArea").value;


    document.getElementById("btnSave").classList.add("d-none");
    document.getElementById("btnEdit").classList.add("d-inline-block");
    document.getElementById("btnEdit").classList.remove("d-none");
    document.getElementById("btnImg").classList.add("d-none");

    document.getElementById("btnCambiar").classList.add("d-none");
    document.getElementById("btnImg").classList.add('d-none');

    Leer(postActual);
}



function Login(){
    var usuario=document.getElementById("usuario").value;
    var password = document.getElementById("contraseña").value;

    if(usuario == "admin" && password =="123"){
        login = 1;
        $('#modalLogin').modal('toggle');
        document.getElementById("btnEdit").classList.remove("d-none");

        document.getElementById("loginBtn").classList.add('d-none');
        document.getElementById("loginID").classList.remove('d-none');

        document.getElementById("loginID").innerText = "Bienvenido "+usuario;
        document.getElementById("logout").classList.remove('d-none');
    }
    else
        alert("usuario incorrecto");
}
document.getElementById("logout").addEventListener("click", function () {
    login = 0;
    document.getElementById("logout").classList.add('d-none');
    document.getElementById("loginID").classList.add('d-none');
    document.getElementById("loginBtn").classList.remove('d-none');

    document.getElementById("btnCambiar").classList.add('d-none');
});

document.getElementById("btnCambiar").addEventListener("click", function () {
    var nombre = document.getElementById("btnImg").files.item(0).name;
    imagenes[postActual-1] = "url('./img/"+nombre+"')";
    document.getElementById(postActual).style.backgroundImage = imagenes[postActual-1];
    modalimg.style.backgroundImage = imagenes[postActual-1];
});

// Jquery para evento cuando se sale del modal
//Cambiar los Jquery aqui,  la funcion que usa el modal toggle o modal show, hide, y el scroll top

$('#basicExampleModal').on('hidden.bs.modal', function () {
    document.getElementById("btnSave").classList.add("d-none");
    document.getElementById("btnEdit").classList.add("d-inline-block");
    document.getElementById("btnEdit").classList.remove("d-none");
    document.getElementById("btnImg").classList.remove("d-none");

    document.getElementById("btnCambiar").classList.add("d-none");
    document.getElementById("btnImg").classList.add('d-none');

    Cargar();
});

