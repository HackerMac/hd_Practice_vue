'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// /company/xxxx   /api/xxxxxxx
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"api"'
})
