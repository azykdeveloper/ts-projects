import { Command } from "@/core/command";
import { Context } from "@/core/context";

export class ShowEntriesCommand implements Command {
  constructor(private context: Context) {}
  async execute() {
    const data = this.context.storage.load()

    if(data.length === 0) console.log("No entries found");
    else {
      console.log("Your memorization progress: ");
      data.forEach((entry, i) => {
        console.log(
          `#${i + 1}. ${entry.surah} (${entry.fromAyah}-${entry.toAyah}), ${entry.date}`
        );
      });
    }
  }
}