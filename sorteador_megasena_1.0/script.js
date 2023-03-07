const jogar = () => { // Função que gera os números aleatórios e retorna os números sorteados
  const quantidade = document.getElementById("quantidade"); // Correção: o ID correto do elemento é "quantidade"
  const valor = parseInt(quantidade.value); // Converte o valor do input para inteiro. Estou seguro que o valor vai funcionar pois o input só aceita números.
  if (valor >= 6 && valor <= 15) { // Correção: remoção de um '{' desnecessário
    const resultado = document.getElementById("resultado"); // Pega o elemento que vai receber os números sorteados
    resultado.innerHTML = gerarNumeros(valor).join(" - "); // Retorno da função que gera os números e retorna os números sorteados. O valor é o valor do input. O resultado é o elemento que vai receber os números sorteados.
  } else {
    alert("O valor deve estar entre 6 e 15");
  }
}

const gerarNumeros = quantidade => {
  const volante = Array(quantidade).fill(0); // Inicializa todas as posições do array com o valor 0 para ser possível fazer a verificação se o número já foi sorteado no volante.forEach((valor, indice)).
  volante.forEach((valor, indice) => { // Correção: remoção de um ')' desnecessário
    let ok = false;
    let numero = 0;
    while (!ok) { // Enquanto ok for falso, o while vai continuar rodando.
      numero = Math.floor(Math.random() * 60 + 1); // Vai gerar um número entre 1 e 60.
      ok = true;
      volante.forEach((valor2, indice2) => {
        if (valor2 === numero && indice !== indice2) { // Correção: a condição "indice !== indice2" evita que o número sorteado seja comparado com ele mesmo
          ok = false;
        }
      });
    }
    volante[indice] = numero;
  });
  const compareFn = (a, b) => a - b; // Função de comparação para ordenar os números do menor para o maior.
  volante.sort(compareFn); // Ordena os números do menor para o maior.
  return volante; // Retorna os números sorteados em forma de array.
}
