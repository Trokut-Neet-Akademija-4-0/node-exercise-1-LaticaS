import Osoba from './zad1'

class Student extends Osoba {
  constructor(
    ime: string,
    dob: number,
    private brojIndeks: number,
  ) {
    super(ime, dob)
  }
}

//console.log(new Student('hejhejhej', 55, 123))

export default Student
