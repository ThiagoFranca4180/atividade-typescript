import { Produto } from "./interfaces/interfaces"; 

class ProdutoManager {
  private produtos: Produto[] = [];
  private currentId: number = 1;

  adicionarProduto(nome: string, preco: number): void {
    const novoProduto: Produto = { id: this.currentId++, nome, preco };
    this.produtos.push(novoProduto);
    console.log(`Produto adicionado: ${JSON.stringify(novoProduto)}`);
  }

  listarProdutos(): void {
    console.log("Lista de Produtos:");
    this.produtos.forEach((produto) => {
      console.log(
        `ID: ${produto.id}, Nome: ${produto.nome}, Preço: ${produto.preco}`
      );
    });
  }

  excluirProduto(id: number): void {
    const index = this.produtos.findIndex((produto) => produto.id === id);
    if (index !== -1) {
      const produtoExcluido = this.produtos.splice(index, 1)[0];
      console.log(`Produto excluído: ${JSON.stringify(produtoExcluido)}`);
    } else {
      console.log(`Produto com ID ${id} não encontrado.`);
    }
  }
}

const gerenciador = new ProdutoManager();
gerenciador.adicionarProduto("Produto 1", 50.0);
gerenciador.adicionarProduto("Produto 2", 20.0);
gerenciador.listarProdutos();
gerenciador.excluirProduto(1);
gerenciador.listarProdutos();