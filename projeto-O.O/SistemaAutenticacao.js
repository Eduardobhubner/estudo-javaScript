export class SistemaAutenticacao{

    // ducky type
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }

        return false
    }

    static ehAutenticavel(autenticavel){
        // se exsite a chave "autenticar" no objeto autenticavel 
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }

}