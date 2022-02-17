console.log("script");

const imageArr = [
  "i.jpg",
  "i.jpg",
  "i.jpg",
  "i.jpg",
  "i.jpg",
  "i.jpg",
  "i.jpg",
  "i.jpg",
  "i.jpg",
  "i.jpg",
  "i.jpg",
  "i.jpg",
  "i.jpg",
  "i.jpg",
  "i.jpg"
]

let mainDiv = document.getElementById("main");

for (var i = 0; i < imageArr.length; i++) {
  let div = document.createElement("DIV");
  div.setAttribute("class", "gallery");
  div.style.backgroundImage = "url('images/"+ imageArr[i] +"')";
  document.getElementById("main").appendChild(div);
}
