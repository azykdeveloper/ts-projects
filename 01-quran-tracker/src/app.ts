import inquirer from "inquirer";
import { CommandExecutor } from "./core/command-executor";
import { Context } from "./core/context";
import { StorageSingleton } from "./storage/storage.singleton";
import { AddEntryCommand } from "./commands/add-entry.command";
import { ShowEntriesCommand } from "./commands/show-entries.command";
import { ExitCommand } from "./commands/exit.command";
import { DeleteEntryCommand } from "./commands/delete-entry.command";
import { EditEntryCommand } from "./commands/edit-entry.command";
import { StatsCommand } from "./commands/stats.command";

const executor = new CommandExecutor();
const context = new Context(StorageSingleton.getInstanse());

async function bootstrap() {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What do you want to do",
      choices: [
        "➕ New memorization",
        "📃 Show list",
        "🗑️  Delete",
        "🖊️  Edition",
        "📊 Statistics",
        "❌ Exit",
      ],
    },
  ]);

  switch (action) {
    case "➕ New memorization":
      await executor.run(new AddEntryCommand(context));
      break;
    case "📃 Show list":
      await executor.run(new ShowEntriesCommand(context));
      break;
    case "🗑️  Delete":
      await executor.run(new DeleteEntryCommand(context));
      break;
    case "🖊️  Edition":
      await executor.run(new EditEntryCommand(context));
      break;
    case "📊 Statistics":
      await executor.run(new StatsCommand(context));
      break;
    case "❌ Exit":
      await executor.run(new ExitCommand());
      break;
  }

  bootstrap();
}

bootstrap();
