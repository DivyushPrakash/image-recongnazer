Webcam.set({
width:400,
height:300,
image_format:"png",
png_quality:100
});

var webcamdiv=document.getElementById("webcam");

Webcam.attach('#webcam');

function clickimage(){
Webcam.snap(function(imguri){
    document.getElementById("clickedimage").innerHTML='<img id="selfie" src="'+imguri+'"> ';
});

}

console.log(ml5.version);

var mymodel=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-MW9E2KCe/model.json",modelloaded);

function modelloaded(){
    console.log("My model has loaded");
}


function check(){
    photo=document.getElementById("selfie");
    mymodel.classify(photo,getresult);

}

function getresult(error,result){
if(error){
    console.error(error);
}
else {
    console.log(result);
    document.getElementById("objectname").innerHTML=result[0].label;
    document.getElementById("objectaccuracy").innerHTML=result[0].confidence;
}
}
  