function draw(){
background("#036ffc");
}
function preload(){

}
function setup(){
    canvas=createCanvas(350,350);
    canvas.position(650,150);
  video=createCapture(VIDEO);
  video.size(560,510);
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on("pose",gotPoses);
 }
 function modelLoaded(){
     console.log("poseNet is loaded");

 }
 function gotPoses(results){
if(results.length>0){
    console.log(results);
}
 }