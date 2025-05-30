import { Command } from "@/core/command";
import { Context } from "@/core/context";

export class StatsCommand implements Command {
  constructor(private context: Context) {}

  async execute(): Promise<void> {
    const data = await this.context.storage.load();

    if (data.length === 0) {
      console.log("No entries found");
      return;
    }

    const summary = new Map<string, number>();

    for (const entry of data) {
      const ayahCount = entry.toAyah - entry.fromAyah + 1;
      if (summary.has(entry.surah)) {
        summary.set(entry.surah, summary.get(entry.surah)! + ayahCount);
      } else {
        summary.set(entry.surah, ayahCount);
      }
    }

    console.log("📊 Statistics:");

    for (const [surah, count] of summary.entries()) {
      console.log(`${surah}: ${count} ayahs memorized`);
    }
  }
}