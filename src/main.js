/** Mostrar en consola si el alumno esta aprobado o no */
const proyectosFinales = [10, 6, 3, 6, 8, 2];

for (let index = 0; index < proyectosFinales.length; index++) {
    proyectosFinales[ index ] >= 6 ?  console.log(`Aprobaste con ${proyectosFinales[ index ]}`):console.log(`Lo siento, un ${proyectosFinales[ index ]} no alcanza para aprobar`);
}
