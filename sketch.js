let myLoc;
var myMap;
var canvas;
var mappa = new Mappa("MapboxGL", "pk.eyJ1IjoibGF1cmFnaGlzb3R0aSIsImEiOiJjam9yMGNvaGwwYW1qM3dwZDUzc3ZlbXR1In0.BNRfSXHTxKVHJAwWUpGbuA");

var scena=0;

var statuaLat = 40.6892494;
var statuaLon = -74.0466891;

var broadLat = 40.908288;
var broadLon = -73.8987527;

var squareLat = 40.7634032;
var squareLon = -73.9770419;

var wtcLat = 40.7115242;
var wtcLon = -74.0145492;

var gugLat = 40.7819479;
var gugLon = -73.9586058;

var r=0;
var g=0;
var b=0;

var b2=0;
var r1=0;
var r3=0;
var r4=0;
var r5=0;

var op=0;
var ops=0;


var options = {
  lat: squareLat,
  lng: squareLon,
  zoom: 11,
  style: "mapbox://styles/lauraghisotti/cjoyzuaiq8okf2snojackxdbu",
  pitch: 50
}

/*var options2 = {
  lat: ampaLat,
  lng: ampaLon,
  zoom: 100,
  style: "mapbox://styles/lauraghisotti/cjor0drgh68zv2rp645ifk4a8",
  pitch: 50
}*/


function preload(){
  // put preload code here
  myLoc = getCurrentPosition()
}

function setup() {
  // put setup code here
  //background(255,0,0)

  canvas= createCanvas(windowWidth, windowHeight);
  /*  if (scena==0) {
  myMap= mappa.tileMap(options);
} else if (scena==1) {
  myMap= mappa.tileMap(options2);
  console.log("ampa")
}*/
myMap= mappa.tileMap(options);
  myMap.overlay(canvas);

  var distance = calcGeoDistance(statuaLat, statuaLon, myLoc.latitude, myLoc.longitude, "km");
  console.log(distance);
}

function draw() {
  clear();
  /*if (scena==0) {
myMap= mappa.tileMap(options);
} else if (scena==1) {
myMap= mappa.tileMap(options);
myMap.overlay(canvas);
console.log("ampa")
}*/
  // put drawing code here
  push();
  fill("black");
  translate(width/8, 20);
    rect(0, 0, 6*width/8, 100);
    pop();

  push();
  fill("white");
  textAlign(CENTER);
  textSize(20);
  translate(width/2, 50);
    text("A dangerous killer is hiding in New York! Is he at the top of the Statue of Liberty o walking by Times Square?\nIs he strolling down Broadway, visiting the World Trade Center or the Guggenheim Museum?\nAll you need to do to find out is type the initial letter of one of the previously mentioned places.", 0, 0);
    pop();

  fill(r1, g, b);
  var point=myMap.latLngToPixel(statuaLat,statuaLon);
  ellipse(point.x, point.y, 20);

  fill(r, g, b2);
  var point=myMap.latLngToPixel(broadLat,broadLon);
  ellipse(point.x, point.y, 20);

  fill(r3, g, b);
  var point=myMap.latLngToPixel(squareLat,squareLon);
  ellipse(point.x, point.y, 20);

  fill(r4, g, b);
  var point=myMap.latLngToPixel(wtcLat,wtcLon);
  ellipse(point.x, point.y, 20);

  fill(r5, g, b);
  var point=myMap.latLngToPixel(gugLat,gugLon);
  ellipse(point.x, point.y, 20);


  push();
  noStroke();
   fill(0, 0, 0, ops);
   translate(width/8, 7*height/8);
     rect(0, 0, 6*width/8, 100);
   pop();

   push();
   fill(255, 255, 255, ops);
   textAlign(CENTER);
   textSize(20);
   translate(width/2, height-80);
     text("Too bad, you failed!", 0, 0);
     pop();

 push();
 noStroke();
  fill(255, 255, 255, op);
  translate(width/8, 7*height/8);
    rect(0, 0, 6*width/8, 100);
  pop();

  push();
  fill(0, 0, 0, op);
  textAlign(CENTER);
  textSize(40);
  translate(width/2, height-50);
    text("Good job, you found the killer!", 0, 0);
    pop();
}

function keyTyped() {
  if (key==="g" && op==0){
  r5=200;
  ops=300;

} else if (key==="s" && op==0){
r1=200;
ops=300;

} else if (key==="b" && op==0){
b2=200;
op=300;

} else if (key==="t" && op==0){
r3=200;
ops=300;

} else if (key==="w" && op==0){
r4=200;
ops=300;

}
}
