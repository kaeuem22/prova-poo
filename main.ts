import prompt from 'prompt-sync';
import { Controle } from './controle';

let controle: Controle = new Controle(0,0);

let teclado = prompt();
let option: number = 0;

while(option != 9){
    console.log("\n======Controle de velocidade======")
    console.log("1.Definir velocidade máxima")
    console.log("2.turbo")
    console.log("9.sair")
    option = +teclado("Escolha uma opção: ")
    switch (option) {
        case 1:
            let velocidade: number = +teclado("Insira a velocidade permitida: ");
            controle.marcarVelocidadePermitida(velocidade);
            console.log(controle.velPermitida());
            break;
         case 2:
            controle.turbo();
            break;
        default:
            break;
    }
}