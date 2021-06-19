//2021-06-09 Ainda não existe no JS uma maneira formal de determinar um atributo privado a classe, já se fala sobre usar '#' antes(ex: #nome), porem ainda não foi solitificado 100% no mercado
//hoje para falar que um atributo da classe é privada usados '_' antes(ex: _nome), porem dessa forma é apenas uma boa prática, ainda podendo alterar o valor mesmo fora da classe 

import { Cliente } from './Cliente.js';
import { Diretor } from './Funcionario/Diretor.js'
import { Gerente } from './Funcionario/Gerente.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js'

const cliente = new Cliente("Ruan", 12345678997, "123")

const diretor = new Diretor('Mauricio', 10000, 13245678901 ,"123456789");
const gerente = new Gerente('sandro', 5000, 78945612397, "789789");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "789789");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);








