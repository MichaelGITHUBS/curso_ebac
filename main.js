const form = document.getElementById("form-deposito");
const baseInput = document.getElementById("base");
const alturaInput = document.getElementById("altura");
const resultadoDiv = document.getElementById("resultado");


function calculaArea(base, altura) {
    return base * altura;
}


form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    
    const base = parseFloat(baseInput.value);
    const altura = parseFloat(alturaInput.value);

    
    if (isNaN(base) || isNaN(altura)) {
        resultadoDiv.innerHTML = "Por favor, insira valores válidos para base e altura.";
    } else {
        
        const area = calculaArea(base, altura);
        resultadoDiv.innerHTML = `A área do triângulo é: ${area}`;
    }

    if (base < altura){
        resultadoDiv.innerHTML = "O número correspondente da Base precisa ser maior que a da Altura.";

    }  else{

        resultadoDiv.innerHTML = "O formulário é valído"
    }
});
