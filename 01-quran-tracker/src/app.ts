import inquirer from "inquirer";

async function bootstrap() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's your name?",
      },
    ])
    .then((answers) => {
      console.log(answers.name);
    })
    // .catch((error) => {
    //   if (error.isTtyError) {
        
    //   } else {
        
    //   }
    // });
}

bootstrap();
