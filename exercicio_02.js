
class aluno {
    constructor(matricula,nome){
        this.nota = new Number
        this.matricula= matricula 
        this.nome = nome
    }

    media(n1,n2,n3){ 
         this.nota = (n1 + n2 + n3 ) / 3   
    }

    visualizar(){

        if(this.nota < 5){
            console.log(`\naluno: ${this.nome}\n matricula:${this.matricula} \nmedia: ${this.nota} \nficou a baixo da media  `)
        return "reprovado"
      
        }else{
            console.log(`\naluno: ${this.nome}\nmatricula:${this.matricula} \n ${this.nota} \nficou a acima da media   `)   
            return "aprovado"
        }
    }
}

const aluno01 = new aluno( 2024540,"willy")
aluno01.media(8,5,9)
aluno01.visualizar()

const aluno02 = new aluno( 132456, "mencia")
  aluno02.media(5,4,4)
  aluno02.visualizar()



