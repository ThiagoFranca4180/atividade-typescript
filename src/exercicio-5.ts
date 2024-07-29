import { User } from "./interfaces/interfaces"; 

class UserManager {
  private users: User[] = [];

  adicionarUsuario(user: User): void {
    this.users.push(user);
  }

  listarUsuarios(): void {
    this.users.forEach((user) => {
      const salario = user.salario !== undefined ? `R$ ${user.salario}` : "N/A";
      console.log(
        `${user.nome}, ${user.idade} anos, ${user.ocupacao}, salário ${salario}`
      );
    });
  }
}

const gerenciador = new UserManager();
gerenciador.adicionarUsuario({
  nome: "Daphne",
  idade: 23,
  ocupacao: "analista de TI",
  salario: 1000,
});
gerenciador.adicionarUsuario({
  nome: "José",
  idade: 28,
  ocupacao: "analista de QA",
  salario: 2500,
});
gerenciador.adicionarUsuario({
  nome: "Ana",
  idade: 26,
  ocupacao: "UX/UI",
}); 

gerenciador.listarUsuarios();