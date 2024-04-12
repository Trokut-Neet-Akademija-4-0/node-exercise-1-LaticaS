interface Oblik {
  povrsina(): number
  obujam(): number
}

class Krug implements Oblik {
  constructor(public radijus: number) {}

  povrsina() {
    return Math.PI * this.radijus * this.radijus
  }

  obujam() {
    return 2 * Math.PI * this.radijus
  }
}

const krug = new Krug(4)
console.log(krug.obujam())
console.log(krug.povrsina())

class Pravokutnik implements Oblik {
  constructor(
    public sirina: number,
    public visina: number,
  ) {}

  povrsina() {
    return this.sirina * this.visina
  }

  obujam() {
    return 2 * (this.sirina + this.visina)
  }
}

const pravokutnik = new Pravokutnik(4, 3)
console.log(pravokutnik.obujam())
console.log(pravokutnik.povrsina())
