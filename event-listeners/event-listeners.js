var images = [
	    "./imgs/download(1).jpeg",
        "./imgs/download(2).jpeg",
        "./imgs/images.jpeg",
        "./imgs/images(2).jpeg",
        "./imgs/dog.jpg",

]

var pictures = ['./imgs/dog.jpg'];
var currentIndex = 0;

function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
}


 document.getElementsByTagName("img")[0].addEventListener("click" , function(event){
 	alert("click the button");
	showNextPicture()

})


