const BotaoConclui = () =>{

    const btConclui = document.createElement('button');

    btConclui.classList.add('check-button');
    btConclui.innerText = 'concluir';
    btConclui.addEventListener('click', concluirTarefa);

    return btConclui;
}

const concluirTarefa = (event) =>{
    // descobri quem chamou a função
    const botaoConclui = event.target;
    // descobrir o pai do elemento
    const tarefaCompreta = botaoConclui.parentElement;
    // adicionando toggle
    tarefaCompreta.classList.toggle('done');
}

export default BotaoConclui;