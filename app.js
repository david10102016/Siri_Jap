// Lista de estudiantes con sus palabras clave y biografías
const estudiantes = [
{
  claves: ["camacho", "diaz", "arlet"],
  descripcion: `Siri dice:

Procesando... estudiante detectada: camacho diaz arlet

Ubicación geográfica: Boliviana de nacimiento, pero con alma de turista internacional.

Durante las vacaciones, mientras tú vas al parque, Arlet despega a Dubái… así, sin escala. Porque claro, como buena boliviana de pura cepa, lo suyo son los viajes en avión, no en micro.

De regreso a su hábitat natural en Satélite Norte, retoma clases en el Colegio buena fe, donde en el área de fisica tiene una calculadora tan lenta... pero tan lenta, que los virus se aburren y se autodesinstalan.

Nerviosa sí, pero si quisiera podría programar un vuelo matinal con escala en londres.

Con ella no se necesita Wi-Fi, porque transmite buena onda por Bluetooth.`
},
{
  claves: ["velasquez", "cruz", "yoselin"],
  descripcion: `Siri dice:

Procesando... estudiante detectada: velasquez cruz yoselin

Ubicación geográfica: Boliviana de nacimiento, pero con alma de turista internacional.

Durante las vacaciones, mientras tú vas al parque, yoselin despega a Dubái… así, sin escala. Porque claro, como buena boliviana de pura cepa, lo suyo son los viajes en avión, no en micro.

De regreso a su hábitat natural en Satélite Norte, retoma clases en el Colegio buena fe, donde en el área de fisica tiene una calculadora tan lenta... pero tan lenta, que los virus se aburren y se autodesinstalan.

Nerviosa sí, pero si quisiera podría programar un vuelo matinal con escala en londres.

Con ella no se necesita Wi-Fi, porque transmite buena onda por Bluetooth.`
},
{
  claves: ["cruz", "panozo", "carlos leonel"],
  descripcion: `Siri dice:

Escaneando personaje...

Identificado: cruz panozo carlos leonel

Nacionalidad: 100% boliviano, amante de la pizza, lastima que no lo amen a el.

Frase de inicio: “La pinta es lo de menos, lo importante es tener megas ilimitados.”

Estudiante del colegio campo rosso, donde espera con ansias solo una parte del día: el recreo eterno. Si por él fuera, el horario escolar sería: “Recreo - Almuerzo - Recreo - Salida”.

Pero atención: cuando se pone las pilas, activa su modo TurboProgramador3000, y no hay algoritmo que lo detenga.`
},
{
  claves: ["silva", "lopez", "carlos", "hugo"],
  descripcion: `Siri dice:

Escaneando sujeto...

Nombre: Carlos Hugo Silva López

Hijo de político, pero con alma de futbolista o árbitro confundido (aún no decide si quiere patear el balón o sacar tarjetas).

A los 17 años ya sueña con que el VAR lo consulte antes de actuar.

Vive en Satélite Norte, pero cada mañana se despierta con la esperanza de que Google Maps le diga: “Te has mudado automáticamente a otra zona”.

Estudiante de informática en Juana Azurduy, aunque a veces confunde el código con la formación táctica del 4-4-2.

Cuando programa, los errores se le aparecen como faltas en el área: los ve, pero no siempre los pita.

Eso sí, cuando enfoca, lo hace tan bien que hasta el software lo aplaude.`
},
{
  claves: ["contreras", "isla", "ayde"],
  descripcion: `Siri dice:

Analizando a: contreras isla ayde

cruceña de corazón y diplomática en potencia.

A sus 17 años ya se ve en trajes de poder, hablando en la ONU, con traductor oficial cumpliendo labores diplomáticas.

Vive en Satélite Norte, pero su GPS personal apunta directo a Washington D.C.

Estudia informática en campo rosso, y dice que si entiende los algoritmos... ¡entenderá cualquier tratado internacional!

Sueña con cambiar el país, pero primero está tratando de cambiar el fondo de pantalla de su PC sin pedir ayuda.

Su lema: "Primero el pueblo, después php".`
},
{
  claves: ["barcaya", "kaqui", "jhon", "david"],
  descripcion: `Siri dice:

Analizando a: barcaya kaqui jhon david

estudiante de  15 años, y según él… más sexi que el exvice de Tuto Quiroga.

Se define como “un hombre hecho y derecho”, aunque a veces en fisica y quimica parece más perdido que print en Excel.

Eso sí, cuando se concentra, saca poderío oculto, cual superhéroe digital, y te resuelve los problemas matematicos  como si estuviera en una campaña presidencial.

Tiene flow, tiene estilo y tiene... muchas pestañas abiertas en el navegador.

¿Su lema?: “primero fisica y quimica, después mis compañeros”.`
},
{
  claves: ["garcia", "castro", "leiton"],
  descripcion: `Siri dice:

Analizando a: garcia castro leiton

estudiante de  15 años nacido en yapacani, y según él… más sexi que el ex candidato vice de Tuto Quiroga.

Se define como “un hombre hecho y derecho”, aunque a veces en fisica y quimica parece más perdido que print en Excel.

Eso sí, cuando se concentra, saca poderío oculto, cual superhéroe digital, y te resuelve los problemas matematicos  como si estuviera en una campaña presidencial.

Tiene flow, tiene estilo y tiene... muchas pestañas abiertas en el navegador.

¿Su lema?: “primero fisica y quimica, después mis compañeros”.`
},
{
  claves: ["Melgar", "perez", "sheril"],
  descripcion: `Siri dice:

Escaneando a: melgar perez sheril

Fan del básquet, a veces seria, a veces jovial... pero siempre con una vibra que dice “si esto no funciona, me lanzo a la NBA”.

En informática, cuando algo no le corre, se desespera más que en tiempo extra sin encestar, y como diría la canción: “Si no le contesto, se desespera…”

Pero tranquila sheril, recuerda que la virtud de todo buen programador es la paciencia.

Repite conmigo: “¡sheril, sea paciente!” xd.`
},
{
  claves: ["apaza", "ayala", "alison", "fernanda"],
  descripcion: `Siri dice:

Escaneando a: Apaza Ayala Alison Fernanda

Si no es el bombo, es el platillo… pero el silencio no es su fuerte. Le encanta la música, y quiere aprender guitarra.

Muy bien, Fernanda, mientras no termines tocando el violín en clase… todo bien.

En informática se esfuerza, y eso se nota: sus programas dan frutos buenos, aunque a veces su disco duro llore de tanto archivo.

Siempre alegre, incluso cuando el sistema le dice "error 404: paciencia no encontrada".

Porque cuando se combina ritmo + lógica, el código fluye como una buena melodía.`
},
{
  claves: ["noemi", "calderon"],
  descripcion: `Siri dice:

Noemi Calderón, joven boliviana de 17 años, pequeña pero “peligrosa” en programación, pues su agilidad para detectar errores y encontrar soluciones es impresionante.

Su hobby es escuchar música y ver tutoriales, y aunque está en la fase de programar, cada línea que escribe es un golpe certero contra los bugs.`
},
{
  claves: ["rodriguez", "sanchez", "lucero"],
  descripcion: `Siri dice:

rodriguez sanchez lucero, proximamente cumple 15 años el 12 de mayo, estudiante cruceña no solo está inmerso en fisica y quimica, sino que también maneja la paciencia como un recurso ilimitado.

Es tan paciente que hasta los virus tienen flojera de tratar con ella.`
},
{
  claves: ["monica", "ojeda"],
  descripcion: `Siri dice:

Mónica Ojeda, boliviana de 17 años, con un talento para no darse por vencida y resolver problemas en informática y para esquivar preguntas incómodas sobre su ex.

Su código siempre compila, pero con las relaciones tuvo más “errores de sintaxis”. Aún así, sigue depurando la vida con la misma dedicación que sus proyectos.`
},
{
  claves: ["puchuli", "espinoza", "franz"],
  descripcion: `Siri dice:

personaje encontrado: puchuli espinoza franz, boliviano de nacimiento experto en mantener el perfil bajo hasta que le llega la hora de programar.

Cuenta con un equipo de computo tan lento, tan lento que hasta los virus se alejan de el.

En clase quiere concentrarse… pero todo le recuerdad a la ex . sin llorar francisco por favor.`
},
{
  claves: ["lara", "hinojosa", "jhoselin"],
  descripcion: `Siri dice:

Estudiante de Juana Azurduy de Padilla, 17 años, seria… tan seria que cuando sonríe, Windows lanza una alerta de seguridad: "Comportamiento inusual detectado".

Dicen que su expresión facial tiene más capas de protección que un antivirus premium.

En informática no dice mucho, pero cuando programa… sus códigos parecen escritos con guantes de etiqueta.

Misteriosa, precisa y probablemente la única persona que logra que la computadora no se atreva a colgarse.`
},
  
  {
    claves: ["alcazar", "suarez", "arlette", "mashenka"],
    descripcion: `Siri dice:

Detectada: Alcazar Suarez Arlette Mashenka. Colegio Buena Fe, Satélite Norte.

En su otra vida fue top model. En esta vida llega al colegio con el uniforme impecable y las cejas dibujadas con precisión de laboratorio. En química eso se llama trabajo fino.

Tiene más filtros en Instagram que compuestos en la tabla periódica. Y los aplica más rápido.

Su crush la saludó un martes. Ella ya tenía el nombre de los hijos. Él no recuerda haberla saludado.

En el grupo de WhatsApp del curso manda "buenos días" con sticker de mariposa. Nadie responde. Ella manda otro.`
  },
  {
    claves: ["ayca", "choque", "nicol"],
    descripcion: `Siri dice:

Detectada: Ayca Choque Nicol. 15 años. Satélite Norte.

En su otra vida desfiló en Milán. En esta vida desafila al entrar al aula pero llega con el celular cargado al 100%. Prioridades claras.

Su TikTok tiene más coreografías que tareas entregadas. Y se le nota más talento ahí.

Le mandó una indirecta a su crush por historia. Él la vio. Subió una foto con otra. En física a eso se le llama fuerza en dirección contraria.

En el grupo del curso activa el modo avión justo cuando el profesor manda la tarea.`
  },
  {
    claves: ["camacho", "dias", "heidy", "arlet"],
    descripcion: `Siri dice:

Detectada: Camacho Dias Heidy Arlet. Colegio Buena Fe.

Se considera la más influyente del salón. Su Instagram tiene filtros tan potentes que hasta ella misma se sorprende al verse al espejo.

Durante las vacaciones sus compañeras van a Dubai. Heidy va al mercado pero sube una foto con jugo de mango y escribe "good vibes only".

Su crush le dio like a una foto de hace 47 semanas. Ella todavía lo analiza con sus amigas.

En química su reacción favorita es la del drama. Rápida, explosiva y sin reactivos claros.`
  },
  {
    claves: ["chambi", "colque", "brayan"],
    descripcion: `Siri dice:

Detectado: Chambi Colque Brayan. 15 años. Satélite Norte.

Se cree el más sexy del salón. El salón sigue esperando las pruebas.

Manda memes en el grupo de WhatsApp a la 1 de la mañana. Al día siguiente no sabe ni en qué página van en química.

Su único desplazamiento con velocidad real en el día es cuando suena el timbre del recreo. En física eso se llama motivación cinética.

Lleva tres semanas analizando si la chica que le gusta lo miró o fue casualidad. Sus amigos ya se cansaron del tema.`
  },
  {
    claves: ["choquecha", "maraza", "dania"],
    descripcion: `Siri dice:

Detectada: Choquecha Maraza Dania. Colegio Buena Fe.

En su otra vida fue influencer internacional. En esta vida tiene 200 seguidores pero los administra como si fueran millones.

Su historia de WhatsApp a las 11 de la noche dice "no puedo dormir". Su crush la vio. No respondió. Ella subió otra que decía "mejor sola". Clásico.

En química le cuesta balancear ecuaciones pero sus emociones las balancea perfectamente... o eso cree.

Llega al colegio seria, pero en el recreo es otra persona. En física eso se llama cambio de estado.`
  },

   
  {
    claves: ["condori", "rueda", "cristofer"],
    descripcion: `Siri dice:

Detectado: Condori Rueda Cristofer. Colegio Buena Fe.

Se define como "diferente a los demás". Los demás también dicen lo mismo.

Su velocidad para responder mensajes de su crush: instantánea. Su velocidad para entregar tareas: fenómeno no registrado aún.

Manda memes de física en el grupo del curso creyendo que es gracioso. Spoiler: sí lo es, pero no se lo digas.

Está enamorado desde el lunes. El viernes ya superó. El sábado recayó. A eso en química se le llama reacción reversible.`
  },
  {
    claves: ["cossio", "tribeño", "jhoselin"],
    descripcion: `Siri dice:

Detectada: Cossio Tribeño Jhoselin. 15 años. Satélite Norte.

En su otra vida fue top model en París. En esta vida llega al Colegio Buena Fe con audífonos puestos y cara de "no me hablen".

Tiene una estética en Instagram muy cuidada. Su cuaderno de física no tiene la misma suerte.

Le manda indirectas a su crush con canciones de moda en el estado de WhatsApp. Él escucha reggaeton y no entiende las indirectas. Distancia emocional: infinita.

En el grupo del curso solo aparece para mandar el "jajaja" cuando alguien más dice algo. Presencia mínima, impacto máximo.`
  },
  {
    claves: ["cruz", "panozo", "carlos", "leonel"],
    descripcion: `Siri dice:

Detectado: Cruz Panozo Carlos Leonel. Colegio Buena Fe.

Se cree el más serio del salón. Sus compañeros tienen otra versión de los hechos.

Su TikTok es de videos de fútbol y "frases de campeones". Aún no ganó nada, pero el optimismo es gratuito.

En química le cuesta separar compuestos. En el recreo separa perfectamente qué comprar con Bs. 5.

Lleva un mes esperando que su crush le responda. El mensaje dice "visto" desde el día uno. Carlos Leonel, eso no es una señal, eso es una respuesta.`
  },
  {
    claves: ["doncel", "vaca", "albeiro"],
    descripcion: `Siri dice:

Detectado: Doncel Vaca Albeiro. 15 años. Satélite Norte.

Se cree el más tranquilo del salón. En realidad es el que más drama genera en silencio.

Su velocidad en el recreo es récord mundial. Su velocidad para hacer la tarea de física viola las leyes del universo: no se ha detectado.

Manda el "buenos días" en el grupo del curso a las 6am. Nadie sabe por qué está despierto a esa hora. Él tampoco lo sabe.

Está enamorado pero no lo dice. Ella lo sabe pero no dice nada. En química a eso se le llama reacción pendiente.`
  },
  {
    claves: ["escalante", "farel", "carlos", "raul"],
    descripcion: `Siri dice:

Detectado: Escalante Farel Carlos Raul. Colegio Buena Fe.

Tiene una frase motivacional en el estado de WhatsApp desde hace 4 meses. La misma. No ha cambiado. La motivación tiene sus límites.

Se cree experto en química porque una vez acertó la respuesta de casualidad. El profesor tampoco lo esperaba.

En TikTok le da like a todo pero no sube nada. Observador profesional.

Su crush le dijo "eres buena onda". Él pasó el fin de semana interpretando esas tres palabras con sus amigos. Conclusión: siguen sin saber nada.`
  },
  {
    claves: ["huanca", "guerra", "nayelin"],
    descripcion: `Siri dice:

Detectada: Huanca Guerra Nayelin. Satélite Norte. 15 años.

En su otra vida fue top model. En esta vida tiene el mejor ángulo para las fotos de todo el Colegio Buena Fe. No es casualidad, es entrenamiento.

Sube una historia en Instagram y revisa cada 3 minutos quién la vio. Si su crush no la vio en la primera hora, sube otra. Estrategia pura.

En física le cuesta calcular velocidad pero calcula perfectamente cuántos minutos tarda su crush en responder. Al milisegundo.

En el grupo del curso manda el "alguien tiene la tarea?" con un sticker de carita triste. Siempre funciona.`
  },
  {
    claves: ["huarachi", "castro", "lizeth", "maria"],
    descripcion: `Siri dice:

Detectada: Huarachi Castro Lizeth Maria. Colegio Buena Fe.

Seria, reservada, misteriosa. En su otra vida fue espía internacional. En esta vida guarda todos sus secretos en el chat de "Mis notas" de WhatsApp.

Su Instagram tiene pocas fotos pero todas perfectas. Calidad sobre cantidad. Eso sí es química fina.

Le gusta alguien pero jamás lo va a admitir. Sus amigas ya saben. Su crush ya sabe. Ella cree que nadie sabe.

En física no dice mucho pero cuando habla, acierta. A eso se le llama precisión de laboratorio.`
  },
  {
    claves: ["muruchi", "rivero", "valeria"],
    descripcion: `Siri dice:

Detectada: Muruchi Rivero Valeria. 15 años. Satélite Norte.

En su otra vida desfiló en Milán. En esta vida desafila al Colegio Buena Fe pero con una energía que intimida al mismo uniforme.

Tiene más seguidores en TikTok que respuestas correctas en química. Y está bien con eso.

Manda indirectas en el estado de WhatsApp con letras de canciones. Su crush las lee y manda un emoji de fuego. Valeria lleva 3 días analizando si eso significa algo. Significa que tiene calor, Valeria.

En el grupo del curso es la que organiza todo. Sin ella, el curso no existiría. Ella lo sabe. El curso también.`
  },
  {
    claves: ["osinaga", "mamani", "yusely"],
    descripcion: `Siri dice:

Detectada: Osinaga Mamani Yusely. Colegio Buena Fe.

Se considera la más ordenada del salón. Su cuaderno es una obra de arte. Su vida amorosa es un experimento sin control.

Sube fotos en Instagram con frases de "enfocada en mis metas". Dos horas después está en el grupo hablando de su crush. Las metas pueden esperar.

Le mandó un mensaje a las 10 de la noche. Él respondió a las 2 de la mañana con un "jaja". Yusely durmió feliz. En química a eso se le llama reacción con mínima energía de activación.

En física saca buenas notas cuando quiere. El problema es el "cuando quiere".`
  },
  {
    claves: ["ovale", "balcazar", "flavia"],
    descripcion: `Siri dice:

Detectada: Ovale Balcazar Flavia. Satélite Norte. 15 años.

En su otra vida fue top model en Nueva York. En esta vida llega al Colegio Buena Fe con una seguridad que el mismo director envidia.

Su TikTok tiene transiciones tan perfectas que el profesor de física las usaría como ejemplo de movimiento coordinado.

Está enamorada pero lo niega. Sus amigas lo saben. Su mamá lo sabe. El vecino lo sabe. Solo ella cree que es un secreto.

En el grupo del curso es la que manda el meme justo en el momento justo. Eso no se enseña en ningún colegio.`
  },
  {
    claves: ["paz", "machuca", "liz", "mariel"],
    descripcion: `Siri dice:

Detectada: Paz Machuca Liz Mariel. Colegio Buena Fe.

Su nombre dice Paz pero su grupo de WhatsApp con las amigas no conoce ese concepto.

En su otra vida fue influencer de moda. En esta vida combina el uniforme mejor que nadie en Satélite Norte. Con uniforme obligatorio. Eso es talento puro.

Le gusta alguien desde el primer mes de clases. Ha mandado exactamente cero mensajes. Ha mandado exactamente 47 indirectas por historia. Eficiencia cuestionable.

En química le cuesta pero no se rinde. En el amor igual. Consistencia total.`
  },
  {
    claves: ["pico", "bass", "gabriela"],
    descripcion: `Siri dice:

Detectada: Pico Bass Gabriela. 15 años. Satélite Norte.

En su otra vida fue top model y actriz. En esta vida actúa perfectamente que no le importa lo que piensen. Oscar merecido.

Tiene una estética en Instagram tan cuidada que los filtros le piden permiso antes de aplicarse.

Su crush le dio like a una foto antigua. Gabriela convocó reunión de emergencia con sus amigas a las 11 de la noche. En física a eso se le llama reacción en cadena.

En el Colegio Buena Fe es de las que sabe todo lo que pasa antes que el director. Información privilegiada.`
  },
  {
    claves: ["porco", "paco", "bertha", "beatriz"],
    descripcion: `Siri dice:

Detectada: Porco Paco Bertha Beatriz. Colegio Buena Fe.

Alegre, sociable y con una energía que agota solo de verla. En química a eso se le llama elemento altamente reactivo.

Su TikTok es puro baile y humor. Sus compañeros la siguen. Su cuaderno de física no tiene la misma energía que ella, pero nadie es perfecto.

Le manda mensajes a su crush con stickers de ositos. Él responde con el pulgar arriba. Beatriz dice que "algo hay". Sus amigas no están tan seguras.

En el grupo del curso es la que mantiene viva la conversación cuando todos desaparecen. MVP del salón, sin discusión.`
  },
  {
    claves: ["rojas", "ramos", "kenia", "alisson"],
    descripcion: `Siri dice:

Detectada: Rojas Ramos Kenia Alisson. Satélite Norte. 15 años.

En su otra vida fue top model internacional. En esta vida llega al Colegio Buena Fe como si llegara a una pasarela. El pasillo es su runway.

Tiene el estado de WhatsApp actualizado cada día con una frase diferente. Su crush las lee todas. No dice nada. Kenia sigue actualizando. Perseverancia pura.

En física le cuesta la teoría pero en la práctica del drama cotidiano no falla ni una vez.

En el grupo del curso es la que manda el "chicas necesito consejo" a las 10 de la noche. Todas responden inmediatamente. Poder real.`
  },
  {
    claves: ["roque", "salanova", "adrian"],
    descripcion: `Siri dice:

Detectado: Roque Salanova Adrian. 15 años. Colegio Buena Fe.

Se cree el más interesante del salón. Técnicamente tiene argumentos. Técnicamente.

Tiene un TikTok de "reflexiones de vida". Adrian, tienes 15 años. La vida recién empieza.

Su crush le respondió un "jaja" al mensaje. Él pasó tres días convenciéndose de que eso es una señal positiva. En química a eso se le llama interpretación forzada de resultados.

En el grupo del curso es el que manda el "alguien fue a clases hoy?" cuando faltó. Sin vergüenza. Respeto.`
  },
  {
    claves: ["sanchez", "ancieta", "melany", "neybi"],
    descripcion: `Siri dice:

Detectada: Sanchez Ancieta Melany Neybi. Satélite Norte.

En su otra vida fue top model y diseñadora de modas. En esta vida diseña su feed de Instagram con una precisión que ningún elemento de la tabla periódica podría igualar.

Manda indirectas en TikTok subiendo videos con canciones "casuales". Su crush baila la misma canción sin entender el mensaje. Distancia emocional: calculada en años luz.

En el Colegio Buena Fe es de las que siempre tiene el apunte completo... cuando quiere. El problema es el cuando quiere.

Su reacción química favorita ocurre cuando su crush aparece en el pasillo. Instantánea e irreversible.`
  },
  {
    claves: ["sarzuri", "rodas", "daniel"],
    descripcion: `Siri dice:

Detectado: Sarzuri Rodas Daniel. 15 años. Satélite Norte.

Se cree el más maduro del curso. Tiene 15 años. El universo no opina lo mismo.

Manda memes a las 2 de la mañana en el grupo del curso y al día siguiente en química no sabe ni dónde está el cuaderno. Pero los memes eran buenos, hay que reconocerlo.

Su crush le sonrió en el pasillo. Daniel lleva una semana procesando ese momento. En física a eso se le llama análisis de movimiento en cámara lenta.

En el Colegio Buena Fe es conocido por tener una respuesta para todo. Si es correcta, es otro tema.`
  },
  {
    claves: ["tito", "condo", "romina", "ruth"],
    descripcion: `Siri dice:

Detectada: Tito Condo Romina Ruth. Colegio Buena Fe.

En su otra vida fue actriz de telenovela. En esta vida protagoniza su propio drama cada semana en Satélite Norte. Sin guión. Completamente improvisado.

Tiene el WhatsApp con notificaciones silenciadas para todos... excepto para su crush. Ese tiene sonido, vibración y prioridad máxima.

Sube una foto en Instagram y en 10 minutos ya sabe quién la vio, quién no, y quién la vio dos veces. En física a eso se le llama sistema de rastreo avanzado.

En química no es la primera pero tampoco la última. Está cómodamente en el medio. Como ella dice: "ni muy muy, ni tan tan".`
  },
  {
    claves: ["vallejos", "gutierrez", "massiel", "shaney"],
    descripcion: `Siri dice:

Detectada: Vallejos Gutierrez Massiel Shaney. 15 años. Satélite Norte.

En su otra vida fue top model y cantante. En esta vida canta en el grupo de WhatsApp con notas de voz que nadie pidió pero todos escuchan.

Su Instagram es una combinación perfecta de filtros, ángulos y frases motivacionales. Su cuaderno de física tiene otra estética. Más libre. Más salvaje.

Le gusta alguien desde hace meses. Se lo dijo a sus amigas. Sus amigas se lo dijeron a las amigas de las amigas. Ahora todo el Colegio Buena Fe sabe. Menos él.

En el grupo del curso es la que activa el drama sin querer. Talento natural.`
  },
  {
    claves: ["zamorano", "flores", "adriana"],
    descripcion: `Siri dice:

Detectada: Zamorano Flores Adriana. Colegio Buena Fe.

En su otra vida fue top model internacional con agenda llena. En esta vida llega siempre puntual al recreo. Las prioridades son sagradas.

Tiene más filtros guardados en Instagram que fórmulas aprendidas en química. Y los aplica con más precisión.

Su crush le mandó un mensaje con un punto al final. Adriana y sus amigas analizaron el punto durante dos horas. En física a eso se le llama buscarle la quinta pata al gato.

En Satélite Norte la conocen por ser la última en llegar al drama pero la primera en tener toda la información. Eficiencia máxima.`
  }

]

// Función para buscar coincidencia parcial
function buscarEstudiante(palabras) {
  for (const estudiante of estudiantes) {
    for (const clave of estudiante.claves) {
      if (palabras.includes(clave)) {
        return estudiante.descripcion;
      }
    }
  }
  return null;
}

// Inicialización reconocimiento de voz
const btnHablar = document.getElementById("btnHablar");
const transcriptEl = document.getElementById("transcript");
const responseBox = document.getElementById("responseBox");

btnHablar.addEventListener("click", () => {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    transcriptEl.textContent = "Lo siento, tu navegador no soporta reconocimiento de voz.";
    return;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.lang = 'es-ES';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  transcriptEl.textContent = "Escuchando...";

  recognition.start();

  recognition.onresult = (event) => {
    const texto = event.results[0][0].transcript.toLowerCase().trim();
    transcriptEl.textContent = `Detectado: ${texto}`;
    const palabras = texto.split(/\s+/);

    const descripcion = buscarEstudiante(palabras);

    if (descripcion) {
      responseBox.textContent = descripcion;
      hablar(descripcion);
    } else {
      const mensajeNoEncontrado = "No tengo registro de esa persona... ¿será una leyenda urbana del curso?";
      responseBox.textContent = mensajeNoEncontrado;
      hablar(mensajeNoEncontrado);
    }
  };

  recognition.onerror = (event) => {
    transcriptEl.textContent = "Error al reconocer voz, por favor intenta de nuevo.";
  };
});

function hablar(texto) {
  if (!('speechSynthesis' in window)) return;
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = 'es-ES';
  window.speechSynthesis.speak(utterance);
}
