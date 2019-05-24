var timeline = document.getElementById("timeline");
var items = 10;
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
"Estas son las razones por las que muchos programadores están empezando a aprender Python",
"Estos son los lenguajes de programación más populares según la cantidad de tutoriales que se buscan en Google",
"Los cuatro motivos con los que Google Cloud quiere arrebatar el control de la nube a AWS y Azure",
"Seis recruiters tecnológicos nos confiesan los grandes problemas que tienen para contratar a nuevos trabajadores",
"Cómo enseñarles JavaScript a los niños",
"Ya puedes descargar Visual Studio 2019 para Windows y macOS",
"Es tu última oportunidad: cómo descargar todos tus datos de Google+ antes de que cierre para siempre",
"Qué es serverless y por qué adoptarlo en el desarrollo de tu próxima aplicación",
"La calculadora de Windows es el proyecto más popular de todo GitHub desde que Microsoft liberó su código",
"El ecosistema de TensorFlow para programadores principiantes y expertos en Machine Learning: cursos, lenguajes y Edge Computing"
];

var textos = [
"Analizamos las razones por las que muchos programadores están empezando a aprender Python para usarlo en su próximo proyecto de machine learning, desarrollo web o devops",
"El índice PYPL o \"PopularitY of Programming Language Index\" nos dice que Pyhton es el lenguaje de programación más popular en la actualidad",
"Analizamos las razones por los que Google Cloud puede arrebatarle el control de la nube a AWS y Azure. En la reciente conferencia Google Cloud Next presentó varias novedades que le llevará a ser la nube hibrida perfecta de los desarrollados",
"El mercado laboral en el sector tecnologico sufre la falta de profesionales y las empresas buscan atraer el mejor talento. Hablamos con varios recruiters que nos confiesan los problemas que encuentran para contratar nuevos desarrolladores",
"Alentar a los niños a estudiar un lenguaje de programación es una tarea complicada, aunque cada vez más necesaria. Por eso, aquí te presentaremos una selección de páginas Web que disponen de varias actividades gráficas, que seguramente alentarán el interés de los más pequeños para aprender el código de JavaScript. Cinco plataformas en línea para que los niños conozcan la codificación JavaScript.",
    "Visual Studio 2019 soporta finalización del código asistida por inteligencia artificial y ahora incluye la herramienta de colaboración en tiempo real Visual Studio Live Share",
    "La forma más fácil de descargar tu información de Google+ es la que te permite obtener un archivo con todos tus datos a la vez; en este artículo te explicamos cómo hacerlo",
    "Aunque a día de hoy existen multitud de proveedores de computación que siguen basando su negocio en la provisión de infraestructura como servicio (IaaS), existe un claro objetivo perseguido por los líderes del sector: Convertir la computación en algo transparente.",
    "La calculadora ha sido todo un hit en GitHub, y también hay quienes se han dedicado a cazar bugs en su código ahora que es abierto",
    "TensorFlow es la apuesta clave de Google para construir el ecosistema del futuro del Machine Learning que pueda ser ejecutado en la nube, en aplicaciones o en dispositivos hardware de todo tipo."
];

var textosFull = [
"En prácticamente cualquier informe o estadística de uso nos encontramos con que Python es uno de los lenguajes con una mayor tasa de crecimiento en estos últimos años. Tanto TIOBE como Stackoverflow destacan constantemente este hecho, buscando a que alguien haga frente a los omnipresentes Java, C/C++ o JavaScript. Alejándonos de esa guerra de lenguajes que no fomentamos, vamos a analizar el interés creciente por muchos programadores por Python basándonos en las tendencias en programación en estos últimos años. Lo que más sorprende de este “inesperado” momentum de Python es que no es un lenguaje recién llegado, descartamos el hype del que algunos frameworks y lenguajes sí gozan. En este caso, nos encontramos con un lenguaje maduro que es usado en producción por muchas empresas como Google, Facebook, Instagram, Spotify o Netflix, parte del éxito se lo deben a él, como muchos ingenieros han reconocido durante estos años. Además de contar con una amplia comunidad de desarrolladores y recursos disponibles, algo fundamental para plantearse el aprendizaje de cualquier nuevo lenguaje. Basta con consultar los más de 150.000 proyectos en Package Python Index.\n" +
"\t   \n" +
"\t   ¿Por qué Python está creciendo tan rápidamente?\n" +
"\t   \n" +
"\t   Python es utilizado en una gran variedad de ámbitos, desde el desarrollo web a devops, pero ha sido el aumento de su uso aplicado en machine learning y data science, lo que ha acelerado el crecimiento de Python. Y su creciente interés por la mayoría de programadores que están introduciéndose en estas disciplinas. Sin olvidarnos de la evolución que ha tenido para programadores web o system admin el uso de Python durante años. Tal como mencionaba Stackoverflow en su informe, no sólo está creciendo Python sino también muchos temas relacionados con él. Así nos encontramos con el aumento del uso de framework web como Django y Flask o Pandas, NumPy y matplotlib para data science.\n" +
"\t   \n" +
"\t   Python aplicado a Data Science \n" +
"\t   \n" +
"\t   Aquí nos encontramos con una de las principales claves del crecimiento exponencial del interés sobre Python en estos últimos años. De la mano de Data Science como una de las profesiones mejor valoradas, cuya base se asienta en lenguajes matemáticos como R y con Python gracias a librerías y framework como PyBrain, NumPy o PyMySQL. Utilizando estas herramientas podemos hacer muchas más cosas que recolectar y clasificar información, creando scripts para automatizar procesos, además de preparar dashboard con esa información. El punto de entrada para comenzar a trabajar en Data Science es tener una buena base de Python. Muchos de los cursos que podemos encontrar en Coursera o Udacity giran entorno a Python: Python para Data Science ofrecido por IBM en Coursera o el nanodegree programa Become a Data Analyst en Udacity.\n" +
"\t   \n" +
"\t   Machine Learning de la mano de Python \n" +
"\t   \n" +
"\t   El auge del Deep Learning con algunos framework como Tensor Flow también ha motivado a muchos desarrolladores a aprender Python. El carácter exploratorio de machine learning se ajusta a la perfección a Python, así nos podemos encontrar librerías como Keras, PyBrain o scikit-learn para realizar tareas de clasificaciones, regresión, clustering, preprocesamiento o generación de modelos de algoritmos. Al igual que ocurre con los cursos propuestos para comenzar con data science, en machine learning ocurre bastante similar, aunque podemos utilizar Java o Scala, Python sigue siendo un lenguaje dominante en el ámbito academico ya que se ajusta a la perfección a la hora de implementar las bases de machine learning. Podéis echar un vistazo a un amplio número de cursos relacionado en Coursera o Udacity en los que comenzamos con las bases de Python.\n" +
"\t   \n" +
"\t   Desarrollo web con Python\n" +
"\t   \n" +
"\t   Sobradamente conocido nos encontramos con Django, el framework de aplicaciones web gratuito y open source escrito en Python. Tampoco es un recién llegado y es utilizado en producción por empresas con Instragram, Pinterest o The New Yor Times. A este framework de Python le podemos sumar algunos igual de interesante como el minimalista Flask o Pyramid. Además de estos framework podemos destacar la importancia para crear APIs Restful o graphql con librerías como Graphene.\n" +
"\t   \n" +
"\t   Python para Devops \n" +
"\t   \n" +
"\t   La accesibilidad y flexibilidad de Python también es una de las razones para preferir este lenguaje en DevOps. Es estupendo para realizar scripts y automatizar proceso. El hecho de que herramientas como Ansibley SaltStak estén escritas en Python demuestran las capacidades del lenguaje para tareas de automatización y orquestación. Al igual que hablamos de los cursos de data science o machine learning, también podemos destacar cursos para System Admin utilizando Python tres.\n" +
"\t   \n" +
"\t   En conclusión ¿Debería aprender Python?\n" +
"\t   \n" +
"\t   Python es un fenomenal primer lenguaje, como si es tu segundo, tercero o enésimo lenguaje. Su curva de aprendizaje es menos áspera que otros, dispone de miles de librerías que permiten en unas pocas líneas de código hacer lo que nos propongamos. Te permite evolucionar rápidamente, además de profundizar en tareas más complejas, según vas adquiriendo soltura. Obviamente recomendar un lenguaje de programación es complicado. Depende de muchos factores como el uso que le vayas a dar. Tampoco es lo mismo recomendar un lenguaje a alguien que está empezando a programar como a otro programador con una dilatada experiencia en varios lenguajes de programación. Como decíamos más arriba: esto no es una guerra de lenguajes pero debido al momentum actual de Python deberías estar atento, ya que puede ser el lenguaje que te ayude en tu siguiente proyecto.\"",
"Existen varias formas de medir la popularidad de los lenguajes de programación, algunas mediciones como el índice TIOBE se basan en la cantidad de sitios web indexados por Google, Yahoo y Bing que mencionan un lenguaje. Otros realizan encuestas entre desarrolladores y aquellos que ofrecen puestos de trabajo para determinar que tiene más demanda y que buscan aprender los desarrolladores. Relacionado con este último detalle, un índice interesante es el PYPL o Popularity de Programming Language Index. El PYPL mide la popularidad de los lenguajes de programación analizando con qué frecuencia los desarrolladores buscan tutoriales en Google sobre un lenguaje determinado. Su premisa es que mientras más se busca esto, más popular es un lenguaje. PYPL obtiene sus datos de Google Trends, y puede servir como un medidor bastante justo para conocer la tendencia actual. También explican que tiene más sentido incluir \"tutorial\" como indicador adicional en las búsquedas porque disminuye la inconsistencia de los resultados.\n" +
"\t   \n" +
"\t   Python, el lenguaje de programación más popular\n" +
"\t   \n" +
"\t   Un ejemplo de esto es \"Python\", que además resulta ser el lenguaje más popular según el índice PYPL, según el índice TIOBE, y que como apuntan en Stack Overflow también ha venido siendo el de mayor crecimiento en los últimos años. Contar menciones de \"Python\" en la web obviamente va a dar resultados mixtos porque la palabra tiene varios significados, pero con \"tutorial Python\" la historia es otra. Así que PYPL es un buen indicador a tener en cuenta.Actualmente la tabla de abril 2019 tiene a Python a la cabeza, seguido de Java, JavaScript, C#, PHP, C/C++, R, Objective-C, Swift y Matlab cerrando las primeras 10 posiciones. En relación con el año pasado, solo Python y C# han subido posiciones, pero la forma en la que aumenta la tendencia a mencionar Python no tiene comparación con ningún otro lenguaje. Podríamos destacar también que lenguajes como Go, TypeScript, Kotlin, y Rust también han estado creciendo relativamente desde 2018 con una tendencia al alza a diferencia de la pequeña disminución en el interés por los mismos Java y PHP.",
"Aunque tengamos tan asumido que todo se desarrolla y se despliega a la nube, aún estamos en un momento dónde tiene mucho margen de adopción todavía. Así es como el flamante nuevo CEO de Google Cloud lo interpreta, Thomas Kurian. En la reciente conferencia de Google Cloud Next, sacó toda la artillería disponible por parte de la plataforma para crecer y atraer a más usuarios: tanto de otras plataformas (ojo, sin tener que abandonarlas) y las compañías indecisas en apostar plenamente por la nube. Alrededor de un 80% de la carga de trabajo de los servidores actuales no está en la nube, según Eyal Manor, VP de Engineering de Google Cloud. Lo cual supone una gran parte del pastel de mercado del Cloud Computing. Además, a eso se une las reticencias de los CIO de gran parte de las compañías buscando soluciones agnósticas y open source para no atarse a ningún sistema propietario en la nube. \n" +
"\t   \n" +
"\t   Así, las previsiones del mercado sitúan que en 2024, el 88% de las empresas adopten una estrategia multi-nube, es allí donde Google Cloud aspira ser la pieza fundamental, arrebatando el control de esa infraestructura a AWS, Azure o, incluso, cualquier sistema on-premise que las empresas tengan actualmente.\n" +
"\t   \n" +
"\t   Anthos, la única forma de “competir” es ser una plataforma híbrida en la nube\n" +
"\t   \n" +
"\t   Google Cloud está muy lejos de AWS. Claramente la mayoría de las compañías están ya en la nube de la mano de Amazon WebServices, un gigante indestructible durante más de diez años con su plataforma estrella EC2 y decenas de servicios que permiten a los devops configurarlo hasta el último extremo. Tampoco es fácil competir con Microsoft y un ecosistemacompletamente orientado a desarrolladores de extremo a extremo, cuyo buque insignia es Azure. Google ha optado con ser el “amigo de todos”, y por ello, lanzó hace unos meses la plataforma de gestión en la nube de Google Cloud Sevices Platform, ahora renombrada a Anthos. Nada más zoempezar la Keynote de Google Cloud Next’19, no es extraño que fuera el gran anuncio que todos esperábamos.\n" +
"\t   \n" +
"\t   Con Anthos, Google ofrecerá en un único servicio: la gestión, despliegue y monitorización de los distintas plataformas en la nube que el usuario quiera tener, incluso su propia infraestructura de hardware fuera de la nube. Google pretende con ello gestionar tus aplicaciones en AWS y Azure. Un movimiento que como decíamos antes se anticipa a sus competidores. A todos os sonará Kubernetes, pues bien, como sabréis es la plataforma en la que se basa todas esta infraestructura agnóstica apoyada en contenedores fácilmente replicables y escalables. Google Kubernetes Engine se lanzo en 2015 aprovechando los más de 12 años de experiencia de Google en la ejecución de servicios como Gmail y Youtube en contenedores. No es usual para los grandes competidores lanzar productos como Anthos que permiten a los usuarios ejecutar sus aplicaciones en otras plataformas. Después de todo, el dinero seguirá estando en los costes del tiempo de computación usados y el almacenamiento. Pero como argumenta Google, este tipo de herramientas es lo que sus usuarios están demandando para solventar el gran problema de tener un arquitectura híbrida con distintos productos que no se pueden comunicar o gestionar de forma conjunta. \n" +
"\t   \n" +
"\t   Ahora, según promete Google, con Anthos sí será posible. Es difícil que veamos a AWS o Azure reaccionar de igual forma por ello Google se ha apuntado el primer tanto, aunque aún es pronto para verlo en acción.\n" +
"\n" +
"\t   Cloud haciendo más amigos en la comunidad Open Source que AWS\n" +
"\t   \n" +
"\t   AWS no ha hecho demasiados amigos en la comunidad Open Source, debido a crear sus propios framework, librerías y servicios en la nube, en cierta forma propietarias en el entorno de Amazon. Así que Google ha jugado las cartas de ser más amistoso con la comunidad. Google es uno de los grande abanderados de Kubernetes y lo ha demostrado fuertemente.Ha empujado a que AWS o Azure empiecen a usar Docker y la infraestructura de Kubernetes. Lo cual le abre la puerta a Google la nube de sus competidores como caballo de troya. ¿Pero qué pasa con el resto de herramientas que las empresas quiere utilizar en sus proyectos? Como bien explicaba el VP de Engineering de Google Cloud sobre el asunto: muchos de los usuarios buscan soluciones Open Source para no atarse a un proveedor concreto ni una tecnologías. No queremos segregar a nuestros programadores.",
"Ya sabemos que todos (o la gran mayoría) de los especialistas en tecnología están trabajando, según el informe del INE de 2018 con 79,88% de tasa de empleo, y por tanto, son las empresas las que tienen dificultades para contratar, no los candidatos por ser contratados. Esto se da sobre todo entre los programadores que muchas startup tecnológicas desean contratar. Esta situación ya no nos resulta sorprendente desde hace muchos años. De hecho, hablamos por aquí sobre esto ya en el 2013. Después de nada más y nada menos que 7 años, seguimos teniendo dificultades, pero somos bastante más cuidadosos a la hora de decir que no encontramos talento técnico en España. Muchos de nosotros intentamos ser autocríticos y no excusarnos, analizando el por qué no conseguimos contratar el talento que necesitamos tan fácil como nos gustaría. No solo estamos en un momento del mercado tecnológico en el que hay más ofertas que candidatos sino que tenemos motivos más profundos por los que no conseguimos contratar. Por eso, además de mi experiencia, quería charlar con otros recruiters y profesionales especializados en la selección de talento tecnológico para conocer de primera mano, las dificultades a las que ellos se enfrentan a la hora de contratar y cómo han conseguido solucionarlas.\n" +
"\t   \n" +
"\t   Justyna Adamczyk\n" +
"\t   \n" +
"\t   Justyna Adamczyk, VP de Recursos Humanos especializada en reclutamiento tecnológico para la empresa Carto. Según Stackoverflow, solamente el 10% del talento tech busca activamente el trabajo. Esto no quiere decir que competimos solo por el 10% de mercado, hay un 60% de los programadores que están abiertos a escuchar las ofertas, si estas mejoran su situación laboral o son más atractivas económicamente. Dado que poca gente técnica solicita el puesto activamente, la primera dificultad a la que nos enfrentamos es la de diferenciarte de un mercado dañado por las malas prácticas y convertir a tu equipo de recruiters en verdaderos sourcers (realizando reclutamiento activo y atrayendo candidatos que no se habían inscrito por su cuenta): \n" +
"\t   \n" +
"\t   Haciendo activamente el sourcing salgo de la zona de confort y busco donde los recruiters no llegan (candidatos sin perfiles sociales, candidatos sin un cv publicado a través de Linkedin, candidatos fuera de Madrid o Barcelona y los que trabajan para empresas desconocidas, por citar algunos ejemplos) \n" +
"\t   \n" +
"\t   Buscamos activamente a los candidatos y creamos un mensaje diferenciador, estableciendo una relación. Lo hacemos a través de ofertas de empleo, mensajes que lanzamos en las redes sociales e incluso de emails directos \n" +
"\t   \n" +
"\t   Intentamos ser muy proactivos y creativos, tomamos más riesgo para romper con las “best practices” que en realidad no funcionan. Queremos destacar y a la vez cambiar la manera en la que trabajan los recruiters. Devolviendo lo \"humano\" al trabajo y evitando tratar a gente de manera mecánica.\n" +
"\t   \n" +
"\t   La segunda dificultad a la que nos enfrentamos en Carto es priorizar contrataciones en toda la empresa y no solo en los recruiters: Uno de los mensajes que más repetimos es que todos somos embajadores de la marca y por lo tanto, todos somos recruiters. Siempre contratamos, siempre buscamos talento. Tenemos una cultura de reclutamiento y un training sobre cómo contratamos y cuáles son los estándares que queremos seguir en todos procesos de selección.\n" +
"\t   \n" +
"\t   La tercera dificultad es aprender a gestionar la urgencia a la hora de contratar, la incertidumbre y la poca planificación: Creamos pipelines de candidatos interesados en nuestra empresa, ya sea para contratarles ahora o en un futuro. Aunque el objetivo principal es cubrir las vacantes que tenemos, no nos sirve si al explorar el mercado destruimos relaciones, contactos, tratando a la gente de manera mecánica. Nuestro objetivo haciendo el sourcing activo es construir una relación que puede dar frutos en el futuro. Trabajar de esa manera nos da mucha ventaja en el mercado, pero requiere una buena planificación y compromiso, y las startups no siempre son capaces de cumplir con esas dos cualidades. Y por último, pero no menos importante, cuando llego a la conclusión que lo que me piden no existe, animo a los hiring managers a crearlo: Contratando gente más junior y ofreciéndoles mentoring dentro de la empresa. Poco a poco tendremos que entender que habrá que ser más flexibles, invertir más en las personas, ofrecer experiencias que enriquecen en vez de simplemente llenar huecos para empujar los proyectos adelante.\n" +
"\t   \n" +
"\t   Iker Jusue\n" +
"\t   \n" +
"\t   Iker Jusue, Consultor de adquisición de talento independiente y formador especializado en sourcing. Uno de los mayores retos que encuentro, tanto a nivel nacional como internacional, se relaciona con la asimetría entre el talento disponible y la actitud de la empresa de cara a la captación del mismo. La mayoría de los proyectos que realizo comienzan con una transformación, la cual se fundamenta en buscar un reconocimiento del equipo de reclutadores como un socio influyente dentro del negocio, proactivo en la búsqueda, con capacidad de decisión y no solo aceptar órdenes durante los procesos de reclutamiento, sino basándose en la experiencia y en datos sobre el mercado, es capaz de proporcionar información relevante para la toma de decisiones y dirección de la estrategia para cubrir vacantes. \n" +
"\t   \n" +
"\t   Este cambio de mentalidad necesario es todavía más evidente en la distinción entre candidatos pasivos y activos. Todos los actores involucrados en el proceso de reclutamiento han de entender que si queremos asegurar la máxima diversidad y calidad de las candidaturas, el enfoque utilizado desde el primer acercamiento pero también durante todas las entrevistas posteriores, no puede ser el mismo para aquellas personas que hemos decidido contactar directamente. \n" +
"\t   \n" +
"\t   Esto no quiere decir que, de cara a la selección posterior, se deba establecer una diferencia de trato, teniendo candidatos VIP que provienen de sourcing directo en una plataforma nicho de Data Science como puede ser Kaggle, frente a aquel que haya postulado directamente en un anuncio visto en InfoJobs. Pero sí en el acercamiento, más delicado todavía, para seguir atrayendo a esa persona a participar, a que se decida en definitiva a apostar por nuestro proyecto.De poco sirve aumentar el presupuesto del departamento de adquisición de talento, si posteriormente procesamos del mismo modo a un candidato que nos ha costado mucho más conseguir. Podemos gastar mucho dinero en herramientas, formaciones para que el equipo sea capaz de identificar y atraer mejor a candidatos pasivos, pero la rentabilidad de la inversión puede verse anulada fácilmente si este aspecto se descuida. \n" +
"\t   \n" +
"\t   Visto desde una óptica de optimización de recursos, tenemos la responsabilidad de hacer comprender al resto de la empresa la importancia de este hecho. Basta con recordar a los responsables de la contratación como se sintieron cuando les empujaron durante un reclutamiento en el que todavía, no se les había llegado a convencer de participar. Hay que saber vender la oportunidad primero y seducir para asegurar la transformación de candidato potencial a candidato, que será evaluado (¡y no al revés!).\n" +
"\t   \n" +
"\t   Marina Zaliznyak\n" +
"\t   \n" +
"\t   Marina Zaliznyak, Fundadora de Bliss Ventures y especialista en consultoría y adquisición de talento para startups. Quiero destacar un clarísimo obstáculo con el que me estoy topando con un grado de frustración creciente a la hora tanto de atraer como terminar de contratar talento. Aquí no me refiero sólo de talento tecnológico, sino a perfiles de cualquier profesión, departamento, o nivel de experiencia. Este obstáculo se puede resumir en la lentitud de los procesos y la falta de comunicación fluida a lo largo de ellos.\n" +
"\t   \n" +
"\t   Cuando hablo de agilizar y facilitar la comunicación, no me refiero a simplificar los procesos de selección porque es comprensible que cada empresa tenga su forma de valorar a las personas y su grado de exigencia para formar parte del equipo (esto sería un tema a tratar a parte). Pero lo que sin duda dificulta la contratación es la lentitud de comunicación que tienen muchas empresas para dar feedback tanto si se comunican directamente con el candidato, como si hay un reclutador por medio que trabaja para facilitar ese trabajo. La lentitud se interpreta directamente como falta de comunicación y desinterés. Da igual que este sea o no el motivo, pero el resultado final es que será visto así. Y no importa mucho si es un candidato muy deseado e interesante o si es alguien que no cuadra para el puesto, porque el impacto de esta forma de proceder es malísimo, tanto a corto como a largo plazo.\n" +
"\t   \n" +
"\t   A corto plazo, no solo se pierden a candidatos durante el proceso porque les \"conquistan\" otros, siendo más ágiles y comunicativos, sino que además, se deja un verdadero rastro de mala gestión, dejadez y desinterés. Esto es reputación mal gestionada y afectará a las empresas no solo en el momento de cerrar las contrataciones sino también cuando quieran atraer candidatos en el futuro. Generan una mala imágen, transmiten, normalmente sin querer, cierta prepotencia.   solución es fácil, no hay mucho que decir. No solo es cuestión de agilizar los procesos, los pasos y agendas, sino informar en cada momento al candidato, incluso de los retrasos en la toma de decisiones. Una simple comunicación cuida a la persona. Si no cuidamos a los candidatos, iremos perdiendo opciones una tras otra, pero además de manera exponencial. Y aunque parece sencillo, no puedo recalcarlo más, ya que en mi experiencia es uno de los principales fallos en reclutamiento. Esta mala gestión finalmente reduce muchísimo el ROI de reclutamiento.\n" +
"\t   \n" +
"\t   Sara González \n" +
"\t   \n" +
"\t   Sara González, Responsable de selección y desarrollo, especializada en la adquisición de talento Cloud para Acens Technologies. Una de las mayores dificultades que solemos encontrarnos a la hora de atraer y contratar talento en Acens es conseguir transmitir a los candidatos la parte intangible del proyecto -el salario emocional- de tal manera que minimicemos el riesgo del miedo al cambio y aportemos en seguridad y motivación. Tenemos marca y un proyecto atractivo fácil de “vender”, pero la mayoría de los candidatos interesantes para nosotros trabajan en empresas similares o directamente en la competencia, con buenas condiciones y normalmente bien reconocidos dentro de ellas. \n" +
"\t   \n" +
"\t   Ser competitivos en proyecto y tecnología ya no es suficiente porque los candidatos también tienen esto en sus empresas, por tanto, no perciben una mejora tan significativa como para correr el riesgo de cambiar de trabajo. \n" +
"\t   \n" +
"\t   Quizás, más que riesgo al cambio, sería más acertado el concepto de “pereza” al cambio, tomando al final la decisión de quedarse en su empresa. Ante esto, ¿cómo podemos contratar a profesionales que están a gusto en su trabajo y bien considerados, y transmitirles durante el proceso de selección lo que “ganarían” con el cambio? \n" +
"\t   \n" +
"\t   Lo primero es profesionalizar los procesos de selección dándole la importancia que tienen de inicio a fin, ya que cada detalle cuenta. Hay que hacer entender a todos los que participan en la contratación que es imprescindible facilitar toda la información que necesite el candidato sobre nosotros y ser ágiles en la toma de decisiones. \n" +
"\t   \n" +
"\t   Ya no vale con evaluar los conocimientos y competencias del candidato, tenemos que “enamorarle”, tenemos que ser capaces de transmitir lo que se ve y lo que no se ve del proyecto, de la forma de trabajar, del equipo, de la empresa. \n" +
"\t   \n" +
"\t   Las entrevistas deben ser charlas distendidas en las que debemos darnos a conocer mutuamente, tanto empresa como candidato de manera sincera. Lo segundo, y en paralelo durante todo el proceso de selección, es que tenemos que llevar un seguimiento constante del candidato e ir acompañándolo en la toma de decisiones, asegurando de esta manera que se proyecta y se visualiza formando parte de nuestro equipo. Debemos darle seguridad y transmitirle nuestra confianza en él/ella desde el primer momento.\n" +
"\t   \n" +
"\t   Por último, pero no menos importante, debemos apostar por la contratación de candidatos que aunque tengan menos conocimientos y experiencia a priori para el puesto; tengan el potencial, la ambición y la motivación imprescindible en todos los equipos. A estos candidatos podemos ofrecerle algo mucho más sencillo de transmitir: ¡un reto profesional que les servirá para desarrollarse y para crecer hasta donde ellos mismos pongan el límite!\n" +
"\n" +
"\t   definitiva, las empresas debemos cambiar la aproximación al candidato con mensajes atractivos, que generen confianza y que se perciban como una oportunidad profesional y no una oferta de empleo más. El mercado manda, ¡y ahora mismo lo que manda es cercanía, confianza y máxima información en el proceso de selección!\n" +
"\t   \n" +
"\t   África Muñoz\n" +
"\t   \n" +
"\t   África Muñoz, Consultora y formadora de estrategia para la adquisición de talento en Linkedin. Mientras escribo estas líneas fuera está oscuro, estoy en el primer Ave de la mañana en dirección Barcelona porque tengo temprano una reunión con un cliente. \n" +
"\t   \n" +
"\t   Esta empresa nos ha pedido que le ayudemos a rediseñar su estrategia de reclutamiento y que hablemos de mejores prácticas en el sector. Para mí es algo automático, saco mis informes, evalúo el perfil que están ahora mismo contratando con mayor frecuencia (o el que les resulta más complicado) y termino analizando su actual estrategia y resultados. ¿Suena simple, verdad? Pues en la mayor parte de los casos, esta información que yo traigo es algo totalmente desconocida por los departamentos de recursos humanos, y cuando esto sucede se multiplica la dificultad para atraer talento. Y yo me pregunto: ¿Hasta qué punto puedes tener una estrategia de captación efectiva si no hay una estrategia basada en datos?, pues la respuesta es sencilla, normalmente no hay estrategia, no hay análisis, no hay datos.El mundo ha cambiado y esto es innegable, el candidato ahora es el que tiene el control, el poder de decidir si le interesa o no lo que tienes que ofrecer. Sin embargo (los departamentos de adquisición de talento) no hemos evolucionado. La falta de estrategia tiene como resultado mensajes vacíos y prefabricados, ofertas de empleo que ofrecen lo mismo: Carrera profesional, excelente paquete retributivo, formación. O lo que es peor, mensajes centrados en la empresa y no en el candidato: yo busco, yo quiero, urgente, necesitamos. ¿Cuál es la solución entonces? Ármate de datos, entiende lo que tienes entre manos quién es ese profesional que necesitas, cuáles son sus aspiraciones, dónde está, qué le mueve, y sobre todo, cuida tu mensaje. Adapta tanto las ofertas de empleo como los mensajes directos al “tipo de profesional” al que estás contactando, habla del candidato y no de ti, cuenta qué tienes para ofrecer que sea diferente; es decir, \n" +
"\t   \n" +
"\t   PERSONALIZA.\n" +
"\t   \n" +
"\t   Si al final de este proceso no tienes un candidato, tendrás un fan, alguien que referenciará o alguien que en un futuro no muy lejano igual decide aplicar. \n" +
"\t   \n" +
"\t   Conclusión \n" +
"\t   \n" +
"\t   Ya no podemos decir que no hay talento en España, tal vez deberíamos decir que tenemos dificultades para buscarlo, atraerlo y/o enamorarlo. El mercado cambia y si no somos capaces de detectarlo y mejorar las estrategias de hacer recruitment, seguiremos sin ser capaces de contratar el talento que necesitamos.",
"Alentar a los niños a estudiar un lenguaje de programación es una tarea complicada, aunque cada vez más necesaria. Por eso, aquí te presentaremos una selección de páginas Web que disponen de varias actividades gráficas, que seguramente alentarán el interés de los más pequeños para aprender el código de JavaScript. Cinco plataformas en línea para que los niños conozcan la codificación JavaScript."
+"\t   \n" +"Algunos de los sitios son como un tutorial interactivo, donde podrás seguir los pasos del curso para aprender JavaScript de forma sencilla. Pero si quieres incursionar en otros lenguajes de programación, también puedes enseñarles a los niños: HTML, CSS y Python."
+"\n \t   \n" +"CodeGuppy"
+"\n \t   \n" +"CodeGuppy es una página Web para que los niños puedan aprender JavaScript. Gracias a sus gráficos divertidos y creativos, los más pequeños podrán codificar el lenguaje de una forma didáctica. La plataforma cuenta con varias categorías (JavaScript, Dibujo, Matemáticas, Procesamiento de texto, Coordenadas polares, Pixel art, Juegos, etcétera). En la izquierda de la interfaz de la Web, observarás las instrucciones de JavaScript. A la derecha, visualizarás como se ve la codificación. Además, puedes practicar los comandos en una página en blanco, para comenzar a crear con JavaScript. Khan Academy"
+"\t   \n" +"Khan Academy te ofrece múltiples lecciones para niños. Cuando abras la página Web, observarás la opción “Computer Programming”. Allí, puedes aprender: JavaScript, Advanced JavaScript, HTML, CSS, SQL, etcétera. Desde la sección JavaScript, puedes incorporar conocimientos de codificación paso a paso, con alrededor de 15 lecciones divertidas y muy gráficas (introducción a la programación, conceptos básicos del dibujo, programas de depuración, programas interactivos, texto y cadenas, colorear, elementos básicos de animación, etcétera). El entorno está íntegramente en español. Tynker"
+"\t   \n" +"Tynker es una página Web gratuita para que los niños puedan aprender JavaScript. La plataforma es como un cuaderno interactivo donde los más pequeños podrán codificar de forma sencilla y divertida. Primero, tendrás que crearte una cuenta como Estudiante, Padre o Profesor. Como Profesor: Accederás a 20 cuentas de estudiantes y tres cursos de codificación. Como Estudiante: Accederás a 20 lecciones. Y, para los Padres, la utilidad dispone de actividades de codificación gratuitas. El entorno te ofrece la posibilidad de estudiar codificación de bloques, JavaScript, Python, HTML, CSS, Matemáticas, Estructura de datos, Widget, Gráficos y Algoritmo, tanto con textos y vídeos."
+"\t   \n" +"Crunchzilla es una de las herramientas en línea más simples para que los más pequeños puedancodificar en JavaScript. Sus tutoriales interactivos se categorizan por edades:"
+"\n \t   \n" +"Code Monster: Preadolescentes"
+"\n  \t   \n" +"Code Maven: Adolescentes"
+"\n  \t   \n" +"Data Maven: Relacionado a los datos y estadísticas"
+"\n \t   \n" +"Game Maven: Adolescentes con experiencia en JavaScript"
+"\n \t   \n" +"En todas las secciones mencionadas, obtendrás a la izquierda un cuadro para escribir, en la parte superior un tutor virtual que te guiará y, a la derecha un cuadro en donde observarás los resultados de la codificación. CodingBat"
+"\t   \n" +"CodingBat es una muy buena opción para que los niños puedan aprender JavaScript y Python. La página cuenta con las siguientes categorías: Basic coding, array loops, logic puzzles, string problems, etcétera. Cada tutorial dispone de lecciones, opciones para escribir código y un cuadro para visualizar la codificación realizada. Con las cinco plataformas en línea para que los niños aprendan JavaScript, tendrás varias opciones para incentivar a los más pequeños a que incursionen en el lenguaje de programación.",

    "Microsoft acaba de anunciar el lanzamiento del nuevo Visual Studio 2019, su conocido entorno de desarrollo unificado llega renovado y cargado de características interesantes, y está disponible para su descarga gratuita tanto en Windows como en macOS."+
    "\n \t   \n" +"Entre sus principales novedades destacan que Visual Studio 2019 ahora incluye finalización del código asistida por inteligencia artificial gracias a Visual Studio IntelliCode, y también se ha integrado por completo la herramienta de colaboración en tiempo real Visual Studio Live Share."+
    "\n \t   \n" +"Microsoft liberó su código"+
    " según el equipo de desarrollo de Microsoft, se trata de una gran mejora en comparación con Visual Studio 2017 en varias áreas, como por ejemplo que hace más fácil acceder a tu código simplificando la clonación de repositorios Git o la apertura de proyectos o carpetas existentes."+
    "\n \t   \n" +"Visual Studio 2019 mejora la navegación a través del código, la sección de plantillas para que sea más fácil iniciar un nuevo proyecto, los indicadores de salud de un documento, y mejora la limpieza de código en un click para aplicar múltiples reglas de refactorización."+
    "\n \t   \n" +"También se ha mejorado la experiencia de depuración, y todas las novedades funcionan tanto con proyectos existentes como con los nuevos, desde aplicaciones cross-plataforma escritas en C++, hasta aplicaciones móviles .NET para iOS y Android escritas en Xamarin, o aplicaciones basadas en la nube que usen los servicios de Azure."+
    "\n \t   \n" +"La versión para Mac está pasando por su mejor momento, el editor de código de Visual Studio para Mac se ha reemplazado completamente con un nuevo editor que comparte su base con el de Visual Studio en Windows, pero con una interfaz nativa para macOS. Incluso se pueden ejecutar múltiples instancias de VS 2019 directamente desde el dock."+
    "\n \t   \n" +"Visual Studio es el IDE completo de Microsoft para Android, iOS, Windows, Mac y la nube que cuenta con una versión gratuita para estudiantes, colaboradores en proyectos open source y usuarios particulares." +
    "\n \t   \n" +"Las versiones profesionales y para empresa cuentan con periodos de prueba gratuito. Puedes comparar las diferencias en lo que ofrece cada uno desde aquí."+
    "\n \t   \n" +"Si qiueres más información sobre todos los detalles de la nueva versión, puedes revisar los documentos oficiales de soporte de Microsoft."+
    "\n \t   \n" +"Ha llegado la fecha, Google+ está muriéndose. Tras múltiples pequeñas muertes, heridas fatales que condenaban poco a poco al intento de red social de Google, la estocada final le ha llegado. Y lo ha hecho antes de tiempo: la agonía ha durado cuatro meses menos de lo que se anunció. Dice adiós este 2 de abril.",
    "Ha llegado la fecha, Google+ está muriéndose. Tras múltiples pequeñas muertes, heridas fatales que condenaban poco a poco al intento de red social de Google, la estocada final le ha llegado. Y lo ha hecho antes de tiempo: la agonía ha durado cuatro meses menos de lo que se anunció. Dice adiós este 2 de abril."+
    "\n \t   \n" +"Si en su momento usaste esta plataforma social y quieres conservar el contenido o los datos que volcaste en ella, debes saber que estás en tiempo de descuento."+
    "\n \t   \n" +"Esta será, con toda probabilidad, la última oportunidad que tendrás para descargar esta información y ponerla a buen recaudo antes de que en Mountain View pulsen borrar y todo deje de existir. Los +1 que diste, los círculos de Google+ que creaste, las comunidades en las que mantenías un rol activo y el contenido que publicaste, como fotos y vídeos. Todo desaparecerá, aunque puedes descargarlo por si quieres mantenerlo aunque sea en una carpeta de tu equipo."+
    "\n \t   \n" +"La forma más fácil de descargar tu información de Google+ es la que te permite obtener un archivo con todos tus datos a la vez, incluidos tus círculos, comunidades, novedades. +1, fotos y vídeos. Puede que haya contenido que no te interese, pero de este modo puedes estar seguro de que tendrás una copia lo más completa posible de tu paso por la red social de Google." +
    "\n \t   \n" +"Dependiendo de los datos que tuviese tu cuenta de Google+, la descarga de tu contenido puede llevarte cierto tiempo. En cualquier caso, sea como sea y según el método de entrega que hayas seleccionado en los pasos anteriores, verás todos los archivos en tu Google Drive o recibirás un correo electrónico con un enlace que te permitirá descargar el fichero que los agrupa." +
    "\n \t   \n" +"Este proceso de volcado de información, en principio, no será posible una vez Google haya procedido al borrado de la plataforma, que empieza este 2 de abril, por lo que es mejor comenzar cuanto antes. No sabemos si una vez iniciado el proceso de desaparición de Google+ este método de back up será posible.",
    "Historia"+
    "\n \t   \n" +"Parece que los primeros usos del término aparecieron allá por el 2012 en un artículo de Ken Fromm. En un inicio, se asoció este tipo de enfoque sobretodo al uso de sistemas de integración continua y control de versiones como servicio, sin la necesidad de ser provisionados on-premises"+
    "\n \t   \n" + "Posteriormente, el término se hizo más popular hacia el 2015, ya que en 2014 Amazon lanzó su servicio AWS lambda que nos permitía desplegar porciones de código sin tener que hacernos cargo de la infraestructra subyacente. El interés en esta tecnología era claro y continuó creciendo cuando en Julio de 2015 Amazon lanzó su API Gateway, que permitía además realizar peticiones HTTP sobre estas funciones desplegadas."+
    "\n \t   \n" +"A partir de ese momento, podemos encontrar un sin fin de materiales y ejemplos de su evolución, tales como este artículo de 2015 sobre el futuro de los servidores Servers are dead... o casos reales de migración a serverless en las re:Invent de Amazon PlayOn! Sports: The Serverless Company using AWS Lambda, que culminaron con la consagración a finales de 2015 de Serverless Framework como herramienta de referencia a partir del proyecto de código abierto Javascript Amazon Web Services (JAWS)."+
    "\n \t   \n" +"Finalmente y tras la aparición en 2016 de la Serverless Conf, nada ha vuelto a ser igual en el mundo de la computación en el cloud :)",
    "A principios de marzo, Microsoft decidió liberar el código de la calculadora de Windows y lo publicó en GitHub. Es claramente una aplicación que no necesita presentación, y también una que se une a la ya bastante larga lista de colaboraciones que ha venido haciendo Microsoft al ecosistema open source."+
    "\n \t   \n" +"Lo que quizás es más sorprendente de todo esto, es el enorme interés que ha generado entre la comunidad de desarrolladores. Tanto interés así, que el repositorio de la calculadora de Windows ha sido el proyecto más popular durante todo el mes en GitHub."+
    "\n \t   \n" +"La calculadora tiene casi 14.000 estrellas en GitHub, y curiosamente, el único repositorio que le llega cerca en popularidad, es otro proyecto sumamente interesante liberado esa misma semana: Ghidra, la herramienta de ingeniría inversa de la NSA que también pasó a ser de código abierto en marzo."+
    "\n \t   \n" +"Gracias a que Microsoft liberó el código de la app, son muchos los desarrolladores que pueden no solo usar el código para sus propios proyectos, o para aprender, sino los que pueden evaluarlo y sugerir mejoras."+
    "\n \t   \n" +"Esto es parte de lo bonito del open source, y la comunidad está bastante interesada en aprovechar la oportunidad para demostrar la importancia del análisis estático, incluso en proyectos pequeños como este."+
    "\n \t   \n" +"Es así como un grupo de desarrolladores ya ha encontrado un número significativo de fragmentos de código sospechoso y bugs en la simple herramienta, desde fugas de memoria, a información que envía la calculadora a los servidores de Microsoft."+
    "\n \t   \n" +"El código de la calculadora de Windows fue liberado con la misma licencia que el gestor de archivos de Windows 3.0, es decir una licencia MIT que es sumamente permisiva. Esta pone muy pocas restricciones para la reutilización del código, es compatible con muchas licencias copyleft, incluyendo la GPL, y por ello es la licencia más popular en todo GitHub.",
    "TensorFlow es la apuesta clave de Google para construir el ecosistema del futuro del Machine Learning que pueda ser ejecutado en la nube, en aplicaciones o en dispositivos hardware de todo tipo."+
    "\n \t   \n" +"Precisamente, los esfuerzos en su última TensorFlow Dev Summit 2019 han ido enfocados en facilitar y simplificar el uso del framework, incorporando más API tanto para los programadores principiantes como para los más expertos. De este modo, todos podremos aprovecharnos de las nuevas mejoras para crear modelos de aprendizaje más fácilmente para la mayor número de casos de uso y desplegarlos en cualquier dispositivos."+
    "\n \t   \n" +"Hardware de todo tipo."+

    "\n \t   \n" +"Precisamente, los esfuerzos en su última TensorFlow Dev Summit 2019 han ido enfocados en facilitar y simplificar el uso del framework, incorporando más API tanto para los programadores principiantes como para los más expertos. De este modo, todos podremos aprovecharnos de las nuevas mejoras para crear modelos de aprendizaje más fácilmente para la mayor número de casos de uso y desplegarlos en cualquier dispositivos."+

    "\n \t   \n" +"Han impulsado el despliegue de los algoritmos de forma local en dispositivos hardware con la release final de TensorFlow Lite 1.0 sin necesidad de recurrir a la nube u otro sistema centralizado para ser procesados. Un claro ejemplo de que el Edge Computing forma parte de la estrategia clave de Google para dotar a cualquier dispositivo, ya sea IoT o móvil, de todas las ventajas del aprendizaje automático."+
    "\n \t   \n" +"En los tres años que han pasado desde su lanzamiento, TensorFlow ha sentando las bases de un ecosistema de Machine Learning end-to-end, ayudando a potenciar la revolución del Deep Learning. Cada vez hay más desarrolladores que hacen uso de algoritmos para implementar nuevas funcionalidades a los usuarios o acelerar tareas hasta ahora tediosas como la clasificación de imágenes, la captura y reconocimiento de documentos o el reconocimiento de voz y la síntesis del lenguaje natural en los asistentes virtuales (Google Assistant o Alexa)"+
    "\n \t   \n" +"No es extraño que TensorFlow sea el proyecto con mayor número de contribuciones en Github año tras años, con más de 1.800 contribuciones. Acumulando más de 41 millones de descargas en tres años de historia y decenas de ejemplos de uso en distintas plataformas."
];
LoadImages(); // Carga las imágenes de los posts en un array
Cargar();

function LoadImages(){
    for(var i = 1; i <= items; i++){
        imagenes.push("url('./img/"+i+".png')");
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
    modalbody.innerText = textosFull[id-1];
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

