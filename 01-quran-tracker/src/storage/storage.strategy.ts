import { MemorizationProgress } from "@/types/types";

export interface StorageStrategy {
  load(): MemorizationProgress[];
  save(progress: MemorizationProgress[]): void;
}
