const Livro = function(nome, editora, paginas){

    gNome = nome,
    gEditora = editora,
    gPaginas = paginas

    this.getNome = function(){
        return gNome;
    }

    this.getEditora = function(){
        return gEditora;
    }

    this.getPaginas = function(){
        return gPaginas;
    }

}

const GraphL = new Livro("GraphL", "Casa dos Códigos", 210);

console.log(GraphL.getNome());
console.log(GraphL.getEditora());
console.log(GraphL.getPaginas());