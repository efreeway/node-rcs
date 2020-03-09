var net = require('net'),
    tls = require('tls'),
    util = require('util'),
    parse = require('url').parse,
    defs = require('./defs'),
    EventEmitter = require('events').EventEmitter;