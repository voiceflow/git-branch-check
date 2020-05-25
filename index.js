#!/usr/bin/env node

'use strict';

const branchName = require('current-git-branch');

const branchRegex = /^\w+\/(\S+\/)?CORE-\d+$/;
const EXCEPTIONS = ['production', 'staging', 'master'];

try {
  const curBranchName = branchName();

  if (curBranchName.match(branchRegex) || EXCEPTIONS.includes(curBranchName)) {
    process.exitCode = 0;
  } else {
    process.exitCode = 1;
    console.log(
      '\x1b[31m%s\x1b[0m',
      `\nCurrent Git branch name: "${curBranchName}" \nIs not valid for given pattern: "<first name>/core-000"\n\nIf you don't have a ticket, then you should probably create one: \nhttps://linear.app/team/CORE/new\n`
    );
  }
} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', `${error.message}\n`);
  process.exitCode = 1;
}
