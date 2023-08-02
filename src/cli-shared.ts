import figlet from 'figlet';
import colors from 'colors/safe';
import pkg from '../package.json';

import { SSVKeysCommand } from './commands/SSVKeysCommand';

const FigletMessage = async (message: string) => {
  return new Promise(resolve => {
    figlet(message, (error: any, output?: string) => {
      if (error) {
        return resolve('');
      }
      resolve(output);
    });
  })
}

export default async function main(interactive: boolean, defaultAction?: string): Promise<any> {
  const messageText = `SSV Keys v${pkg.version}`;
  const message = await FigletMessage(messageText);
  if (message) {
    console.log(' ----------------------------------------------------------------------');
    console.log(`${message || messageText}`);
    console.log(' ----------------------------------------------------------------------');
    for (const str of String(pkg.description).match(/.{1,67}/g) || []) {
      console.log(` ${str}`);
    }
    console.log(' ----------------------------------------------------------------------\n');
  }
  const command = new SSVKeysCommand(interactive, defaultAction);
  try {
    const outputFiles = await command.execute();
    console.debug(`\nKey distribution successful! Find your key shares file${outputFiles.length > 1 ? 's': ''} at:`);
    outputFiles.forEach((file: string) => console.debug(`${colors.bgYellow(colors.black(file))}`));
  } catch(error) {
    console.log(error);
  }
}
