/*

Implemente uma classe chamada “ContaBancária” que possua atributos para armazenar 
o número da conta, nome do titular e saldo. Adicione métodos para realizar depósitos e saques. 

*/

class contaBancaria{
    constructor(numeroConta, nome, saldo){
    this.numeroConta = numeroConta
    this.nome = nome
    this.saldo = saldo


    }

    deposito(_deposito){
        this.saldo += _deposito
        console.log("\n\nextrato atualizado \n" ,"nome:"+ this.nome ,"conta:"+this.numeroConta , "saldo:"+this.saldo)
       
      return this.saldo        
    }
    
    saque(_saque){
        this.saldo = this.saldo - _saque

        console.log("\n\nextrato atualizado \n" ,"nome:"+ this.nome ,"conta:"+this.numeroConta , "saldo:"+this.saldo)
        return 

    }

    visuallizar(){
        return {
             nome:this.nome,
             conta:this.numeroConta,
             saldo:this.saldo,

        }

       
    }

}

const pessoa01 = new contaBancaria( 702589,"WILLY",1500)  

console.log(pessoa01.visuallizar())
pessoa01.saque(500)
pessoa01.deposito(1000)




