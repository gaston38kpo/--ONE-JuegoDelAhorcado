function dibujarCanvas() {
  tablero.lineWidth = 8;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#0A3871";

  // tablero.fillRect(0, 0, 1200, 860);
  tablero.fillRect(0, 0, 768, 800);
  tablero.beginPath();
  // tablero.moveTo(650, 500);
  // tablero.lineTo(900, 500);
  tablero.moveTo(768 * (1 / 3), 400);
  tablero.lineTo(768 * (2 / 3), 400);
  tablero.stroke();
  tablero.closePath();
}

function dibujarLinea() {
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#0A3871";

  let anchura = 600 / palabraSecreta.length;

  for (let i = 0; i < palabraSecreta.length; i++) {
    tablero.moveTo(150 + anchura * i, 540);
    tablero.lineTo(200 + anchura * i, 540);
  }
  tablero.stroke();
  tablero.closePath();
}

function escribirLetraCorrecta(index) {
  tablero.font = "bold 52px Inter";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#0A3871";

  let anchura = 600 / palabraSecreta.length;
  tablero.fillText(palabraSecreta[index], 155 + anchura * index, 520);  
}

function escribirLetraIncorrecta(letra, errorsLeft) {
  tablero.font = "bold 40px Inter";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#0A3871";

  tablero.fillText(letra, 145 + 40 * (10 - errorsLeft), 610, 40);
}

function dibujarAhorcado(errores) {
  tablero.lineWidth = 8;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#0A3871";

  console.log(errores);
  if (errores == 7) {
    tablero.moveTo(768 / 2, 400);
    tablero.lineTo(768 / 2, 200);
  }
  if (errores == 6) {
    tablero.lineTo(768 * (2 / 3), 200);
    tablero.lineTo(768 * (2 / 3), 220);
  }
  if (errores == 5) {
    tablero.arc(
      768 * (2 / 3),
      220 + 20,
      20,
      (Math.PI / 180) * 270,
      (Math.PI / 180) * -90,
      true      
    );
  }
  if (errores == 4) {
    tablero.moveTo(768 * (2 / 3), 260);
    tablero.lineTo(768 * (2 / 3), 330);
  }
  if (errores == 3) {
    tablero.moveTo(768 * (2 / 3), 260);
    tablero.lineTo(768 * (2 / 3) - 20, 310);
  }
  if (errores == 2) {
    tablero.moveTo(768 * (2 / 3), 260);
    tablero.lineTo(768 * (2 / 3) + 20, 310);
  }
  if (errores == 1) {
    tablero.moveTo(768 * (2 / 3), 330);
    tablero.lineTo(768 * (2 / 3) - 20, 370);
  }
  if (errores == 0) {
    tablero.moveTo(768 * (2 / 3), 330);
    tablero.lineTo(768 * (2 / 3) + 20, 370);
  }


  tablero.stroke();
}
