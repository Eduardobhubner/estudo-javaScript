//2021-06-09 Ainda não existe no JS uma maneira formal de determinar um atributo privado a classe, já se fala sobre usar '#' antes(ex: #nome), porem ainda não foi solitificado 100% no mercado
//hoje para falar que um atributo da classe é privada usados '_' antes(ex: _nome), porem dessa forma é apenas uma boa prática, ainda podendo alterar o valor mesmo fora da classe 

// import { Cliente } from './Cliente.js';
import { Diretor } from './Funcionario/Diretor.js'
import { Gerente } from './Funcionario/Gerente.js'
import { SistemaAutenticacao } from './Funcionario/SistemaAutenticacao.js'

const diretor = new Diretor('Mauricio', 10000, 13245678901);
const gerente = new Gerente('sandro', 5000, 78945612397);

diretor.cadastrarSenha("123456789");
gerente.cadastrarSenha("123123");

const estaLogado = SistemaAutenticacao.login(gerente, "123123");
console.log(estaLogado);








