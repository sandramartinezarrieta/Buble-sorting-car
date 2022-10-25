import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    //funcion para generar la carta
    function carta() {
        // coleccion de los datos de la carta
        let palo = ["♦", "♥", "♠", "♣"];
        let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q"];

        // valores random de los datos de la carta
        let paloAleatorio = palo[Math.floor(Math.random() * palo.length)];
        let numeroaleatorio = number[Math.floor(Math.random() * number.length)];

        // generar el color rojo
        let rojo =
            paloAleatorio == "♥" || paloAleatorio == "♦" ? "text-danger" : "";
        // condicional del palo y color reducido en la linea de arriba
        // if (paloAleatorio == "♥" || paloAleatorio == "♦") {
        //   document.getElementById("paloizq").style.color = "red";
        //   document.getElementById("paloderch").style.color = "red";
        //   document.getElementById("numero").style.color = "red";
        // }

        // carga del html
        let cargahtml = `<div class="card col-1">
      <div class="palo text-left border-white ${rojo}" id="paloizq">
        ${paloAleatorio}
      </div>
      <div class="palo letra text-center border-white ${rojo}" id="numero">
        ${numeroaleatorio}
      </div>
      <div class="palo text-end border-white ${rojo}" id="paloderch">${paloAleatorio}</div>
  </div>
    </div>
    <br />
  </div>`;

        document.getElementById("cartita").innerHTML += cargahtml;

        return [numeroreal(numeroaleatorio), paloAleatorio];
    }

    // Funcion para generar el numero real del palo cuando es a,j o k y viceversa
    function numeroreal(num) {
        num == "A" ?
            (num = 1) :
            num == "J" ?
            (num = 11) :
            num == "Q" ?
            (num = 12) :
            num == "K" ?
            (num = 13) :
            num == 1 ?
            (num = "A") :
            num == 11 ?
            (num = "J") :
            num == 12 ?
            (num = "Q") :
            num == 13 ?
            (num = "K") :
            num;
        return num;
    }

    console.log(numeroreal("K"));
    console.log(numeroreal("Q"));
    console.log(numeroreal("A"));
    console.log(numeroreal(1));
    console.log(numeroreal(11));
    console.log(numeroreal(7));
    // variable global que recibe el array de las cartas a llamar
    let arraycartas = [];

    // evento para generar la baraja por click
    document.getElementById("Baraja").addEventListener("click", function() {
        // variable para llamar al numero de cartas
        arraycartas = [];
        document.getElementById("cartita").innerHTML = "";
        let numcarta = document.getElementById("number").value;
        !numcarta ? alert("Escriba un numero de cartas") : numcarta;
        for (let i = 0; i < numcarta; i++) {
            let cart = carta();
            // ingresar el valor de las cartas en el array
            arraycartas.push(cart);
        }
        console.log(arraycartas);
    });

    // Funcion buble sort
    function bubbleSort(arr) {
        let wall = arr.length - 1; //we start the wall at the end of the array
        while (wall > 0) {
            let index = 0;
            while (index < wall) {
                //compare the adjacent positions, if the right one is bigger, we have to swap

                if (arr[index][0] > arr[index + 1][0]) {
                    let aux = arr[index];
                    arr[index] = arr[index + 1];
                    arr[index + 1] = aux;
                }
                index++;
            }
            wall--; //decrease the wall for optimization
        }
        return arr;
    }
    let arrayprueba = [7, 8, 2, 3, 4, 9, 1, 2];

    document.getElementById("ordena").addEventListener("click", function() {
        let arraynuevo = bubbleSort(arraycartas);
        console.log(arraynuevo);
        document.getElementById("cartita").innerHTML = "";

        for (let i = 0; i < arraynuevo.length; i++) {
            let rojo =
                arraynuevo[i][1] == "♥" || arraynuevo[i][1] == "♦" ? "text-danger" : "";
            let cargahtml = `<div class="card">
      <div class="palo text-left border-white ${rojo}" id="paloizq">
        ${arraynuevo[i][1]}
      </div>
      <div class="palo letra text-center border-white ${rojo}" id="numero">
        ${numeroreal(arraynuevo[i][0])}
      </div>
      <div class="palo text-end border-white ${rojo}" id="paloderch">${
        arraynuevo[i][1]
      }</div>
  </div>
    </div>
    <br />
  </div>`;

            document.getElementById("cartita").innerHTML += cargahtml;
        }
    });
};