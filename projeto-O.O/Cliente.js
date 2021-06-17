export class Cliente {

    get cpf() {
        return this._cpf;
    }

    //A inicialização de atributos é a principal responsabilidade do construtor.
    constructor(nome, cpf) {
        this._nome = nome;
        this._cpf = cpf;
    }

}