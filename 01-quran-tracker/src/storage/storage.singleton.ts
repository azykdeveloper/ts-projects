import { StorageFactory } from "./storage.factory"
import { StorageStrategy } from "./storage.strategy"

export class StorageSingleton {
  private static instanse: StorageStrategy

  static getInstanse(): StorageStrategy {
    if(!this.instanse) this.instanse = StorageFactory.create('json')
    return this.instanse
  }
}