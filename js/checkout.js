function listarProductosDelCarritoHTML(producto) {
    const productoDetalles = arrayProductos.find(p => p.codigo === producto.codigo);
    return `<tr>
        <td>${productoDetalles.imagen}</td>
        <td>${productoDetalles.nombre}</td>
        <td>$ ${productoDetalles.importe}</td>
        <td><span class="eliminar-producto" data-codigo="${producto.codigo}">🗑️</span></td>
        </tr>`
}

const tablaProductos = document.querySelector("tbody")

function armadoDelCarrito() {
    tablaProductos.innerHTML = ""
    if (carrito.length > 0) {
        carrito.forEach((producto) => {
            tablaProductos.innerHTML += listarProductosDelCarritoHTML(producto)
        })


        const eliminarProductoIcons = document.querySelectorAll(".eliminar-producto")
        eliminarProductoIcons.forEach((icon) => {
            icon.addEventListener("click", (event) => {
                const codigoProducto = parseInt(event.target.dataset.codigo)
                const productoIndex = carrito.findIndex(producto => producto.codigo === codigoProducto)

                if (productoIndex !== -1) {
                    carrito.splice(productoIndex, 1)
                    localStorage.setItem("carritoProductos", JSON.stringify(carrito))
                    // alert("Producto eliminado del carrito exitosamente")
                    mensajeEliminaciónExitosa()
                    armadoDelCarrito()
                    actualizarPrecioTotal()
                }
            })
        })
    }
}

armadoDelCarrito()

const precioFinal = document.getElementById("precio-final")

function actualizarPrecioTotal() {
    const total = carrito.reduce((accumulator, producto) => {
        const productoDetalles = arrayProductos.find(p => p.codigo === producto.codigo);
        return accumulator + productoDetalles.importe
    }, 0)

    precioFinal.textContent = total
}

actualizarPrecioTotal()





function mensajeConfirmacion() {
    Toastify({
        text: "Producto agregado al carrito exitosamente 👍 ",
        duration: 4000,
        close: true,
        gravity: "top",
        position: "center",
        style: {background: "linear-gradient(to right, #099dff, #076696)",},
    }).showToast();
}

function mensajeEliminaciónExitosa() {
    Toastify({
        text: "Producto eliminado del carrito exitosamente 🗑️",
        duration: 4000,
        close: true,
        gravity: "top",
        position: "right",
        style: {background: "linear-gradient(to right, #4709ff, #ce09ff)",},
    }).showToast();
}



const botonFinalizarCompra = document.getElementById("realizar-compra")

const cargandoDiv = document.getElementById("cargando")

botonFinalizarCompra.addEventListener("click", async () => {
    cargandoDiv.style.display = "flex"

    try {
        await new Promise(resolve => setTimeout(resolve, 1000))

        cargandoDiv.style.display = "none"

        mensajeCompraExitosa()
    } catch (error) {
        console.error("Error al procesar la compra:", error);
    }
})




function mensajeCompraExitosa() {
    Toastify({
        text: "Compra realizada con éxito. ¡Muchas gracias! 😊 ",
        duration: 2000,
        close: true,
        gravity: "top",
        position: "right",
        style: {background: "linear-gradient(to right, #00b09b, #96c93d)",},
    }).showToast();
}





