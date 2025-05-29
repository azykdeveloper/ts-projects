import { storageStrategy } from "@/storage/storage.strategy";

export class Context {
  constructor(public storage: storageStrategy) {}
}