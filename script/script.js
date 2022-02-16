let element = document.getElementById('output')


function zero() {    
    if(element.innerHTML === "0") {
        element.innerHTML = ""
    }
}

// affiche les nombres
function getValue(myValue) {
    zero();
    element.innerHTML += myValue
  }

function resultat() {
    zero()
     var equation = document.getElementById("output").innerHTML;
     var solved = eval(equation);
     document.getElementById('output').innerHTML = solved;
}

function clearCalc() {
    document.getElementById("output").innerHTML = "0";
}

function magie() {
    const magie = document.querySelector(".center");
    magie.style.transform = "rotate(180deg)";
    magie.style.transition = "transform .8s ease-in-out"
}


  // affichage curseur en rond
function cercle() {
    const cercle = document.querySelector('.cercle');        
    document.addEventListener('mousemove', (e) => {
        cercle.style.left = `${e.pageX}px`;
        cercle.style.top = `${e.pageY}px`;
    })
}

cercle()