import { Command } from "./command";

export class CommandExecutor {
  public async run(command: Command) {
    await command.execute();
  }
}