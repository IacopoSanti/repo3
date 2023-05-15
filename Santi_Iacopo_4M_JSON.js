class Persona {
    constructor(nome,cognome,data_di_nascita) {
        this.nome = nome;
        this.cognome = cognome;
        this.data_di_nascita = data_di_nascita;
    }
        parsePersona () {
            const personaJson = JSON.parse(Persona.json);
            console.log(personaJson);
        }
}

class Istituzione {
    constructor(nome_istituzione,lista_personale) {
        this.nome_istituzione = nome_istituzione;
        this.lista_personale = lista_personale;
    }

    parseIstituzione () {
        const istituzioneJson = JSON.parse(Istituzione.json);
        console.log(istituzioneJson);
    }

}