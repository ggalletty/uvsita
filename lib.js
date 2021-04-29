var speech  = function(){
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  recognition.lang = "it-IT";
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  recognition.onresult = function(event) {
    var colour = event.results[event.results.length - 1][0].transcript;
    colour = colour.toLowerCase();
    colour = colour.replace(/\s/gi,'');
    $('body').removeClass().addClass(colour);
    $('h1').text(colour);
  }

  recognition.start();
}

if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
  alert("Sorry you require a browser that supports speech recognition");
}
else {
  speech();
}
