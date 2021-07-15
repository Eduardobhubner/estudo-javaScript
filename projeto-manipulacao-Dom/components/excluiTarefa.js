const BotaoDelete = () =>{

    const btExcluir = document.createElement('button');;
    btExcluir.innerText = 'Excluir';
    btExcluir.addEventListener('click', excluirTarefa);
    return btExcluir;
}

const excluirTarefa = (event) => {

   // descobri quem chamou a função
   const botaoExclui = event.target;
   // descobrir o pai do elemento
   const tarefaCompreta = botaoExclui.parentElement;
   //deletar nó do html
   tarefaCompreta.remove();
}

export default BotaoDelete;