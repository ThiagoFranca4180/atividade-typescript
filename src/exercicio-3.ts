
import { Carteira,Transacao } from "./interfaces/interfaces";
import { ResultadoTransacao } from "./types/type";

class MinhaCarteira implements Carteira {
  saldo: number;
  transacoes: Transacao[];

 
  constructor() {
    this.saldo = 0;
    this.transacoes = [];
  }

  adicionarEntrada(valor: number): ResultadoTransacao {
    if (valor <= 0) {
      return {
        sucesso: false,
        mensagem: "O valor da entrada deve ser positivo.",
      };
    }
    const entrada: Transacao = { valor, tipo: "entrada", data: new Date() };
    this.transacoes.push(entrada);
    this.saldo += valor;
    return { sucesso: true, mensagem: "Entrada adicionada com sucesso." };
  }

  adicionarSaida(valor: number): ResultadoTransacao {
    if (valor <= 0) {
      return {
        sucesso: false,
        mensagem: "O valor da saída deve ser positivo.",
      };
    }
    if (this.saldo < valor) {
      return { sucesso: false, mensagem: "Saldo insuficiente para a saída." };
    }
    const saida: Transacao = { valor, tipo: "saida", data: new Date() };
    this.transacoes.push(saida);
    this.saldo -= valor;
    return { sucesso: true, mensagem: "Saída adicionada com sucesso." };
  }
}

const minhaCarteira = new MinhaCarteira();

let resultado = minhaCarteira.adicionarEntrada(350);
console.log(resultado);
console.log("Saldo atual:", minhaCarteira.saldo);

resultado = minhaCarteira.adicionarSaida(25);
console.log(resultado);
console.log("Saldo atual:", minhaCarteira.saldo);

resultado = minhaCarteira.adicionarSaida(330);
console.log(resultado);
console.log("Saldo atual:", minhaCarteira.saldo);