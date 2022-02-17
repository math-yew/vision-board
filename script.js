console.log("script");

const imageArr = [
  "art1.jpg",
  "art2.jpg",
  "art3.jpg",
  "art4.jpg",
  "family adventure.jpg",
  "fit.jpg",
  "gallery.jpg",
  "good dad.jpg",
  "family tree.jpg",
  "healthy food.jpg",
  "react.png",
  "rushmore.jpg",
  "sequoia.jpg",
  "table.jpg",
  "temple.jpg"
]

let mainDiv = document.getElementById("main");

for (var i = 0; i < imageArr.length; i++) {
  let div = document.createElement("DIV");
  div.setAttribute("class", "gallery");
  div.style.backgroundImage = "url('images/"+ imageArr[i] +"')";
  document.getElementById("main").appendChild(div);
}
