const contenedor = document.querySelector("div#contenedor.contenedor")
const buscador = document.querySelector("input#buscador.buscador")
const imgCarrito = document.querySelector("span.icono-carrito")
const contadorCarrito = document.querySelector("div#contador.contador")

function mostrarCantidadEnCarrito() {
    contadorCarrito.textContent = carrito.length
}

carrito.length > 0 && mostrarCantidadEnCarrito()


function tarjetaHTML(producto) {
    return `<div class="tarjeta">

            <div class="imagen">
                <h2>${producto.imagen}</h2>
                </div> 

            <div class="nombre">
                <p>${producto.nombre}</p>
                </div>

            <div class="importe">
                <p>$ ${producto.importe}</p>
                </div>

            <div class="comprar">
            <button class= "boton-comprar" id="${producto.codigo}">Comprar</button>
            </div>

            </div>`
}

function clickBotones() {
    const botonComprar = document.querySelectorAll("button.boton-comprar")
    botonComprar.forEach((boton) => {
        boton.addEventListener("click", () => {
            let productoTienda = arrayProductos.find((producto) => producto.codigo === parseInt(boton.id))
            carrito.push(productoTienda)
            localStorage.setItem("carritoProductos", JSON.stringify(carrito))
            console.table(carrito)
            mostrarCantidadEnCarrito()
            mensajeConfirmacion()

        })
    })
}

function cargaDeProductos(array) {
    contenedor.innerHTML = "";
    array.forEach((producto) => {
        contenedor.innerHTML += tarjetaHTML(producto)
    })
    clickBotones()
}

cargaDeProductos(arrayProductos)


buscador.addEventListener("search", () => {
    localStorage.setItem("ultimaBusqueda", buscador.value)
    const resultadoBuscador = arrayProductos.filter((producto) => producto.nombre.toLocaleLowerCase().includes(buscador.value.toLocaleLowerCase()))
    cargaDeProductos(resultadoBuscador)
}
)


function retornarTarjetaError(producto) {
    return `<div class="tarjetaError" >

                <div>
                <h2> ⚠️ ERROR EN LA PÁGINA ⚠️ </h2>
                </div> 

                <div>
                <p>Estamos trabajando para resolver el problema.</p>
                </div>

                <div>
                <p>Disculpas por las molestias. Prueba más tarde.</p>
                </div>


            </div>`
}

arrayProductos.length > 0 ? cargaDeProductos(arrayProductos) : contenedor.innerHTML = retornarTarjetaError()



const URL = "j/productos.json"

function obtenerProductos() {
    fetch (URL)
    .then((response => response.json))
    .then((data) => arrayProductos.push(...data))
    .then(() => obtenerProductos(arrayProductos))
    // .catch((error) => contenedor.innerHTML = retornarTarjetaError())

}

obtenerProductos()


