const execSync = require('child_process').execSync;
const packageJson = require('./package.json');

const IGNORE_COMMAND = 'bench';

const COMMAND_LIST = packageJson.scripts;

for (var value in COMMAND_LIST) {

  if (value === IGNORE_COMMAND) {
    continue;
  }

  console.time(value);
  execSync(`npm run ${value}`);
  console.timeEnd(value);
}
