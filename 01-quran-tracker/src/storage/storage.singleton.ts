export class StorageSingleton {
  private static instanse: StorageSingleton

  static getInstanse(): StorageSingleton {
    if(!this.instanse) this.instanse = new StorageSingleton()
    return this.instanse
  }
}