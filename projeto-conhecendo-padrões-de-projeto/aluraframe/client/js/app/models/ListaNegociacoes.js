class ListaNegociacoes {

    constructor(){

        this._negociacoes = []; 
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacao() {
        return this._negociacoes;
    }
}