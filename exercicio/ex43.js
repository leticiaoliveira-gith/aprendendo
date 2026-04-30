class Sensor {
  #status; // Atributo privado

  constructor(nome) {
    this.nome = nome;
    this.#status = "desligado";
  }

  alternar() {
    this.#status = this.#status === "ligado" ? "desligado" : "ligado";
    console.log(`O sensor ${this.nome} está ${this.#status}.`);
  }

  exibirInfo() {
    return `Dispositivo: ${this.nome}`;
  }
}

class SensorTemperatura extends Sensor {
  constructor(nome, graus) {
    super(nome);
    this.graus = graus;
  }

  // Sobrescrita de método (Polimorfismo)
  exibirInfo() {
    return `${super.exibirInfo()} | Temperatura Atual: ${this.graus}°C`;
  }
}

const termometro = new SensorTemperatura("Termo-X", 25);
termometro.alternar();
console.log(termometro.exibirInfo());