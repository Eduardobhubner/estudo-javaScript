//2021-06-09 Ainda não existe no JS uma maneira formal de determinar um atributo privado a classe, já se fala sobre usar '#' antes(ex: #nome), porem ainda não foi solitificado 100% no mercado
//hoje para falar que um atributo da classe é privada usados '_' antes(ex: _nome), porem dessa forma é apenas uma boa prática, ainda podendo alterar o valor mesmo fora da classe 

import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { ContaSalario } from './ContaSalario.js';


const cliente1 = new Cliente('Eduardo', 1122233309);

const cliente1Corrente = new ContaCorrente(200, cliente1 , 1001);
const Cliente1Poupanca = new ContaPoupanca(150, cliente1, 1001);
const cliente1Salario = new ContaSalario(cliente1);

cliente1Corrente.sacar(50);
Cliente1Poupanca.sacar(25);

// const cliente1Poupanca = new ContaPoupanca(0, cliente1, 1001);

console.log(cliente1Corrente);
console.log(Cliente1Poupanca);
console.log(cliente1Salario);









