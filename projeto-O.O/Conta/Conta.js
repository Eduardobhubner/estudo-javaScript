//classe abstrata, não se deve criar uma instancia diretamente dela

import { Cliente } from "./Cliente.js";

export class Conta {

    set cliente(novoCliente) {
        //se meu novo valor for uma instancia de cliente for verdadeiro faça o bloco dentro do if
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(saldo, cliente, agencia) {

        // parar o programa e gerar um erro caso alguem faça uma instancia dessa classe diretamente
        if(this.constructor == Conta){
            throw new Error("você não deveria estar instanciando essa classe diretamente, pois essa é uma classe abstrada");
        }

        this._saldo = saldo;
        this.cliente = cliente;
        this._agencia = agencia;
      
        
    }

    // metodo abstrado
    sacar(valor) {
        throw new Error("o método de sacar da conta é abstrada, sobrescreva o methodo no filho com a taxa");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa *valor;
        if (valorSacado > this._saldo) {
            const msgAlert = `Não podemos efetuar o saque pois ${valorSacado} é maior que seu saldo atual de ${this._saldo}`;
            return console.log(msgAlert);
        }

        this._saldo -= valorSacado;
        console.log(`sacamento efetuado com sucesso! Agora seu saldo é de ${this._saldo}`);
        return valorSacado;
    }



    depositar(valor) {
        if (valor < 0) {
            const msgAlert = `Não podemos efetuar o depósito pois ${valor} é menor ou igual a 0`
            return console.log(msgAlert);
        }
        this._saldo += valor;
        console.log(`Deposito efetuado com sucesso! Agora seu saldo é de ${this.saldo}`);
    }

    transferir(valor, conta) {

        if (valor > this._saldo) {
            const msgAlert = `Seu Saldo de ${this.saldo} é menor do que ${valor}(valor de transferência)`;
            return console.log(msgAlert);
        }

        const ValorTransferir = this.sacar(valor);
        console.log(`Transferencia para a ${conta.cliente.nome} no valor de ${valor} com sucesso!`);
        conta.depositar(ValorTransferir);

    }
}