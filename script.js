/* function startRecognition(){
var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition);
recognition.onresult= function(event){
document.getElementById('textOutput').value=event.results[0][0].transcript;
};
recognition.start();
} */
function startRecognition() {
  // Check browser support
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Your browser does not support Speech Recognition. Try Chrome or Edge.");
    return;
  }

  var recognition = new SpeechRecognition();

  // 🎙️ Settings
  recognition.lang = "en-US";        // Set language (can be changed to "hi-IN" for Hindi, etc.)
  recognition.continuous = true;     // Keep listening until stopped
  recognition.interimResults = true; // Show partial results while speaking

  // 📝 Output element
  var output = document.getElementById("textOutput");

  // 🎧 When speech is detected
  recognition.onresult = function(event) {
    let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    output.value = transcript; // Update textarea or input field
  };

  // ✅ Start recognition
  recognition.start();

  // 📢 Optional event handlers
  recognition.onstart = function() {
    console.log("Voice recognition started. Speak now...");
  };

  recognition.onspeechend = function() {
    console.log("Speech ended.");
    recognition.stop();
  };

  recognition.onerror = function(event) {
    console.error("Error occurred in recognition: " + event.error);
  };
}
