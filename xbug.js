#!/usr/bin/env node

const { program } = require('module');
const path = require('path');
const fs = require('fs');
const { testProject } = require('../lib/tester');
const { findEntry } = require('../lib/finder');

const version = '0.1.0';

const args = process.argv.slice(2);
const command = args[0];

const RESET = '\x1b[0m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const GRAY = '\x1b[90m';
const BOLD = '\x1b[1m';
const GREEN = '\x1b[32m';

function banner() {
  console.log(`\n${BOLD}${RED}  xBug v${version} — by RMS STUDIOS${RESET}\n`);
}

function help() {
  banner();
  console.log(`${BOLD}Usage:${RESET}`);
  console.log(`  xbug test              Run and trace errors in current project`);
  console.log(`  xbug test <file>       Run and trace a specific file`);
  console.log(`  xbug --version         Show version`);
  console.log(`  xbug --help            Show this help\n`);
}

if (!command || command === '--help' || command === '-h') {
  help();
  process.exit(0);
}

if (command === '--version' || command === '-v') {
  banner();
  console.log(`  v${version}\n`);
  process.exit(0);
}

if (command === 'test') {
  banner();
  const target = args[1] ? path.resolve(process.cwd(), args[1]) : null;
  testProject(target);
} else {
  banner();
  console.log(`${RED}Unknown command: ${command}${RESET}`);
  console.log(`${GRAY}Run xbug --help for usage.${RESET}\n`);
  process.exit(1);
}
