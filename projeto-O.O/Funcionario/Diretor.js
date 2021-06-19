import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario{

    constructor(nome, salario, cpf, senha){
        super(nome, salario, cpf, senha);
        this._bonificacao = 2;
    }
}