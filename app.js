// Lista de estudiantes con sus palabras clave y biografías
const estudiantes = [
{
  claves: ["yara", "vidal", "arredondo"],
  descripcion: `Siri dice:

Procesando... estudiante detectada: Yara Vidal Arredondo

Ubicación geográfica: Beniana de nacimiento, pero con alma de turista internacional.

Durante vacaciones, mientras tú vas al parque, Yara despega a Dubái… así, sin escala. Porque claro, como buena beniana de pura cepa, lo suyo son los viajes en avión, no en micro.

De regreso a su hábitat natural en Satélite Norte, retoma clases en el Colegio Juana Azurduy, donde en el área de informática tiene una computadora tan lenta... pero tan lenta, que los virus se aburren y se autodesinstalan.

Nerviosa sí, pero si quisiera podría programar un vuelo matinal con escala en su imaginación y destino final: el examen de informática.

Con ella no se necesita Wi-Fi, porque transmite buena onda por Bluetooth.`
},
{
  claves: ["lapaca", "choque", "rilver"],
  descripcion: `Siri dice:

Escaneando sujeto...

Identificado: Lapaca Choque Rilver

Nacionalidad: 100% boliviano, certificado con risas de fábrica.

Frase de inicio: “La pinta es lo de menos, lo importante es tener megas ilimitados.”

Se resiste a cumplir 18 como si fuera una actualización de Windows: siempre la pospone.

Su hobby principal: hablar... pero menos con la boca.

Estudiante del colegio Juana Azurduy, donde espera con ansias solo una parte del día: el recreo eterno. Si por él fuera, el horario escolar sería: “Recreo - Almuerzo - Recreo - Salida”.

Pero atención: cuando se pone las pilas, activa su modo TurboProgramador3000, y no hay algoritmo que lo detenga.

En ese estado, compila tan rápido que hasta Visual Studio se asusta.`
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
  claves: ["margoly", "maturano", "daza"],
  descripcion: `Siri dice:

Analizando a: Margoly Maturano Daza

Boliviana de nacimiento, cruceña de corazón y diplomática en potencia.

A sus 17 años ya se ve en trajes de poder, hablando en ONU, con traductor oficial cumpliendo labores diplomáticas aunque evitaría entrevistarse con el presidente Donald Trump, se desconecta el micrófono por seguridad emocional.

Vive en Satélite Norte, pero su GPS personal apunta directo a Washington D.C., aunque no descarta hacer escala por El Alto para algún mitin.

Estudia informática en el Juana Azurduy, y dice que si entiende los algoritmos... ¡entenderá cualquier tratado internacional!

Sueña con cambiar el país, pero primero está tratando de cambiar el fondo de pantalla de su PC sin pedir ayuda.

Su lema: "Primero el pueblo, después los pop-ups del antivirus".`
},
{
  claves: ["saaavedra", "peña", "jose", "antonio"],
  descripcion: `Siri dice:

Analizando a: Saaavedra Peña José Antonio

Cruceño de nacimiento, 17 años, y según él… más sexi que el vice de Tuto Quiroga (aunque nadie pidió la comparación).

Se define como “un hombre hecho y derecho”, aunque a veces en informática parece más perdido que print en Excel.

Eso sí, cuando se concentra, saca poderío oculto, cual superhéroe digital, y te resuelve el algoritmo en Python como si estuviera en una campaña presidencial.

En clases de informática: primero desconectado, luego sorpresivo. Como dirían en la política: no se lo ve venir, pero cuando llega, impacta.

Tiene flow, tiene estilo y tiene... muchas pestañas abiertas en el navegador.

¿Su lema?: “Primero Python, después el pueblo”.`
},
{
  claves: ["gutierrez", "camargo", "esmeralda"],
  descripcion: `Siri dice:

Escaneando a: Gutierrez Camargo Esmeralda

Fan del básquet, disciplinada y con una mirada que dice “hoy vengo por todo… menos por errores en el código”.

A veces seria, a veces jovial... pero siempre con una vibra que dice “si esto no funciona, me lanzo a la NBA”.

En informática, cuando algo no le corre, se desespera más que en tiempo extra sin encestar, y como diría la canción: “Si no le contesto, se desespera…”

Pero tranquila Esmeralda, recuerda que la virtud de todo buen programador es la paciencia (y un par de reinicios).

Repite conmigo: “¡Esme, sea paciente!”

Con esa energía, talento y un poco de calma, lograrás cosas grandes… en la cancha y en la consola.`
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
  claves: ["rodriguez", "aguilar", "cristian"],
  descripcion: `Siri dice:

Cristian Rodríguez Aguilar, con 17 años, este estudiante boliviano no solo está inmerso con PHP, sino que también maneja la paciencia como un recurso ilimitado.

Es tan paciente que hasta los virus tienen flojera de tratar con él.`
},
{
  claves: ["monica", "ojeda"],
  descripcion: `Siri dice:

Mónica Ojeda, boliviana de 17 años, con un talento para no darse por vencida y resolver problemas en informática y para esquivar preguntas incómodas sobre su ex.

Su código siempre compila, pero con las relaciones tuvo más “errores de sintaxis”. Aún así, sigue depurando la vida con la misma dedicación que sus proyectos.`
},
{
  claves: ["ortega", "quispe", "jhon"],
  descripcion: `Siri dice:

Jhon Ortega Quispe, boliviano de nacimiento experto en mantener el perfil bajo hasta que le llega la hora de programar.

Cuando se activa, su código es tan limpio que hasta su ex amor quisiera que su relación fuera igual de ordenada.

En clase, combina lógica y paciencia… aunque a veces el corazón se le cuelga como un error sin depurar.`
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
