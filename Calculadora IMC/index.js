function  VerIMc(){
    let nomeDoUsuario = document.getElementById('nome').value;
    let pesoDoUsuario =parseFloat( document.getElementById('peso').value);
    let alturaDoUsuario = parseFloat(document.getElementById('altura').value) ;
    let imc = pesoDoUsuario / alturaDoUsuario **2;
    let resultado = document.getElementById('resultado');

    if (!nomeDoUsuario) {
        resultado.innerHTML = "Por favor, insira seu nome.";
        return;
    }
    if (isNaN(pesoDoUsuario) || pesoDoUsuario <= 0) {
        resultado.innerHTML = "Por favor, insira um valor numérico válido para o peso.";
        return;
    }
    if (isNaN(alturaDoUsuario) || alturaDoUsuario <= 0) {
        resultado.innerHTML = "Por favor, insira um valor numérico válido para a altura.";
        return;
    }

        
    if(imc < 18.5){
        resultado.innerHTML = `${nomeDoUsuario}, seu imc é ${imc.toFixed(1)} e você esta abaixo do peso`;
    } else if (imc >= 18.5 && imc <= 24.9){
        resultado.innerHTML = `${nomeDoUsuario}, seu imc é ${imc.toFixed(1)} e você está com peso normal`;
        } else if(imc >= 25 && imc <= 29.9){
        resultado.innerHTML = `${nomeDoUsuario}, seu imc é ${imc.toFixed(1)} e você está com sobrepeso`;
        } else if(imc >= 30 && imc <= 34.9){
        resultado.innerHTML = `${nomeDoUsuario}, seu imc é ${imc.toFixed(1)} e você está com Obesidade grau 1`;
        } else if(imc >= 35 && imc <= 39.9 ){
        resultado.innerHTML = `${nomeDoUsuario}, seu imc é ${imc.toFixed(1)} e você está com Obesidade grau 2 `;
        } else {
        resultado.innerHTML = `${nomeDoUsuario}, seu imc é ${imc.toFixed(1)} e você está com Obesidade grau 3 `;
    }
    

    
    
}

