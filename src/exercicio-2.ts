// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

import { CalculoMedia2 } from "./types/type";





function calcularMediaPonderada(notasPesos: CalculoMedia2[]): string {
  let somaNotasPonderadas = 0;
  const numeroNotas = notasPesos.length;

  for (const np of notasPesos) {
    somaNotasPonderadas += np.nota * np.peso;
  }

  const mediaPonderada = somaNotasPonderadas / numeroNotas;
  const expressao = notasPesos
    .map((np, index) => `(N${index + 1}*P${index + 1})`)
    .join(' + ');

  return `${expressao} / ${numeroNotas} = ${mediaPonderada.toFixed(2)}`;
}


const notasPesos1: CalculoMedia2[] = [
  { nota: 9, peso: 2 },
  { nota: 6, peso: 3 }
];

const notasPesos2: CalculoMedia2[] = [
  { nota: 5, peso: 2 },
  { nota: 9, peso: 3 },
  { nota: 8, peso: 4 }
];

const resultado1 = calcularMediaPonderada(notasPesos1);
const resultado2 = calcularMediaPonderada(notasPesos2);

console.log(`Resultado: ${resultado1}`);
console.log(`Resultado: ${resultado2}`);