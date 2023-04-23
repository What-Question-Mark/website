const greetings = [
    "Hello there!",                  // English
    "Bonjour là-bas!",               // French
    "¡Hola ahí!",                    // Spanish
    "Hallo dort!",                   // German
    "Ciao lì!",                      // Italian
    "こんにちは そこに！",            // Japanese
    "거기 안녕!",                     // Korean
    "你好那里！",                     // Mandarin Chinese
    "مرحبا هناك!",                  // Arabic
    "Sawubona lapho!"                // Zulu
];

new Typewriter(document.getElementById("greeting"), {
    strings: greetings,
    autoStart: true,
    loop: true,
    delay: 75,
    cursor: "",
}).start()
