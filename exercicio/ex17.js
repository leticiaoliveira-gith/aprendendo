function palindromeLocator(str) {
 
  let invertida = str.split("").reverse().join("");

  if (str !== invertida) {
    return "none";
  }


  let tamanho = str.length;
  let meio = Math.floor(tamanho / 2);

  // 4. Verifica se o comprimento é ímpar ou par
  if (tamanho % 2 !== 0) {
    
    return str[meio];
  } else {
    
    return str[meio - 1] + str[meio];
  }
}