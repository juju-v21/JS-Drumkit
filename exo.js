/*
var AddKey = document.getElementsByClassName("key");
var audio = document.getElementsByTagName("audio");

window.addEventListener('keydown', function(keyEvent){
if (keyEvent.code === "KeyQ"); {
    audio[0].play()
}
false});
*/

/*var audio = document.getElementsByTagName("audio")
window.addEventListener('keydown', function(a){
    if (KeyboardEvent === 65){
        audio.play()
    }
})*/


/*                 en haut solution qui ne marche pas                    */



 

/*                 solution de john                                     */

// const audioA = document.getElementsByTagName("audio")
// const body = document.getElementsByTagName("body")[0]

// Array.prototype.forEach.call(audioA, element =>
// element.addEventListener("click", function (event)
// { var lettre = event.target.textContent;
//     document.getElementsById(lettre).play()

// }))

// body.addEventListener("keydown", function(event){
//     var key = event.key.toUpperCase()
//     document.getElementById(key).play()
// });

// document.addEventListener("transitionend", () => {
//     for (var i = 0; i < myDivs.length; i++) {
//       myDivs[i].classList.remove("playing");
//     }
//   });
// });


                           

let myDivs = document.querySelectorAll(".key");

document.onkeydown = function (e) {
  e = e || window.event;
  var key = e.which || e.keyCode;
  if (key === 65) {
    document.getElementById("A").play();
    myDivs[0].classList.add("playing");
  } else if (key === 83) {
    document.getElementById("S").play();
    myDivs[1].classList.add("playing");
  } else if (key === 68) {
    document.getElementById("D").play();
    myDivs[2].classList.add("playing");
  } else if (key === 70) {
    document.getElementById("F").play();
    myDivs[3].classList.add("playing");
  } else if (key === 71) {
    document.getElementById("G").play();
    myDivs[4].classList.add("playing");
  } else if (key === 72) {
    document.getElementById("H").play();
    myDivs[5].classList.add("playing");
  } else if (key === 74) {
    document.getElementById("J").play();
    myDivs[6].classList.add("playing");
  } else if (key === 75) {
    document.getElementById("K").play();
    myDivs[7].classList.add("playing");
  } else if (key === 76) {
    document.getElementById("L").play();
    myDivs[8].classList.add("playing");
  }
};

document.addEventListener("transitionend", () => {
  for (var i = 0; i < myDivs.length; i++) {
    myDivs[i].classList.remove("playing");
  }
});
