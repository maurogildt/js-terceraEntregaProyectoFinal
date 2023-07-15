class Product {
    constructor(title, price, id, image) {
        this.title = title
        this.price = price
        this.id = id
        this.image = image
    }
}

const products = [
    new Product("Procesador", 14000, 1, "./images/procesador.jpg"),
    new Product("Mother", 21000, 2, "./images/motherboard.jpg"),
    new Product("Memoria Ram 8gb", 10000, 3, "./images/memoriaRam.jpg"),
    new Product("Placa de Video 2Gb", 60000, 4, "./images/placaDeVideo.jpg"),
    new Product("Disco Rigido de 1T", 23000, 5, "./images/discoRigido.jpg"),
    new Product("Fuente de Alimentacion 600W", 22000, 6, "./images/fuenteDeAlimentacion.jpg"),
    new Product("Gabinete", 18000, 7, "./images/gabinete.jpg")
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
            textCart += product.title + " - $" + product.price + "\n"
        })
        textCart += "\n Su total es: $" + this.total
        alert(textCart)
    }

    clearCart() {
        this.products = []
        this.total = 0
        this.showCart()
        saveCartToLocalStorage()
    }
}

let cart = new Cart()

function generateProductHTML(product) {
    return `
        <div class="col-md-4">
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body product-details">
                    <h5 class="card-title product-title">${product.title}</h5>
                    <p class="card-text product-price">Precio: $${product.price}</p>
                    <button class="btn btn-primary product-button" id="addToCartBtn">Agregar al carrito</button>
                </div>
            </div>
        </div>
    `
  }

function loadProducts() {
    const productContainer = document.getElementById("product-container")
    products.forEach((product) => {
        const productHTML = generateProductHTML(product)
        productContainer.innerHTML += productHTML
    })
}

function addToCart(productToAdd) {
    cart.addProduct(productToAdd)
    cart.calculateTotal()
    cart.showCart()
    saveCartToLocalStorage()
}

function setupAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll('.btn.btn-primary.product-button')
    addToCartBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const productToAdd = products[index]
            addToCart(productToAdd, index)
        })
    })
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart.products));
}

function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart')
    if (cartData) {
        const savedCart = JSON.parse(cartData)
        savedCart.forEach((productData) => {
            const { title, price, id, image } = productData
            const product = new Product(title, price, id, image)
            cart.addProduct(product)
        })
        cart.calculateTotal()
        cart.showCart()
    }
}

document.getElementById("cart-button").addEventListener("click", function() {
    cart.showCart()
})
document.getElementById("clear-cart-button").addEventListener("click", function() {
    cart.clearCart()
})

loadProducts()
setupAddToCartButtons()
loadCartFromLocalStorage()
