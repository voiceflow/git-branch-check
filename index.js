#!/usr/bin/env node
/* eslint-disable no-console */

const branchName = require('current-git-branch');

const branchRegex = /^\w+\/(\S+\/)?VF-\d+$/;
const EXCEPTIONS = ['production', 'trying', 'staging', 'master'];

try {
  const curBranchName = branchName();

  if (curBranchName.match(branchRegex) || EXCEPTIONS.includes(curBranchName)) {
    process.exitCode = 0;
  } else {
    process.exitCode = 1;
    console.log(
      '\x1b[31m%s\x1b[0m',
      `\nCurrent Git branch name: "${curBranchName}" \nIs not valid for given pattern: "<first name>/short-description/VF-000"\n\nIf you don't have a ticket, then you should probably create one: \nhttps://voiceflow.atlassian.net/secure/CreateIssue!default.jspa\n`
    );
  }
} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', `${error.message}\n`);
  process.exitCode = 1;
}
