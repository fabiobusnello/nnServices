const knex = require('./database')
const sha256 = require('js-sha256').sha256;
const params = require('./params')
const valida = require('./valida')
global.valida = valida
global.knex = knex
global.sha256 = sha256
global.session = params.session