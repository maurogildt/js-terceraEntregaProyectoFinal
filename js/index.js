const products = [{
    title: "Procesador",
    price: 14000,
    id: 1
}, {
    title: "Mother",
    price: 21000,
    id: 2
}, {
    title: "Memoria Ram 8gb",
    price: 10000,
    id: 3
}, {
    title: "Placa de Video 2Gb",
    price: 60000,
    id: 4
}, {
    title: "Disco Rigido de 1T",
    price: 23000,
    id: 5
}, {
    title: "Fuente de Alimentacion 600W",
    price: 22000,
    id: 6
}, {
    title: "Gabinete",
    price: 18000,
    id: 7
}]
let indexProducts = 0
let total = 0
const cart = []

function armarPc() {
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
        addCart(answer)
        indexProducts += 1
        alert(cart[indexProducts - 1].title + " te sale $ " + cart[indexProducts - 1].price)
        let continueBuy = confirm("Desea seguir comprando?")
        if (continueBuy) {
            armarPc()
            return
        } else {
            showCart(cart)
        }
        let cardPayment = confirm("Desea abonar con tarjeta de credito? 💳 Interes:15%")
        if(cardPayment){
            let numQuotas = parseInt(prompt("En cuantas cuotas desea abonar? De 1 a 12"))
            quota(numQuotas)
        }else{
            alert(`
            Muy bien! Aguardamos su pago para poder realizar la entrega...
            ✨ Saludos ✨
            `)
        }
    }
}

function addCart(answer) {
    const product = products.find((product) => product.id == answer)
    cart.push(product)
}

function showCart(cart) {
    let textCart = "Carrito 🛒:\n\n"
    cart.forEach(function (item) {
        let titleProduct = item.title
        let priceProduct = item.price
        total += priceProduct
        textCart += titleProduct + " - $" + priceProduct + "\n"
    })
    textCart += "\n Su total es: $" + total
    alert(textCart)
}

function quota(numQuotas) {
    let quota = Math.floor((total + total * 0.15) / numQuotas)
    let textQuota = "Sus cuotas con tarjeta de credito son: \n\n"
    for (let i = 1; i <= numQuotas; i++) {
        textQuota += "Cuota numero " + i + " es de $" + quota+ "\n"
    }
    textQuota += "\n Su total con tarjeta de credito es de $" + Math.floor(total + total * 0.15)
    alert(textQuota)
}

armarPc()