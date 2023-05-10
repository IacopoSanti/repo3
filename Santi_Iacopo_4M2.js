const prompt = require("prompt-sync")();
const os = require('os');

class GestioneFileSynk {
    fs = require('fs'); 

    constructor(nomeFile) {
        this.nomeFile = nomeFile;

    }
    ReadFile() {
        try {
            const data = this.fs.readFileSync(this.nomeFile, "utf8");
            return data;
        } catch (err) {
            console.error(err);
        }
    };
    WriteFile(msg) {
        try {
            this.fs.writeFileSync(this.nomeFile, msg + " \r\n", { flag: 'w+' });
        } catch (err) {
            console.error(err);
        }
    };
    AppendFile(msg) {
        try {
            this.fs.writeFileSync(this.nomeFile, msg + " \r\n", { flag: 'a+' });
        } catch (err) {
            console.error(err);
        }
    };
}

class Persona {
    #p_nome;
    #p_cognome;
    #p_data_nascita;
    constructor(nome, cognome, data_nascita) {
        this.nome = nome;
        this.cognome = cognome;
        this.data_nascita = data_nascita;
    }
    set nome(name) {
        this.#p_nome = name;
    }
    set cognome(surname) {
        this.#p_cognome = surname;
    }
    set data_nascita(date) {
        this.#p_data_nascita = date;
    }
    get nome() {
        return this.#p_nome;
    }
    get cognome() {
        return this.#p_cognome;
    }
    get data_nascita() {
        return this.#p_data_nascita;
    }
    ToString() {
        return "Nome : " + this.nome + "\nCognome : " + this.cognome + "\nData nascita : " + this.data_nascita;
    }
    ToJson(){
        return  { this:nome + "," + this.cognome + "," + this.data_nascita };
    }
}

const persone = [];
let gFs = new GestioneFileSynk("./text.csv");
let gfsEsporta = new GestioneFileSynk("esporta.csv");
let data = gFs.ReadFile().split(/\r?\n/);
data.splice(0, 1);

for (let i = 0; i < data.length; i++) {
    var riga = data[i].split(",");
    var persona = new Persona(riga[0], riga[1], riga[2]);
    persone.push(persona);

}
for (let i = 0; i < data.length; i++) {
    console.log("\nPersona " + (i + 1) + ":\n");
    console.log(persone[i].ToString());
}
gfsEsporta.WriteFile("Nome,Cognome,data_di_nascita");
for (let i = 0; i < persone.length ;i++){
    gfsEsporta.AppendFile(persone[i].ToCsv());
}
let ricerca = "pallino";
let contatore = 0;

for (let i = 0; i < data.length; i++) {
    var riga = data[i].split(",");
    for (let j = 0; j < riga.length; j++) {
        var parola = riga[j];
        if (ricerca == parola) {
            contatore++;
            
        }
        
    }

}

console.log(" \nIl numero di occorrenze della parola " + ricerca + " sono " + contatore);
