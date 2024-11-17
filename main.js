// Notas del alumno
const notas = [6, 8, 9, 2, 5, 10];

// calcula la suma
function sumaNotas(notasSumadas) {
  let suma = 0;
  for (let i = 0; i < notasSumadas.length; i++) {
    suma += notasSumadas[i];
  
  }
  console.log("la suma de las notas es:", suma);
  return suma;
}

// Calcula el promedio de las notas
function promedio(notas) {
  let sumaTotal = sumaNotas(notas); 
  let notasPromedio = sumaTotal / notas.length;
  return notasPromedio;
}

// Llamadas a las funciones y mostrar resultados
console.log("El promedio de las notas es:", promedio(notas));
