export class Cliente {

    get cpf() {
        return this._cpf;
    }

    get nome(){
        return this._nome;
    }

    //A inicialização de atributos é a principal responsabilidade do construtor.
    constructor(nome, cpf) {
        this._nome = nome;
        this._cpf = cpf;
    }

}