class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacao() {

        // programação defensiva, retorna uma cópia da lista e mantem a lista principal intacta 
        return [].concat(this._negociacoes);

    }
}