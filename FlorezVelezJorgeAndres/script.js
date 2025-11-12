/*
    Ejercicio 1: Duplicar Números (map)
*/

let puntos = [10, 20, 30, 40];
let puntosDuplicados = puntos.map((punto) => punto * 2);
console.log(puntos);
console.log(puntosDuplicados);

/*
    Ejercicio 2: Filtrar Nombres (filter)
*/

let usuarios = [{id: 1, nombre: "Ana"}, {id: 2, nombre: "Luis"}, {id: 3, nombre: "Carlos"}];
let nombres = usuarios.map((usuario) => usuario.nombre);
console.log(nombres);

/*
    Ejercicio 3: Notas Aprobadas (filter)
*/

let notas = [8, 5, 10, 3, 7];
let aprobadas = notas.filter((nota) => nota >= 6);
console.log(notas);
console.log(aprobadas);