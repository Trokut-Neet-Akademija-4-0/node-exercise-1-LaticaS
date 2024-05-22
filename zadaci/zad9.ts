class Student {
  constructor(
    public ime: string,
    public godine: number,
  ) {}

  kloniraj(): Student {
    return new Student(this.ime, this.godine)
  }
}

let student1 = new Student('Marko', 20)
let student2 = student1.kloniraj()
console.log(student2) // Output: Student { ime: 'Marko', godine: 20 }
