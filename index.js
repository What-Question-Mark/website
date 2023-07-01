const greetings = [
    "Hello there! <br><span id='greeting-language'>English</span>",                  // English
    "Bonjour là-bas! <br><span id='greeting-language'>French</span>",               // French
    "¡Hola ahí! <br><span id='greeting-language'>Spanish</span>",                    // Spanish
    "Hallo dort! <br><span id='greeting-language'>German</span>",                   // German
    "Ciao lì! <br><span id='greeting-language'>Italian</span>",                      // Italian
    "こんにちは そこに！ <br><span id='greeting-language'>Japanese</span>",            // Japanese
    "거기 안녕! <br><span id='greeting-language'>Korean</span>",                     // Korean
    "你好那里！ <br><span id='greeting-language'>Mandarin Chinese</span>",                     // Mandarin Chinese
    "مرحبا هناك! <br><span id='greeting-language'>Arabic</span>",                  // Arabic
    "Sawubona lapho! <br><span id='greeting-language'>Zulu</span>"                // Zulu
];

new Typewriter(document.getElementById("greeting"), {
    strings: greetings,
    autoStart: true,
    loop: true,
    delay: 75,
    cursor: "",
}).start()
