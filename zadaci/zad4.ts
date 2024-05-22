abstract class KucniLjubimac {
  public ime!: string // ovo ! jer traži inicijalizaciju, ovo mu kaže da će biti
  abstract glasajSe(): string
  //ne mora konstruktor jer je abstraktna klasa
}

class Pas extends KucniLjubimac {
  private zvuk: string

  constructor() {
    super()
    this.zvuk = 'Vauuuuu vauuu daj keksić'
    this.ime = 'Pas Fifo'
  }

  glasajSe(): string {
    return this.zvuk
  }
}

class Macka extends KucniLjubimac {
  private zvuk: string

  constructor() {
    super()
    this.zvuk = 'Mijau, mijau daj mi jest!'
    this.ime = 'Mačka Guzo'
  }

  glasajSe(): string {
    return this.zvuk
  }

  static DohvatiIme(): string {
    return 'Mačkaaaaaaa'
  }
}

const pas = new Pas()
const macka = new Macka()
console.log(pas instanceof Pas) //instanceof pita je li tip klase Pas, dobija se true/false
console.log(pas.glasajSe())
console.log(Macka.DohvatiIme())
