var X = document.getElementsByClassName("buttons");
var y = `<img  src="assets/img/422505170_354888240721056_5037664012147039753_n.jpg" alt="">
<p>Happy birthday, Zaid</p>` ;
function HideClickedButton() {

  for (let x of X) {
    if (x.style.display === "none") {
      x.style.display = "block";
    
    } else {
      x.style.display = "none";
      document.querySelector("div").innerHTML=y;
    }
  }
}

for (const button of X) {
    button.addEventListener('click', HideClickedButton);
   
}


