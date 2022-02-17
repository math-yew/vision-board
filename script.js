console.log("script");

const a = {w:14,h;30,pics:[
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
]}


const b = {w:14,h;30,pics:[
  "art1.jpg",
  "art2.jpg",
  "art3.jpg
}


const c = {w:14,h;30,pics:[
  "art1.jpg",
  "art2.jpg",
  "art3.jpg
}


const d = {w:14,h;30,pics:[
  "art1.jpg",
  "art2.jpg",
  "art3.jpg
}

let mainDiv = document.getElementById("main");

function populate(obj){
let imageArr = obj.pics;
for (var i = 0; i < imageArr.length; i++) {
  let div = document.createElement("DIV");
  div.setAttribute("class", "gallery");
  div.style.backgroundImage = "url('images/"+ imageArr[i] +"')";
  div.style.width = obj.w;
  div.style.height = obj.h;
  document.getElementById("main").appendChild(div);
}
}

populate(a);
populate(b);
populate(c);
populate(d);
