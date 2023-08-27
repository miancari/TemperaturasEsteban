// Arreglo para almacenar las temperaturas
let temperatures = [];


// Capturar temperaturas
function enviar() {
  
  if (temperatures.length < 6) {
    const grados = document.getElementById("grados").value;
    temperatures.push(parseFloat(grados));
    console.log(temperatures);
    document.getElementById("grados").value = "";
  }

  // Calcular promedios
  
  if (temperatures.length === 6) {
    let temperaturaMañana = (temperatures[0] + temperatures[1]) / 2;
      if (temperaturaMañana >= 9 && temperaturaMañana <= 17) {
        console.log(`El promedio de temperatura de ${temperaturaMañana} grados en la mañana es confiable`)
      } else {
        console.log(`el promedio de temperatura de ${temperaturaMañana} grados en la mañana no es confiable`)
      }
    let temperaturasTarde = (temperatures[2] + temperatures[3]) / 2;
    if (temperaturasTarde >= 9 && temperaturasTarde <= 17) {
      console.log(`El promedio de temperatura de ${temperaturasTarde} grados en la mañana es confiable`)
    } else {
      console.log(`el promedio de temperatura de ${temperaturasTarde} grados en la mañana no es confiable`)
    }
    let temperaturasNoche = (temperatures[4] + temperatures[5]) / 2;
    if (temperaturasNoche >= 9 && temperaturasNoche <= 17) {
      console.log(`El promedio de temperatura de ${temperaturasNoche} grados en la mañana es confiable`)
    } else {
      console.log(`el promedio de temperatura de ${temperaturasNoche} grados en la mañana no es confiable`)
    }
    // Mostrar resultados
    console.log(`Promedio de temperaturas en la mañana: ${temperaturaMañana}`);
    console.log(`Promedio de temperaturas en la tarde: ${temperaturasTarde}`);
    console.log(`Promedio de temperaturas en la noche: ${temperaturasNoche}`);
  }

}
