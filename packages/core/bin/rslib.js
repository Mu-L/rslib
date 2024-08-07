#!/usr/bin/env node
// import { logger, prepareCli, runCli } from '../dist/index.js';
import { logger, prepareCli, runCli } from '../dist/rslib/esm/main.js';

async function main() {
  prepareCli();

  try {
    runCli();
  } catch (err) {
    logger.error(err);
  }
}

main();
