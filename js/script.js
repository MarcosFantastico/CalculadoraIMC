const calcular = document.querySelector("input#calcular")

function imc()
{
    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
    const resultado = document.getElementById("resultado")

    if(nome !== "" && altura !== "" && peso !=="")
    {
        imc = peso/(altura**2)
        let classificacao = ''

        if(imc<18.5){
            classificacao = "Abaixo do peso"
        }
        else if(imc<25 && imc>18.5)
        {
            classificacao = "Peso ideal"
        }
        else if(imc >25 && imc < 30)
        {
            classificacao = "Levemente acima do peso"
        }
        else if(imc>30 && imc < 35)
        {
            classificacao = "Obesidade Grau I!"
        }
        else if (imc > 35 && imc < 40)
        {
            classificacao = "Obesidade Grau II(severa)"
        }
        else if ( imc > 40)
        {
            classificacao = "Obesidade Grau III(mórbida)"
        }

        resultado.textContent = `Olá ${nome}! pesando ${peso}kg e com ${altura}m de altura sua classificação é: ${classificacao}!`
    
    }
    else{
        classificacao = "Erro! Preencha todos os campos!"
        resultado.textContent = `${classificacao}`
    }
    
    
}
calcular.addEventListener('click', imc);
