let precioProcesador = 14000
let precioMother = 21000
let precioRam = 10000
let precioPlacaDeVideo = 60000
let precioDiscoRigido = 23000
let precioFuente = 22000
let precioGabinete = 18000
let total = 0

function armarPc(){
    let respuesta = parseInt(prompt(`
    Que desea comprar para armar su pc? 💻
    1-Procesador
    2-Mother
    3-Memoria Ram 8gb
    4-Placa de Video 2Gb
    5-Disco Rigido de 1T
    6-Fuente de Alimentacion 600W
    7-Gabinete
    `))
    if(respuesta){
        mostrarPrecioYSumar(respuesta)
        let seguir = confirm("Desea seguir comprando?")
        if(seguir){
            armarPc()
            return
        }else{
            mostrarPrecioYSumar(8)
        }
        let pagoTarjeta = confirm("Desea abonar con tarjeta de credito? 💳 Interes:15%")
        if(pagoTarjeta){
            let numeroCuotas = parseInt(prompt("En cuantas cuotas desea abonar? De 1 a 12"))
            cuotas(numeroCuotas)
        }else{
            alert(`
            Muy bien! Aguardamos su pago para poder realizar la entrega...
            ✨ Saludos ✨
            `)
        }
    }
}

function cuotas(numeroCuotas){
    let cuota = Math.floor((total + total*0.15)/numeroCuotas)
    for(let i=1; i<=numeroCuotas; i++){
        console.log("La cuota numero "+i+" es de $"+cuota)
    }
    console.log("Su total con tarjeta de credito es de $"+ Math.floor(total + total*0.15))
}

function mostrarPrecioYSumar(respuesta){
    switch(respuesta){
        case 1:
            total += precioProcesador
            alert("Procesador te sale $" + precioProcesador)
            break
        case 2:
            total += precioMother
            alert("Mother te sale $"+ precioMother)
            break
        case 3:
            total += precioRam
            alert("Memoria Ram 8gb te sale $"+ precioRam)
            break
        case 4:
            total += precioPlacaDeVideo
            alert("Placa de Video 2Gb te sale $"+ precioPlacaDeVideo)
            break
        case 5:
            total += precioDiscoRigido
            alert("Disco Rigido de 1T te sale $"+ precioDiscoRigido)
            break
        case 6:
            total += precioFuente
            alert("Fuente de Alimentacion 600W te sale $"+ precioFuente)
            break
        case 7:
            total += precioGabinete
            alert("Gabinete te sale $"+ precioGabinete)
            break
        case 8:
            alert("El total de su compra es: $"+ total)
            break
    }
}