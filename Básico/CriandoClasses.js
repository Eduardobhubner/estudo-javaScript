class Livro {

    constructor(nome, editora, paginas){
        this.nome = nome,
        this.editora = editora,
        this.paginas = paginas
    }

    anunciarTitulo(){
        console.log(`Título: ${this.nome}`);
    }

    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`);
    }
}

// const JavaScript = new Livro("Aprendendo JavaScript em 10 anos", "Casa dos códigos", 1201);
// JavaScript.anunciarTitulo();
// JavaScript.descreverTitulo();

///////////herdar valores de uma classe a outra

class LivroColecao extends Livro{

    constructor(nome, colecao){
        super(nome) ,
        this.colecao = colecao
    }

    descreverColecao(){
        console.log(`O livro ${this.nome} Pertence a coleção ${ this.colecao}`);
    }
}

const LogicaDeProgramacao = new LivroColecao("Lógica de programacão" , "Comece a Programar");

LogicaDeProgramacao.descreverColecao();

