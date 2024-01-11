let num = prompt(
  "Digite 1 para c° em f°\nDigite 2 para f° em c°\nDigite 3 para c° em k°\nDigite 4 para k° em c°\nDigite 5 para k° em f°\nDigite 6 para f° em k°"
);

if (num == 1) {
  let c = prompt("Digite a temperatura em Celsius");
  let f = Number(1.8 * c) + 32;
  alert(f);
}

if (num == 2) {
  let f = prompt("Digite a temperatura em Fahrenheit");
  let c = (Number(f) - 32) / 1.8;
  alert(c);
}

if (num == 3) {
  let c = prompt("Digite a temperatura em Celsius");
  let k = Number(c) + 273;
  alert(k);
}

if (num == 4) {
  let k = prompt("Digite a temperatura em Kelvin");
  let c = Number(k) - 273;
  alert(c);
}

if (num == 5) {
  let k = prompt("Digite a temperatura em Kelvin");
  let f = Number(k - 273) * 1.8 + 32;
  alert(f);
}

if (num == 6) {
  let f = prompt("Digite a temperatura em Fahrenheit");
  let k = (Number(f) - 32) * (5 / 9) + 273;
  alert(k);
}
