/*
Crie uma classe chamada “Funcionário” com atributos para armazenar o nome, o salário e o cargo do funcionário.
 Implemente métodos para calcular o salário líquido, considerando descontos de impostos e benefícios. 
 
 */



 class funcionário{

    constructor(nome,cargo){
        this.nome = nome
        this.salario 
        this.cargo = cargo
        this.liquido 
        this.inss  
        this.fgts = new Number
        this.taxaInss = new Number
    }

    salarioLiquio(_salario){
    this.salario = _salario

if(_salario <= 1450){
    this.taxaInss = 7.5
} else if(_salario > 1450 &&  _salario <= 2666){
    this.taxaInss = 9
} else if(_salario > 2666 &&  _salario <= 4444){
    this.taxaInss = 12
} else if(_salario > 4444 ){
    this.taxaInss = 14
}

this.fgts = (8/100) * this.salario 

this.inss = (this.taxaInss * this.salario) / 100
this.liquido = (this.salario - this.fgts ) -this.inss
this.visuallizar()
    }

 visuallizar(){

 console.log(`EMPRESA RHMULTI\n\nnome:${this.nome}\ncargo:${this.cargo}\nsalario bruto:${this.salario}\n`)
 console.log(`\n____DESONTOS_____\nFGTS:${this.fgts}\nINSS:${this.inss}\n\n VALOR LIQUIDO COM DSCONTOS\nsalario liquido:${this.liquido}`)
        
    }

 }

 const pe1 = new funcionário("willy", "t.i")

 pe1.salarioLiquio(3200)


