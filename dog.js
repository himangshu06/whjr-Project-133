img ="";
status = "";
object = [];
function preload(){
    img = loadImage("doge.jpg");
}
function setup(){
    canvas = createCanvas(650,400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status: detecting Objects";
}
function modelLoaded(){
    console.log("modelLoaded");
    status = true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if (error){
    console.log(error);
    }
    console.log(results);
    object = results;
}
function draw(){
    image(img,0,0,650,400);
    if (status != ""){
        for(i = 0;i <object.length;i++){
            document.getElementById("status").innerHTML="status: Object Detecting";
            fill("#00FF00");
            percent = floor(object[i].confidence*100);
            text(object[i].label+""+percent+"%",object[i].x,object[i].y);
            noFill();
            stroke("#00FF00");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }

}
