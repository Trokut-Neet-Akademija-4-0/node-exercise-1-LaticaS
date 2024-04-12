class Singleton {
  static instance: Singleton
  numberOfCalls: number = 0

  constructor(
    private isCalledFromParent: boolean = false,
    public numberOfCalls: number = 0,
  ) {
    if (Singleton.instance === undefined && !this.isCalledFromParent) {
      Singleton.instance = new Singleton(true)
      Singleton.instance += 1
    }
  }
  getInstance(): Singleton {
    return Singleton.instance
  }
}

const sin1 = new Singleton()
console.log(sin1.getInstance())
const sin2 = new Singleton()
console.log(sin2.getInstance())
