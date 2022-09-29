//Selectores
let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";
let letras = [];
let errores = 8;
let aciertos = 0;

//Palabra Secreta
function escojerPalabraSecreta() {
  let palabra = palabras[Math.floor(Math.random() * palabras.length)];
  palabraSecreta = palabra;
  console.log(palabraSecreta);
}

function comprobarLetra(key) {
  return (key >= 65 && key <= 90) || (key >= 97 && key <= 122);
}

function errorDeLetraIncorrecta() {
  errores -= 1;
  dibujarAhorcado(errores);
}

//Iniciar Juego
function iniciarJuego() {
  document.getElementById("iniciar-juego").style.display = "none";

  escojerPalabraSecreta();
  dibujarCanvas();
  dibujarLinea();

  aciertos = palabraSecreta.length;

  document.onkeydown = (e) => {
    let letra = e.key.toUpperCase();
    let codigoLetra = e.which;

    if (comprobarLetra(codigoLetra) && errores != 0 && aciertos != 0) {
      if (palabraSecreta.includes(letra) && !letras.includes(letra)) {
        letras.push(letra);

        for (let i = 0; i < palabraSecreta.length; i++) {
          if (palabraSecreta[i] === letra) {
            escribirLetraCorrecta(i);
          }
        }

        let listaPalabraSecreta = palabraSecreta.split("");

        for (l of listaPalabraSecreta) {
          if (l == letra) {
            aciertos -= 1;
          }
        }
      } else if (!palabraSecreta.includes(letra) && !letras.includes(letra)) {
        letras.push(letra);
        errorDeLetraIncorrecta();
        escribirLetraIncorrecta(letra, errores);
      }
    }

    if (errores === 0) {
      return alert("Game Over, la palabra era: " + palabraSecreta);
    }
    if (aciertos === 0) {
      return alert("Ganaste!");
    }
  };
}
