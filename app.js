// Lista de estudiantes con sus palabras clave y biografías
const estudiantes = [
  {
    claves: ["blanca", "arauz", "suarez"],
    descripcion: "Blanca Elena Araúz Suárez, la programadora de tierras lejanas. Nacida en Bolivia, con apenas 1.45 metros de altura pero con un corazón de 64 gigas. Vive tan lejos que ni Google Maps llega, pero igual aparece en clases antes que el profe... lista para compilar su destino."
  },
  {
    claves: ["georgina", "ayala", "choque"],
    descripcion: "Georgina Ayala Choque, norteña de 17 bits... digo, años. No es más alta porque el sistema operativo de la vida no le dio tiempo para actualizarse. Bombo en mano, lidera la banda del colegio como una verdadera artista full-stack: de día estudiante, de noche violinista. A veces se escapa de informática por culpa de las partituras, pero cuando está en clase, lucha con los algoritmos como si fueran notas musicales… y siempre intenta compilar antes del recreo."
  },
  {
    claves: ["ester", "vaca", "villarroel"],
    descripcion: "Ester Melody Vaca Villarroel, cruceña de 16 años y con el sistema operativo ya en modo ‘último año’. Cuenta los días para hacer un escape.run() del colegio, pero mientras tanto, resuelve problemas en informática más rápido que un compilador con turbo. Lástima que no use el mismo algoritmo para sus bugs amorosos… ¡esa sí sería una app revolucionaria!"
  },
  {
    claves: ["sheyla", "chicaba", "vargas"],
    descripcion: "Sheyla Chicaba Vargas, boliviana de firmware serio y mirada de código estricto. Posiblemente bolivarista, porque le gusta estar con los campeones… y en informática va al frente como procesador i9. Vive en Satélite Norte, y sí, no le queda de otra, pero aún desde esa órbita controla todo el sistema… ¡como buena líder de red!"
  },
  {
    claves: ["luis", "imura", "duran"],
    descripcion: "Luis Dorian Imura Durán, boliviano de nacimiento pero ruso de espíritu revolucionario. A sus 17 años, se autoproclama chico sexy... nivel vicepresidente de Tuto. En informática avanza como un virus bien programado: silencioso pero letal. Si sigue así, no va a hackear el sistema… ¡va a controlarlo! Putin estaría orgulloso."
  },
  {
    claves: ["jose", "soria", "cunaendi"],
    descripcion: "José Manuel Soria Cuñaendi, cruceño de pura cepa con corazón de código abierto. Aunque su tierra a veces no le responda, mantiene una mirada seria —pero con un kernel activo listo para cualquier desafío. Leal a la materia de informática, enfrenta cada problema como un firewall: firme, constante y sin dejar pasar ningún error."
  },
  {
    claves: ["jose", "miranda", "flores"],
    descripcion: "José Ario Miranda Flores, 16 años y más fuerte que el firewall de la NASA. Todas las chicas del salón se derriten por él... aunque estemos en pleno invierno. Pero sus verdaderos intereses están en informática: resuelve problemas, a veces copiando, pero siempre con eficiencia de algoritmo optimizado. No le gusta el fútbol… así que nos queda la incógnita: ¿qué sistema operativo corre en su corazón?"
  },
  {
    claves: ["milagros", "reyes", "osambela"],
    descripcion: "Milagros Reyes Lima Osambela, estudiante de Buena Fe y vecina de Satélite Norte. Pequeña en tamaño, pero con un corazón que vale más gigas que cualquier disco duro. Siempre colaborativa y cuando algo no le sale, se desespera… pero calma, Milagros, que en informática la paciencia es la mejor función. ¡Repite conmigo: Osa… paciencia!"
  }
];

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
