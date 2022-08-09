 var contar = [0,0,0];

// cuando carga la pagina web con js ecma6
window.onload = function(){
    var boton1 = document.querySelector("#boton1");
    var boton2 = document.querySelector("#boton2");
    var boton3 = document.querySelector("#boton3");

    boton1.addEventListener("click",contarlikes1,false);
    boton2.addEventListener("click",contarlikes2,false);
    boton3.addEventListener("click",contarlikes3,false);

}

function contarlikes1(){
    //  var counter1 = document.querySelector("#counter1");
    var counter1 = document.querySelector("#counter1");
     contar[0]++;
     counter1.innerText=contar[0] + " Like(s)";
 }

function contarlikes2(){
    var counter2 = document.querySelector("#counter2");
    contar[1]++;
    counter2.innerText=contar[1] + " Like(s)";;
}

function contarlikes3(){
    var counter3 = document.querySelector("#counter3");
    contar[2]++;
    counter3.innerText=contar[2] + " Like(s)";;
}