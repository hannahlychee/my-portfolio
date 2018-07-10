var mybio = document.getElementById("name");
function changeColor() {
  mybio.style.color = "red";
}
function originalColor(){
  mybio.style.color = "purple";
}
var introtext = document.getElementById("intro")
function BackgroundChange(){
  introtext.style.backgroundColor = "peachpuff";
}
function BackgroundBack(){
  introtext.style.backgroundColor = "white";
}
function something(){
  var result = str.link("https://sites.google.com/a/slamfamily.com/hly/");
   document.innerHTML = result;
}
mybio.onmouseover = changeColor;
mybio.onmouseout = originalColor;
introtext.onmouseover = BackgroundChange;
introtext.onmouseout = BackgroundBack;
onclick
console.log(mybio);
