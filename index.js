'use strict';

const branchName = require('current-git-branch');

const branchRegex = /^\w+\/\S+\/CORE-\d+$/;
const EXCEPTIONS = ['production', 'staging', 'master'];

try {
  const curBranchName = branchName();

  if (branchRegex.test(curBranchName) || EXCEPTIONS.includes(curBranchName)) {
    process.exitCode = 0;
  } else {
    process.exitCode = 1;
    console.log(
      '\x1b[31m%s\x1b[0m',
      `Current Git branch name: "${curBranchName}" \nIs not valid for given pattern: "<first name>/<short desc>/CORE-XXX"\n`
    );
  }
} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', `${error.message}\n`);
  process.exitCode = 1;
}
