function tipoTriangulo(){

    const resp = document.querySelector("h3")
    const inLado1 = document.getElementById("inLado1")
    const inLado2 = document.getElementById("inLado2")
    const inLado3 = document.getElementById("inLado3")

    const lado1 = Number(inLado1.value)
    const lado2 = Number(inLado2.value)
    const lado3 = Number(inLado3.value)

    if((lado1 + lado2 > lado3) && (lado1 + lado3 > lado2) && (lado3 + lado2 > lado1)){
        if(lado1==lado2 && lado2==lado3){
            resp.innerText = "Equilátero"
        }
        else if(lado1==lado2 && lado2!=lado3 || lado1==lado3 && lado3!=lado2 || lado3==lado2 && lado2!=lado1){
            resp.innerText = "Isósceles"
        }
        else if(lado1!=lado2 && lado2!=lado3 && lado1!=lado3){
            resp.innerText = "Escaleno"
        }
    }
}