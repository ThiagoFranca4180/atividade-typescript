// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.

import { Resultado } from "./types/type";

function cacularMedia(nota1 : number, nota2 : number):Resultado{
 let media = (nota1+nota2)/2;
 let aprovado = media>=6 


 return {media, aprovado}
}

const resultado = cacularMedia(8,6);
const status = resultado.aprovado ? "Aprovado":"Reprovado"

console.log(`Media: ${resultado.media}, Status: ${status}`)
