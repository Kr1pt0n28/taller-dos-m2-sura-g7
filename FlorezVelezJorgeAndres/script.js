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

/*
    Ejercicio 9: Unir Equipos (concat)
*/

let equipoDev = ["Ana", "Juan"];
let equipoQA = ["Carlos", "Maria"];

let equipoCompleto = equipoDev.concat(equipoQA);
console.log(equipoDev);
console.log(equipoQA);
console.log(equipoCompleto);


/*
    Ejercicio 10: Añadir al Carrito (concat - Inmutable)
*/

let carrito = ["Manzana"];
let nuevoCarrito = carrito.concat("Pera");
console.log(carrito);
console.log(nuevoCarrito);

/*
    Ejercicio 11: Verificar Permiso (includes)
*/

let roles = ["USER", "EDITOR"];
let tieneRol= roles.includes("ADMIN" && "EDITOR");
console.log("Tiene rol ADMIN: " + tieneRol);
console.log("Tiene rol EDITOR: " + tieneRol);

/*
    Ejercicio 12: Encontrar Usuario (find)
*/

let usuarios = [{id: 101, nombre: "Ana"}, {id: 102, nombre: "Luis"}, {id: 103, nombre: "Carlos"}];
let usuarioEncontrado = usuarios.find((usuario) => usuario.id === 102);
console.log(usuarios);
console.log(usuarioEncontrado);

/*
    Ejercicio 13: Ordenar sin Mutar (Copia + sort)
*/

let invitados = ["Zapata", "Alvarez", "Gomez", "Bernal"];
let invitadosOrdenados = invitados.slice().sort();
console.log(invitados);
console.log(invitadosOrdenados);

/*
    Ejercicio 14: Invertir sin Mutar (Copia + reverse)
*/

let receta = ["Paso 1", "Paso 2", "Paso 3"];
let recetaInvertida = receta.slice().reverse();
console.log(receta);
console.log(recetaInvertida);

/*
    Ejercicio 15: Eliminar sin Mutar (filter)
*/

let fila = ["Ana", "Luis", "Carlos", "Maria"];
let nuevaFila = fila.filter((nombre) => nombre !== "Luis");
console.log(fila);
console.log(nuevaFila);

/*
    Ejercicio 16: Insertar sin Mutar (slice + spread)
*/

let fila = ["Ana", "Luis", "Carlos", "Maria"];
let nuevaFilaJorge = [...fila.slice(0,2), "Jorge", ...fila.slice(2)];
console.log(fila);
console.log(nuevaFilaJorge);    

/*
    Ejercicio 17: Reemplazar sin Mutar (map)
*/

let tablero = ["X", "O", "X"];
let nuevoTablero = tablero.map((valor, indice) => indice === 1 ? "X" : valor);
console.log(tablero);
console.log(nuevoTablero);

/*
    Ejercicio 18: Combo (filter y map)
*/

let productos = [{nombre: "Papas", precio: 2}, {nombre: "Carne", precio: 15}, {nombre: "Leche", precio: 3}];
let productosBaratos = productos.filter((producto) => producto.precio < 5).map((producto) => producto.nombre);
console.log(productos);
console.log(productosBaratos);

/*
    Ejercicio 19: Añadir al Inicio (concat o spread)
*/

let feed = ["Noticia 1", "Noticia 2", "Noticia 3"];
let nuevoFeed = ["Noticia Urgente"].concat(feed);
console.log(feed);
console.log(nuevoFeed);