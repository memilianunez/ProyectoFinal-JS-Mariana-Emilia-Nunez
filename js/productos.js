
const arrayProductos = [
        { imagen: "⚽️", codigo: 1, nombre: "Pelota futbol", importe: 3000 },
        { imagen: "👟", codigo: 2, nombre: "Zapatillas", importe: 11000 },
        { imagen: "🏀", codigo: 3, nombre: "Pelota basquet", importe: 4500 },
        { imagen: "🏑", codigo: 4, nombre: "Palo de hockey", importe: 7500 },
        { imagen: "🎽", codigo: 5, nombre: "Musculosa deportiva", importe: 3000 },
        { imagen: "🏈", codigo: 6, nombre: "Pelota rugby", importe: 8000 },
        { imagen: "🛼", codigo: 7, nombre: "Patines", importe: 14500 },
        { imagen: "⛸️", codigo: 8, nombre: "Patín para hielo", importe: 25500 },
        { imagen: "🥎", codigo: 9, nombre: "Pelota tenis", importe: 1500 },
        { imagen: "🥅", codigo: 10, nombre: "Arco", importe: 45000 },
        { imagen: "🥊", codigo: 11, nombre: "Guante de boxeo", importe: 6000 },
        { imagen: "🏐", codigo: 12, nombre: "Pelota de voley", importe: 5100 },
        { imagen: "🏓", codigo: 13, nombre: "Paleta Ping Pong", importe: 5000 },
        { imagen: "🛹", codigo: 14, nombre: "Patineta", importe: 9200 },
        { imagen: "🤿", codigo: 15, nombre: "Snorkel", importe: 6400 }
]


const carrito = JSON.parse(localStorage.getItem("carritoProductos")) || []


