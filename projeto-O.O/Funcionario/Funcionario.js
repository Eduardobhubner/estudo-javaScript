export class Funcionario {

    get senha(){
        return this._senha;
    }
    
    constructor(nome, salario, cpf, senha){
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;
        this._senha = senha;
        this._bonificacao = 1;
    }

    autenticar(senha){
        return senha == this._senha
    }

} 