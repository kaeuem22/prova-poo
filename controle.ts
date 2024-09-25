export class Controle{

    constructor(
        private _velocidadeAtual: number,
        private _velocidadePermitida: number,
    ){};

    public get velocidadeAtual(): number{
        return this._velocidadeAtual;
    }
    public set velocidadeAtual(velocidadeAtual: number){
        this._velocidadeAtual = velocidadeAtual;
    }

    public get velocidadePermitida(): number{
        return this._velocidadePermitida;
    }
    public set velocidadePermitida(velocidadePermitida: number){
        this._velocidadePermitida = velocidadePermitida;
    }

    marcarVelocidadePermitida(velocidade: number): void{
        this._velocidadePermitida = velocidade;
    }

    turbo(): void{
        this.velocidadeAtual += 1 + Math.random() * (10 - 1);
        console.log(`Velocidade atual: ${this.velocidadeAtual.toFixed(1)}`);
        if(this.velocidadeAtual > this.velocidadePermitida){
            console.log("VOCÊ LEVOU UMA MULTA!!");
        }
    }

    velPermitida(): string{
        return (`Velocidade máxima permitida: ${this.velocidadePermitida.toFixed(1)}`);
    }
}