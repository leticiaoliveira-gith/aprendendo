class Cachorro {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }

  latir() {
    console.log(`${this.nome} disse: Au Au!`);
  }
}

// Criando instâncias (objetos)
const pet1 = new Cachorro("Rex", "Labrador");
const pet2 = new Cachorro("Luna", "Poodle");

pet1.latir();
pet2.latir();