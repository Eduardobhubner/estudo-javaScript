import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    static numeroDeContas = 0;

    constructor(saldo, cliente, agencia) {
        super(saldo, cliente, agencia);
        ContaCorrente.numeroDeContas++;
    }

    // sobrescrevendo o comportamento de sacar de Conta.js
    sacar(valor) {

        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }

}