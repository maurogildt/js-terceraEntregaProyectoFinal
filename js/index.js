class Product {
    constructor(title, price, id) {
        this.title = title
        this.price = price
        this.id = id
    }
}

const products = [
    new Product("Procesador", 14000, 1),
    new Product("Mother", 21000, 2),
    new Product("Memoria Ram 8gb", 10000, 3),
    new Product("Placa de Video 2Gb", 60000, 4),
    new Product("Disco Rigido de 1T", 23000, 5),
    new Product("Fuente de Alimentacion 600W", 22000, 6),
    new Product("Gabinete", 18000, 7)
]

class Cart {
    constructor() {
        this.products = []
        this.total = 0
    }

    addProduct(product) {
        this.products.push(product)
    }

    calculateTotal() {
        this.total = 0
        this.products.forEach((product) => {
            this.total += product.price
        })
    }

    showCart() {
        let textCart = "Carrito 🛒:\n\n"
        this.products.forEach((product) => {
            textCart += product.title + " - $" + product.price + "\n";
        })
        textCart += "\n Su total es: $" + this.total
        alert(textCart)
    }
    
    quota(numQuotas) {
        let quota = Math.floor((this.total + this.total * 0.15) / numQuotas)
        let textQuota = "Sus cuotas con tarjeta de credito son: \n\n"
        for (let i = 1; i <= numQuotas; i++) {
            textQuota += "Cuota numero " + i + " es de $" + quota + "\n"
        }
        textQuota += "\n Su total con tarjeta de credito es de $" + Math.floor(this.total + this.total * 0.15)
        alert(textQuota)
    }
}

let cart = new Cart()

function buildPc() {
    let answer = parseInt(prompt(
        `Que desea comprar para armar su pc? 💻
        1-Procesador
        2-Mother
        3-Memoria Ram 8gb
        4-Placa de Video 2Gb
        5-Disco Rigido de 1T
        6-Fuente de Alimentacion 600W
        7-Gabinete
        `))

    if (answer) {
        const product = products.find((product) => product.id === answer)
        if (product) {
            cart.addProduct(product)
            alert(product.title + " te sale $ " + product.price)
        } else {
            alert("Seleccione un producto valido")
        }

        let continueBuy = confirm("Desea seguir comprando?")
        if (continueBuy) {
            buildPc()
        } else {
            cart.calculateTotal()
            cart.showCart()
            let cardPayment = confirm("Desea abonar con tarjeta de credito? 💳 Interes:15%")
            if (cardPayment) {
                let numQuotas = parseInt(prompt("En cuantas cuotas desea abonar? De 1 a 12"))
                cart.quota(numQuotas)
            } else {
                alert(`
            Muy bien! Aguardamos su pago para poder realizar la entrega...
            ✨ Saludos ✨
            `)
            }
        }
    }
}

buildPc()