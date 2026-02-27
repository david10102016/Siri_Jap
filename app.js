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
  claves: ["claros", "rojas", "jhon"],
  descripcion: `Siri dice:

Analizando a: claros rojas jhon

estudiante de  15 años, y según él… más sexi que el ex vice de Tuto Quiroga.

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
