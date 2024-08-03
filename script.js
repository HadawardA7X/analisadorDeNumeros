let numeros = [];
function adicionar() {
  let num = Number(document.querySelector("input#txtnum").value);
  let list = document.querySelector("select#txtlist");

  if (num == "") {
    alert("[ERRO] Digite um número!");
    return;
  } else if (num < 1 || num > 100) {
    alert("[ERRO] O número precisa estar entre 1 e 100");
    return;
  } else if (numeros.includes(num)) {
    alert("Esse número já existe!");
    return;
  } else {
    numeros.push(num);
    let item = document.createElement("option");
    item.text = `Valor ${num} adicionado.`;
    list.appendChild(item);

    res.innerHTML = "";
  }
}

function finalizar() {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  let media = soma / numeros.length;
  let maiorNumero = Math.max(...numeros);
  let menorNumero = Math.min(...numeros);
  let res = document.querySelector("div#res");
  res.innerHTML = `Ao todo, temos ${numeros.length} cadastrados <br>
  O maior valor informado foi ${maiorNumero}. <br>
  O menor valor informado foi ${menorNumero} <br>
  Somando todos os elementos temos ${soma} <br>
  A média dos elementos é ${media}`;
}
