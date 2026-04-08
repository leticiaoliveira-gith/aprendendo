function fibonacci(n) {
  if (n <= 1) return n; // Casos base: F(0)=0, F(1)=1

  let anterior = 0;
  let atual = 1;

  // Começamos do 2 pois 0 e 1 já tratamos acima
  for (let x = 2; x <= n; x++) {
    let proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  return atual;
}