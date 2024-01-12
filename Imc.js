let validador=prompt("Você quer iniciar o programa?[S/N]")
while(validador==="S"){

let peso= prompt("Digite seu peso")
let altura= prompt("Digite sua altura (utilizze o '.' para separar o metro dos centímetros)")
const imc= peso/(altura*altura)
situacao="vazia"
    switch(true){
        case imc<18.5:
            situacao=("Abaixo do Peso ")
        break
        case imc<=24.9:
             situacao=("Peso Normal ")
         break
        case imc<=29.9:
        situacao=("Sobrepeso")
         break
        case imc<=34.9:
         situacao=("Obesidade ")
        break
        case imc<39.9:
            situacao=("Obesidade Grau II  ")
        break
        case imc>=40:
            situacao=("Obesidade Grau III")
        break
    }

alert("Seu Imc é de "+imc.toFixed(1)+" logo você se encontra no estado "+situacao)
validador=prompt("deseja continuar?[S/N]")
}
 if(validador==="N"){
    alert("Fechando o programa...")
 }
