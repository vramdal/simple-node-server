#! /usr/bin/env node
import httpServer from "http-server";
import chalk from 'chalk';

import {program} from "commander";
import * as path from "path";

const logger = {info: console.log, error: console.error};

program.option("-p, --port", "port to listen on", "8080");
program.option("-d, --directory", "directory to serve", ".");

process.on('SIGINT', function () {
    logger.info(chalk.red('http-server stopped.'));
    process.exit();
});

process.on('SIGTERM', function () {
    logger.info(chalk.red('http-server stopped.'));
    process.exit();
});

const server = httpServer.createServer({
    root: program.getOptionValue("directory"),
    showDir: true,
    showDotfiles: true,
    cors: true,
    corsHeaders: "authorization",
    cache: -1,
});

server.listen(program.getOptionValue("port"), () => {
    console.log(`Server ${path.resolve(program.getOptionValue("directory"))} på port ${program.getOptionValue("port")}`);
});
