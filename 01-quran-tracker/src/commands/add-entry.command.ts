import { Command } from "@/core/command";
import { Context } from "@/core/context";
import { MemorizationProgress } from "@/types/types";
import inquirer from "inquirer";


export class AddEntryCommand implements Command {
  constructor(private context: Context) {}

  
  async execute() {
    const questions = await inquirer.prompt([
      {
        type: "input",
        name: "surah",
        message: "Enter surah name: ",
      },
      {
        type: "number",
        name: "fromAyah",
        message: "From ayah: ",
      },
      {
        type: "number",
        name: "toAyah",
        message: "To ayah: ",
      }
    ])

    const newEntry: MemorizationProgress = {
      surah: questions.surah,
      fromAyah: questions.fromAyah,
      toAyah: questions.toAyah,
      date: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }

    const data = this.context.storage.load()
    data.push(newEntry)
    this.context.storage.save(data)
    console.log("Data saved successfully");

  }
  
}