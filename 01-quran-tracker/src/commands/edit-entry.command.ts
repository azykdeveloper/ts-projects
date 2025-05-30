import { Command } from "@/core/command";
import { Context } from "@/core/context";
import inquirer from "inquirer";

export class EditEntryCommand implements Command {
  constructor(private context: Context) {}

  async execute(): Promise<void> {
    const data = await this.context.storage.load();

    if (data.length === 0) {
      console.log("No entries found");
      return;
    }

    const { index } = await inquirer.prompt([
      {
        type: "list",
        name: "index",
        message: "Select an entry to edit: ",
        choices: data.map((entry, i) => ({
          name: `#${i + 1}. ${entry.surah} (${entry.fromAyah}-${
            entry.toAyah
          }), ${entry.date}`,
          value: i,
        })),
      },
    ]);

    const entry = data[index];
    const questions = await inquirer.prompt([
      {
        type: "input",
        name: "surah",
        message: `Enter Surah name (${entry.surah}):`,
        default: entry.surah,
      },
      {
        type: "input",
        name: "fromAyah",
        message: `Enter From Ayah (${entry.fromAyah}):`,
        default: `${entry.fromAyah}`,
      },
      {
        type: "input",
        name: "toAyah",
        message: `Enter To Ayah (${entry.toAyah}):`,
        default: `${entry.toAyah}`,
      },
    ]);

    data[index] = {
      ...entry,
      surah: questions.surah,
      fromAyah: parseInt(questions.fromAyah),
      toAyah: parseInt(questions.toAyah),
    };

    this.context.storage.save(data);
    console.log("Entry updated successfully!");
  }
}
