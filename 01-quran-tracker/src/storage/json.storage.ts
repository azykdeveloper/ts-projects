import path from "path";
import fs from "fs"
import { storageStrategy } from "./storage.strategy";
import { MemorizationProgress } from "@/types/types";


const filePath = path.join(__dirname, "../../data/progress.json");

export class JSONStorage implements storageStrategy {
  load(): MemorizationProgress[] {
    if(!fs.existsSync(filePath)) return []
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }
  save(progress: MemorizationProgress[]): void {
    fs.writeFileSync(filePath, JSON.stringify(DataTransfer, null, 2));
  }
}