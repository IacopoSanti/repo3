const prompt = require("prompt-sync")();

class Auto{
    #targa;
    #carburante;
    #matricola;
    #potenza;
    constructor(targa, carburante, matricola, potenza){
        this.targa = targa;
        this.carburante = carburante;
        this.matricola = matricola;
        this.potenza = potenza;
    }
    get targa(){
        return this.#targa;
    }
    get carburante(){
        return this.#carburante;
    }
    get matricola(){
        return this.#matricola;
    }
    get potenza(){
        return this.#potenza;
    }
    set targa(nuova_targa){
        this.#targa = nuova_targa;
    }
    set carburante(nuovo_carburante){
        this.#carburante = nuovo_carburante;
    }
    set matricola(nuova_matricola){
        this.#matricola = nuova_matricola;
    }
    set potenza(nuova_potenza){
        this.#potenza = nuova_potenza;
    }
    ToString(){
    return `Targa: ${this.targa},
Carburante: ${this.carburante},
Matricola: ${this.matricola},
Potenza: ${this.potenza} cavalli.`;
    }
}

function newAuto
() {
    var targa = prompt("Qual'è la targa della tua auto? ");
    var carburante = prompt("Qual'è il carburante che usa la tua auto? ");
    var matricola = prompt("Qual'è la matricola e il telaio della tua auto? ");
    var potenza = prompt("Qual'è la potenza del motore della tua auto? ");

    var auto = new Auto(targa, carburante, matricola, potenza);
    return auto
}

let auto1 = newAuto();
let auto2 = newAuto();

console.log(`Auto1:
${auto1.ToString()}
Auto2:
${auto2.ToString()}`);