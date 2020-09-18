const path = require('path')

require('@babel/register')
require('module-alias/register')
require('dotenv').config({
  path: path.resolve(__dirname, '../../test', '.env')
})
