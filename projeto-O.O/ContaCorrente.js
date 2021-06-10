import { Cliente } from "./Cliente.js";

export class ContaCorrente{

    static numeroDeContas = 0;

    set cliente(novoCliente){
        //se meu novo valor for uma instancia de cliente for verdadeiro faça o bloco dentro do if
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, saldo, cliente){
        this.agencia = agencia;
        this._saldo = saldo;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas++;
    }

    sacar(valor){
        if(valor > this._saldo){
            const msgAlert = `Não podemos efetuar o saque pois ${valor} é maior que seu saldo atual de ${this._saldo}`;
            return console.log(msgAlert);  
        }
        
        this._saldo -= valor;
        console.log(`sacamento efetuado com sucesso! Agora seu saldo é de ${this._saldo}`);
        return valor;

    }

    depositar(valor){
        if(valor < 0){
            const msgAlert = `Não podemos efetuar o depósito pois ${valor} é menor ou igual a 0`
            return console.log(msgAlert);
        }
        this._saldo += valor;
        console.log(`Deposito efetuado com sucesso! Agora seu saldo é de ${this._saldo}`);
    }

    transferir(valor, conta){

        if(valor <= 0 ){
            const msgAlert = `Não podemos transferir valores abaixo ou igual à 0`;
            return console.log(msgAlert);
        }

        const ValorTransferir = this.sacar(valor);
        console.log(`Transferencia para a conta de ${conta.cliente.nome} no valor de ${valor} com sucesso!`);
        conta.depositar(ValorTransferir);
        
    }
}