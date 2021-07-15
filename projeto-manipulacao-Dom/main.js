import BotaoConclui from "./components/concluiTarefa.js";
import BotaoDelete from "./components/excluiTarefa.js";
// querySelector()recupera todo o obj html que entrar em sua arvore usando o parametro como valor 

// pegando html do button
const novaTarefa = document.querySelector('[data-form-button]');

// pegando html do input
const input = document.querySelector('[data-form-input]');

// pegando html da ul
const lista = document.querySelector('[data-list]');

// criando a função arrow 
const criarTarefas = (event) =>{

    // remover por padrão o recarregamento da página
    event.preventDefault();

    // recupera o texto escrito no input
    const valor = input.value;

    // cria elemento li
    const tarefa = document.createElement('li');

    // adiciona classe ao elemento
    tarefa.classList.add('task');

    // encorpora um conteudo html 
    const conteudo = `<p class="content">${valor}</p>`

    // inner = interno, faz atribuição do conteudo gerado para dentro da lista
    tarefa.innerHTML = conteudo;

    //coloca dentro de lista a tafera respeitando a hierarquia de pai pra filho 
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDelete());
    lista.appendChild(tarefa);

}

// função de click do button
novaTarefa.addEventListener('click', criarTarefas);

