'use strict';
let readlineSync = require("readline-sync");
let opcao;

const numPart = 100;
console.log("---------Cadastro de eventos---------");
console.log();

let nomeEvento = readlineSync.question("Nome do evento: ");

do {
    var strData = readlineSync.question("Digite uma data: (dd/mm/yyyy)");
    var dataPartes = strData.split("/");
    var data = new Date(dataPartes[2], dataPartes[1] - 1, dataPartes[0]);
    if (data > new Date()) {
        console.log("Sim");
    } else {
        console.log("Não");
    }
    var validData = Date.parse(data);
    if (isNaN(validData)) {
        console.log("Data inválida, por favor digite uma data válida");
    }
} while (isNaN(validData) == true)

var resp = "SIM";
let i = 0;
let ip = 0;
let listaDeParticipantes = [];

let idadeDeParticipantes = [];

let listaDePalestrante = [];

let idadeDePalestrante = [];


//Se a data atual é menor que a data do evento
if (data > new Date()) {
    while (opcao != 0) {
        console.log();
        console.log("Cadastro de palestrantes e participantes do evento " + nomeEvento)
        console.log("1- Cadastrar participantes");
        console.log("2- Cadastrar palestrantes");
        console.log("0- Sair");

        opcao = readlineSync.question("Escolha uma opcao: ")
        console.log();

        switch (opcao) {
            case "1":
                console.log("Participantes: ")

                //Enquanto participantes for menor que 100 e resposta for igual a SIM
                while ((i < numPart) && (resp == "SIM")) {
                    let nomeParticipante = readlineSync.question("Nome do participante: ");
                    let idadeParticipante = readlineSync.question("Idade do participante: ");
                    listaDeParticipantes.push(nomeParticipante);
                    idadeDeParticipantes.push(idadeParticipante);

                    //Se a idade do participante for menor que 18
                    if (idadeParticipante < 18) {
                        listaDeParticipantes.pop(nomeParticipante);
                        idadeDeParticipantes.pop(idadeParticipante);
                        i--;
                        console.log("Cadastro não permitido por causa da idade");
                    } else {
                        console.log("Cadastro concluído")
                    }

                    resp = readlineSync.question("Deseja cadastrar mais um participante? [SIM/NAO] ").toUpperCase();

                    i++;

                    if ((i == numPart) && (resp === "SIM")) {
                        console.log("Limite de participantes esgotado");
                    }
                }
                break;


            case "2":

                console.log("Participantes: ")
                //Numero de palestrantes
                var np = readlineSync.question("Quantos palestrantes estarao no evento: ");

                //Enquanto palestrantes for menor que numero de palestrantes 
                while (ip < np) {
                    let nomePalestrante = readlineSync.question("Nome do palestrante: ");
                    let idadePalestrantes = readlineSync.question("Idade do palestrante: ");
                    listaDePalestrante.push(nomePalestrante);
                    idadeDePalestrante.push(idadePalestrantes);
                    ip++
                }
                break;

            case "0":
                console.log("Cadastro finalizado com sucesso!")
                break;


            default:
                console.log("Opção inválida");
        }

    }
} else {
    console.log("Cadastro não permitido, pois a data do evento já ocorreu");
}
//Listando os palestrantes e participantes
console.log("Lista de participantes e palestrantes do evento " + nomeEvento);
console.log("Palestrantes: ");
for (let indicePalestrantes = 0; indicePalestrantes < np; indicePalestrantes++) {
    console.log((indicePalestrantes + 1) + "- Nome: " + listaDePalestrante[indicePalestrantes] + "   Idade: " + idadeDePalestrante[indicePalestrantes] + " anos");
}
console.log("");
console.log("Participantes: ");
for (let indice = 0; indice < i; indice++) {
    console.log((indice + 1) + "- Nome: " + listaDeParticipantes[indice] + "   Idade: " + idadeDeParticipantes[indice] + " anos");
}
