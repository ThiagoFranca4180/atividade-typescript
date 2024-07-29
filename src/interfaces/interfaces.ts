export interface Transacao {
    valor: number;
    tipo: "entrada" | "saida";
    data: Date;
  }
  
  export interface Carteira {
    saldo: number;
    transacoes: Transacao[];
  }
  
  export interface Produto {
    id: number;
    nome: string;
    preco: number;
  }
  
  export interface User {
    nome: string;
    idade: number;
    ocupacao: string;
    salario?: number;
  }
  
  export interface Diretor {
    nome: string;
    idade: number;
    salario?: number;
    nivelComissionamento: number;
  }
  
  export type EmpresaMembro = User | Diretor;