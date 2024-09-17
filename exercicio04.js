/* 
criar class conta bancaria abstrata  e e criar duas class prototicas de conta bancaria, 1- constaorrente // 2= conta poupança  */


class contaBancaria{

constructor(nome,numeCONta,doc,valor){

    if(this.constructor == contaBancaria){
        throw new Error("essa classe nao pede ser instancada");
        
    }

    this.nome = nome
    this.numeCONta = numeCONta
    this.doc = doc
    this.valor = valor
}

 get sacar(){


}

set sacar(_saque){

}

deposito(_deposito){

}

extrato(){

    if(this.constructor == contaCorrente ){
        throw new Error("ultilizar o polimorfismo");
        
    }
    }
    
}




class contaCorrente extends contaBancaria{

constructor(nome,numeCONta,doc,valor){
super(nome, numeCONta, doc, valor)


}

extrato(){

}
}



const teste = new contaCorrente("willy")

teste.extrato()

