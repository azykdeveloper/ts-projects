import { Command } from "@/core/command";
import { Context } from "@/core/context";
import inquirer from "inquirer";

export class DeleteEntryCommand implements Command {
  constructor(private context: Context) {}

  async execute(): Promise<void> {
    const data = await this.context.storage.load()

    if(data.length === 0) {
      console.log("No entries found");
      return
    }

    const { index } = await inquirer.prompt([
      {
        type: 'list',
        name: 'index',
        message: "Select an entry to delete: ",
        choices: data.map((entry, i) => ({
          name: `#${i + 1}. ${entry.surah} (${entry.fromAyah}-${entry.toAyah}), ${entry.date}`,
          value: i
        }))
      }
    ])

    data.splice(index, 1);
    this.context.storage.save(data);
    console.log("Entry deleted successfully.");
  }
}