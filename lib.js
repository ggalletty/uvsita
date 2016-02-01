var speech  = function(){

  var recognition = new webkitSpeechRecognition();
    recognition.lang = "it";
    recognition.continuous = true;
    recognition.interimResults = true;

  recognition.onresult = function(event) {
    var colour = event.results[event.results.length - 1][0].transcript;
    colour = colour.toLowerCase();
    colour = colour.replace(/\s/gi,'');
    $('body').removeClass().addClass(colour);
    $('h1').text(colour);
  }
  recognition.start();

}

if (!('webkitSpeechRecognition' in window)) {
  alert("Sorry you require a browser that supports speech recognition");
}
else {
  speech();
}