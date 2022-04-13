var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();

}
Recognition.onresult=function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
 speak();  
}
function speak(){
    var synth = window.speechSynthesis;
    var speech_data = document.getElementById("textbox").value;
var Utterthis = new SpeechSynthesisUtterance(speech_data);
synth.speak(Utterthis);
Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90

});
var camera=document.getElementById("camera");