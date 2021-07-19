class DateHelper {

    constructor() {
        throw new error("Esta classe(DateHelper) não pode ser instanciada");
    }

    static dataParaTexto(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    }

    static textoParaData(texto) {

        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            throw new error("Fora do padrão");
        }
        return new Date(texto.split('-'));

    }
}