#!/usr/bin/env node

/**
 * Module dependencies.
 */

var resolve = require('path').resolve
  , join = require('path').join
  , exec = require('child_process').exec
  , program = require('commander')
  , connect = require('connect')
  , morgan = require('morgan')
  , compression = require('compression')
  , serveFavicon = require('serve-favicon')
  , serveStatic = require('serve-static')
  , serveIndex = require('serve-index')
  , basicAuth = require('basic-auth-connect')
  , open = require('open')
  , stylus = require('stylus')
  , pug = require('pug')
  , less = require('less-middleware')
  , url = require('url')
  , fs = require('fs')
  , http2 = require('http2');

// CLI

program
  .version(require('../package.json').version)
  .usage('[options] [dir]')
  .option('-o, --open', 'automatically opens a browser window to this server')
  .option('-a, --auth <user>:<pass>', 'specify basic auto credentials')
  .option('-F, --format <fmt>', 'specify the log format string', 'dev')
  .option('-p, --port <port>', 'specify the port [3000]', Number, 3000)
  .option('-r, --root <root>', 'specify the root directory []', String, "")
  .option('      --https-port <port>', 'specify the port [3443]', Number, 3443)
  .option('-H, --hidden', 'enable hidden file serving')
  .option('-S, --no-stylus', 'disable stylus rendering')
  .option('-J, --no-pug', 'disable pug rendering')
  .option('    --no-less', 'disable less css rendering')
  .option('-I, --no-icons', 'disable icons')
  .option('-L, --no-logs', 'disable request logging')
  .option('-D, --no-dirs', 'disable directory serving')
  .option('-f, --favicon <path>', 'serve the given favicon')
  .option('-C, --cors', 'allows cross origin access serving')
  .option('-s, --https', 'also serve over https')
  .option('    --key', 'key file path for https')
  .option('    --cert', 'certificate file for https')
  .option('    --ca', 'CA certificate file for https')
  .option('    --compress', 'gzip or deflate the response')
  .option('    --exec <cmd>', 'execute command on each request')
  .parse(process.argv);

// path
