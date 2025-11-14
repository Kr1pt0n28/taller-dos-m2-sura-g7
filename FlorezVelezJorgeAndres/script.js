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

/*
    Ejercicio 4: Productos en Stock (filter con objetos)
*/

let productos = [{nombre: "Camisa", stock: 10}, {nombre: "Zapatos", stock: 0}, {nombre: "Pantalón", stock: 5}];
let enStock = productos.filter((productos)=>productos.stock > 0);
console.log(productos);
console.log(enStock); 

/*
    Ejercicio 5: Suma Total de Ventas (reduce)
*/

let ventas = [150, 300, 100, 50];
let totalVentas = ventas.reduce((acum, venta) => acum + venta, 0);
console.log(ventas);
console.log("Total de ventas es: "+ totalVentas);

/*
    Ejercicio 6: Aplanar un Arreglo (reduce)
*/

let grupos = [["Ana", "Luis"], ["Maria", "Juan"], ["Pedro"]];
let listaPlana = grupos.reduce((acum,grupos)=> acum.concat(grupos), []);
console.log(listaPlana);    

/*
    Ejercicio 7: Crear una Copia (slice)
*/

let original = ["A", "B", "C"];
let copia = original.slice(0,2);
copia.push("D");
console.log(original);
console.log(copia);


/*
    Ejercicio 8: Obtener el Podio (slice)
*/

let competidores = ["Oro", "Plata", "Bronce", "Mención 1", "Mención 2"];
let podio = competidores.slice(0, 3);
console.log(competidores);
console.log(podio); 