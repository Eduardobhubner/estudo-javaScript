class View {

    constructor(elemento){
        this._elemento = elemento
    }

    template(){
        throw new Error("O método template deve ser implementado");
    }

    update(model){
        // innerHtml converte a string em elementos do DOM caso marcação esteja correta
        this._elemento.innerHTML = this.template(model);
    }
}