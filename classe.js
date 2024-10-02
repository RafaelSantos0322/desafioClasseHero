class Hero {
  constructor(nome, idade, tipo) {
    if(
        nome && idade && (   
             tipo.toLowerCase() == "mago"||
             tipo.toLowerCase()== "guerreiro" || 
             tipo.toLowerCase()== "ninja" || 
             tipo.toLowerCase()== "monge")
      )
    {
         this.nome = nome;
         this.idade = idade;
         this.tipo = tipo.toLowerCase();
      } 
    else {
          console.log("Dados inválidos")
         }
    }  
    escolherAtaque() {
      this.arma
      switch (this.tipo) {
          case "mago":
          this.arma = "mágia";
          break;
          case "guerreiro":
          this.arma = "espada";
          break;
          case "monge":
          this.arma = "artes marciais";
          break;
          case "ninja":
          this.arma = "shuriken";
          break;
          
      }
      return this.arma
    }
   
    
    atacar(){
      let arma = this.escolherAtaque()
      if(this.tipo){
      console.log(`O ${this.tipo} atacou usando ${arma}`)
    }
    
   }      
}
// Criação de forma correta
const guerreiro = new Hero("Andrew", 27, "MagO");
guerreiro.atacar()
console.log(guerreiro)
// Instância com Erro
let instanciaComErro = new Hero ("Com Erro", 0, "Nasl")
instanciaComErro.atacar()
console.log(instanciaComErro)
