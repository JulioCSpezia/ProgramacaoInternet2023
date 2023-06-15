function calcular(){
    const resp = document.querySelector("h3")

    let inValor = document.getElementById("inValor")
    let valor = Number(inValor.value)
    let resto = 0
    let tempo = 0


    if(valor < 1){
        resp.innerText = "Valor insuficiente"

    }else{
        
        if(valor >= 3){
            resto = valor%3
            let vezes_3_reais = (valor - resto)/3
            tempo = vezes_3_reais*120
            valor = resto
        }

        if(valor >= 1.75){
            resto = resto%1.75
            let vezes_1_75 = (valor - resto)/1.75
            tempo += vezes_1_75*60
            valor = resto

        }

        if(valor >= 1){
            resto = resto%1
            let vezes_1_reais = (valor - resto)/1
            tempo += vezes_1_reais*30
            valor = resto

        }

       resp.innerText = `Tempo: ${tempo} minutos.\nTroco: R$${resto.toFixed(2)}.`
    }
}