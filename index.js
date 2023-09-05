import chalk from 'chalk';
import { GetColorName } from 'hex-color-to-color-name';

const getRandomHexColor = () => {
  // Define an array of hexadecimal digits
  const hexChars = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  // Generate an array of six random indices from 0 to 15
  const hexIndices = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 16),
  );
  // Map each index to its corresponding hex digit and join them into a string
  const hexCode = hexIndices.map((i) => hexChars[i]).join('');
  // Return the string with a "#" prefix
  return `#${hexCode}`;
};

//console.log(getRandomHexColor());
let hexCol = getRandomHexColor();
console.log(hexCol);

const colorName = GetColorName(hexCol); // returns 'Black'
//console.log(hexCol);
console.log(colorName);

//console.log(chalk.colorName('Hello world!'));
//console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
console.log(chalk.hex(hexCol)('Hello, world!'));
console.log(chalk.hex(hexCol)(''));
console.log(chalk.hex(hexCol)('###############################'));
console.log(chalk.hex(hexCol)('###############################'));
console.log(chalk.hex(hexCol)('###############################'));
console.log(chalk.hex(hexCol)('###############################'));
console.log(chalk.hex(hexCol)('#####                     #####'));
console.log(chalk.hex(hexCol)('#####                     #####'));
console.log(chalk.hex(hexCol)(`#####       ${hexCol}       #####`));
console.log(chalk.hex(hexCol)('#####                     #####'));
console.log(chalk.hex(hexCol)('#####                     #####'));
console.log(chalk.hex(hexCol)('###############################'));
console.log(chalk.hex(hexCol)('###############################'));
console.log(chalk.hex(hexCol)('###############################'));
