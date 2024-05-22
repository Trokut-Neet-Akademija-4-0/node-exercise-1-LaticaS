import Student from './zad2'

//generičke klase!

class Kutija<T> {
  sadrzaj: T[]

  constructor() {
    this.sadrzaj = []
  }

  dodajStvar(stvar: T) {
    this.sadrzaj.push(stvar)
  }
}

const kutijaBrojeva = new Kutija<number>()

kutijaBrojeva.dodajStvar(1)
kutijaBrojeva.dodajStvar(2)
console.log(kutijaBrojeva.sadrzaj)

const kutijaStringova = new Kutija<string>()
kutijaStringova.dodajStvar('test1')
kutijaStringova.dodajStvar('test2')
console.log(kutijaStringova.sadrzaj)

const kutijaStudenata = new Kutija<Student>()
kutijaStudenata.dodajStvar(new Student('Mate', 18, 56))
kutijaStudenata.dodajStvar(new Student('Ivo', 21, 25))
console.log(kutijaStudenata.sadrzaj)
