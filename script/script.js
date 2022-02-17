//Faire un tableau des opérateurs, ne pas laisser la possibilité à l'user de faire appel à plusieurs opérateurs 
// sauf s'il s'agit d'un calcul supplémentaires
// Le undifined doit renvoyer "Erreur"

const operators = ['+','/','-','*']

let element = document.getElementById('output')

function addition() {
    
}

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

  // Evite le 0.1 + 0.2 = 0.03000000000004
  function strip(number) {
    return (parseFloat(number.toPrecision(8)));
}

function resultat() {
    zero()
     var equation = document.getElementById("output").innerHTML;
     var solved = eval(equation);
     document.getElementById('output').innerHTML = strip(solved);
}

function clearCalc() {
    document.getElementById("output").innerHTML = "0";
}

function magie() {
    const magie = document.querySelector(".center");
    magie.style.transition = "transform .8s ease-in-out"
    magie.classList.toggle("rotatemage");
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