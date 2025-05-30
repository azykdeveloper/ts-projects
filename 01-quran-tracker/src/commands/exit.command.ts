import { Command } from "@/core/command";

export class ExitCommand implements Command {
  async execute(): Promise<void> {
    console.log("Exiting the application. Goodbye!");
    process.exit(0);
  }
}