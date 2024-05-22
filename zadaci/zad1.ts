class Osoba {
  //u konzoli se pokreće sa npm run zad1 itd (jer smo naprav.skriptu u package.json)
  constructor(
    private ime: string,
    private dob: number,
  ) {}

  public setIme(ime: string): void {
    console.log()
    this.ime = ime
  }
  public setDob(dob: number): void {
    console.log()
    this.dob = dob
  }

  public getDob(): number {
    return this.dob
  }

  public get imeIDob() {
    return `Moje ime je ${this.ime} i imam ${this.dob} godina`
  }

  //predstaviSe() {
  //console.log('Ja sam', this.ime, 'star', this.dob)   }
}

const osoba = new Osoba('Artemida', 55)
//console.log(osoba.imeIDob)
//osoba.setIme('testtttt')
console.log(osoba.imeIDob)

export default Osoba
