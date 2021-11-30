Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='capture_image' src='" + data_uri + "'/>";
    });

}

console.log("Ml5 version: ", ml5.version);
classifier = ml5.imageClassifier("    https://teachablemachine.withgoogle.com/models/TRr4iuxjv/model.json ", modelLoaded);
function modelLoaded(){
    console.log("Model has been loaded");
}

function check(){
    ing = document.getElementById("capture_image");
    classifier.classify(ing,gotResult);
}

function gotResult (error,result){
    console.log("SHowing the result");
    if(error){
        console.error(error);
    }else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}