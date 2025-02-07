<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculadora de IMC</title>
  <style>

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    button {
      padding: 20px 40px; 
      font-size: 16px;
    }
  </style>
</head>
<body>

<div class="container">
  <button onclick="calcularIMC()">Calcular IMC</button>
</div>

<script>
function calcularIMC() {
    let validador = prompt("Você quer iniciar o programa? [S/N]");
    while (validador === "S") {
        let peso = prompt("Digite seu peso");
        let altura = prompt("Digite sua altura (utilize o '.' para separar o metro dos centímetros)");
        const imc = peso / (altura * altura);
        let situacao = "vazia";
        switch (true) {
            case imc < 18.5:
                situacao = "Abaixo do Peso";
                break;
            case imc <= 24.9:
                situacao = "Peso Normal";
                break;
            case imc <= 29.9:
                situacao = "Sobrepeso";
                break;
            case imc <= 34.9:
                situacao = "Obesidade";
                break;
            case imc < 39.9:
                situacao = "Obesidade Grau II";
                break;
            case imc >= 40:
                situacao = "Obesidade Grau III";
                break;
            default:
                "Opção invalida"
                validador==="N"
        }

        alert("Seu IMC é de " + imc.toFixed(1) + ", logo você se encontra no estado de " + situacao);
        validador = prompt("Deseja continuar? [S/N]");
    }
    if (validador === "N") {
        alert("Fechando o programa...");
    }
}
</script>

</body>
</html>
