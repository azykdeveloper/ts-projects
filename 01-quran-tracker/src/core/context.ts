import { StorageStrategy } from "@/storage/storage.strategy";

export class Context {
  constructor(public storage: StorageStrategy) {}
}