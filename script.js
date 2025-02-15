function startRecognition(){
var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition);
recognition.onresult= function(event){
document.getElementById('textOutput').value=event.results[0][0].transcript;
};
recognition.start();
}
