let peso = document.querySelector(".peso");
let altura = document.querySelector(".altura");
const botao = document.querySelector(".enviar");
let resultado = document.querySelector(".resultado");
let resultadoErrado = document.querySelector(".resultado-errado");

botao.addEventListener("click", function(e){
    e.preventDefault();
    console.log(peso.value);
    console.log(altura.value);
    let calculo = (peso.value)/(altura.value*altura.value);
    calculo = calculo.toFixed(2);
    console.log(`Seu IMC é de ${calculo}`);


    if(peso.value == 0 || altura.value == 0){
        resultadoErrado.innerHTML = `Por favor, digite algum número nos campos solicitados.`
        resultado.innerHTML = `O seu IMC é de: `
    }
    else{        
        resultado.innerHTML = `O seu IMC é de: ${calculo}`
        resultadoErrado.innerHTML = "";
    }
});