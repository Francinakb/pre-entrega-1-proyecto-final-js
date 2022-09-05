// en la pagina tengo una opcion (a desarrollar) de enviarnos un mail, podria loggear un usuario con un condicional 

let nuevoUsuario = prompt("Ingrese nombre de usuario")

if (nuevoUsuario == "") {
    alert("No ingresaste un nombre de usuario")
} else {
    alert("Su nuevo nombre de usuario es " + nuevoUsuario)
}

// Aplicando DOM 
// modifico el nombre de bienvenida del encabezado segun el nombre de usuario ingresado

let bienvenidaUsuario = document.querySelector("#encabezado")
bienvenidaUsuario.innerText = `Bienvenidx ${nuevoUsuario}`

// let nuevoUsuario = document.querySelector("nuevoUsuario")
// nuevoUsuario.innerText = "Bienvenido ${}"

// utilizo foreach() para iterar sobre los elementos de mi arreglo y ver la lista de productos

const nombres = [
    "Aceite sublingual Premium",
    "Aceite sublingual Royal Premium",
    "Crema corporal para dolores musculares y articulares",
    "Aceite sublingual Rojo"
]

nombres.forEach((nom) => {
    console.log(nom)
})


// creo una constante con un arreglo, con objetos dentro, donde va a haber distintos productos

const productos = [
    { nombre: "Aceite sublingual Premium", porcentajeCBD: "39,9%", contenido: "10ml", precio: 3749 },
    { nombre: "Aceite sublingual Royal Premium", porcentajeCBD: "39,9%", contenido: "30ml", precio: 6599 },
    { nombre: "Crema corporal para dolores musculares y articulares", porcentajeCBD: "39,9%", contenido: "50gr", precio: 2699 },
    { nombre: "Aceite sublingual Rojo", porcentajeCBD: "10%", contenido: "10ml", precio: 2649 }
]

// utilizo map() para poder modificar en un futuro, de ser necesario, la informacion, por ejemplo de los precios sin descuento

const precios = productos.map((el) => el.precio)
console.log(precios)

const preciosSinDescuento = productos.map((el) => {
    return {
        nombre: el.nombre,
        porcentajeCBD: el.porcentajeCBD,
        contenido: el.contenido,
        precio: el.precio * 1.25
    }
})

console.log(preciosSinDescuento)

// utilizo un find() que serviria para la busqueda de productos en el sitio 

const busqueda1 = productos.find((el) => el.nombre === "Aceite sublingual Premium")
const busqueda2 = productos.find((el) => el.nombre === "Aceite sublingual Royal Premium")
const busqueda3 = productos.find((el) => el.nombre === "Crema corporal para dolores musculares y articulares")
const busqueda4 = productos.find((el) => el.nombre === "Aceite sublingual Rojo")

// si se busca algun producto que no existe simplemente aparece undefined porque no esta en el array 

const busqueda5 = productos.find((el) => el.nombre === "Aceite sublingual para Mascotas")

console.log(busqueda1)
console.log(busqueda2)
console.log(busqueda3)
console.log(busqueda4)
console.log(busqueda5)

// creo una class con un constructor para agregar un nuevo producto

class producto {
    constructor(nombre, porcentajeCBD, contenido, precio) {
        this.nombre = nombre
        this.porcentajeCBD = porcentajeCBD
        this.contenido = contenido
        this.precio = precio
    }
}

const nuevoIngreso = new producto("Capsula fish Oil", "39,9%", "60u", 7349)

console.log(nuevoIngreso)

// Aplicando DOM
// tambien aplico queryselector para seleccionar nodo y con innerHTML modificar un parrafo

// console.dir(document.querySelector("#equipo").innerHTML)

let informacionCbd = document.querySelector("#equipo")
informacionCbd.innerHTML = `<h1 class="mb-5 fs-2">Equipo pequeño con <span class="text-success">resultados grandes.</span></h1>
<p class="fs-6">Si estas interesadx en ser parte de nuestro equipo escribinos a equipocbd@gmail.com.</p>`



