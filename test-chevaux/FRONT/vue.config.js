const path = require('path')
const packageJson = require('./package.json')

const PRODUCTION = process.env.NODE_ENV === 'production'
const DIST_PATH = path.resolve(__dirname, 'dist')
const BUILD_ID = generateHash()
const BUILD_ASSETS = PRODUCTION ? `assets-${BUILD_ID}` : ''

let productionPaths = {}

if (PRODUCTION) {
  productionPaths = {
    outputDir: path.join(DIST_PATH, BUILD_ASSETS),
    publicPath: `${process.env.BASE_URL}${BUILD_ASSETS}`,  
  }
}

module.exports = {
  ...productionPaths,

  devServer: {
    port: 3000
  },

  configureWebpack: (config) => {
    if (PRODUCTION) {
      config.output.filename = 'scripts/[name].js'
    }

    // config.resolve.symlinks = false
  },

  chainWebpack: config => {
    const environment = {
      ...resolveClientEnv(/^APP_/),
      ...resolveClientEnv(/^ASSETS_/),
      VERSION: `"${packageJson.version}"`,
      NODE_ENV: `"${process.env.NODE_ENV}"`,
      BUILD_ID: `"${BUILD_ID}"`,
      BUILD_ASSETS: `"${BUILD_ASSETS}"`,
    }

    // config.module.rule('js')
    //   .include.add(path.resolve(__dirname, 'src')).end()

    // config.module.rule('vue')
    //   .include.add(path.resolve(__dirname, 'src')).end()

    config
      .plugin('define')
      .tap(args => {
        args[0]['process.env'] = {
          ...args[0]['process.env'],
          ...environment,
        }

        return args
      })

    config
      .plugin('html')
      .tap(args => {
        args[0].filename = path.join(DIST_PATH, 'index.html')

        args[0] = {
          ...args[0],
          ...cleanQuotes(environment),
        }

        return args 
      })

    config.module.rule('eslint')
      .pre().include.add(path.resolve(__dirname, 'src')).end()
      .use('eslint-loader')
      .options({
        fix: true
      })
      
    const aliases = {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@core': path.resolve(__dirname, 'src/scripts'),
      '@api': path.resolve(__dirname, 'src/scripts/api'),
      '@composables': path.resolve(__dirname, 'src/scripts/composables'),
      '@utils': path.resolve(__dirname, 'src/scripts/utils'),
      '@constants': path.resolve(__dirname, 'src/scripts/constants'),
      '@layouts': path.resolve(__dirname, 'src/views/layouts'),
      '@pages': path.resolve(__dirname, 'src/views/pages'),
      '@components': path.resolve(__dirname, 'src/views/components'),
      '@bus': path.resolve(__dirname, 'src/scripts/core/bus'),
    }

    for (const alias in aliases) {
      if (Object.prototype.hasOwnProperty.call(aliases, alias)) {
        const targetPath = aliases[alias]

        config.resolve.alias.set(alias, targetPath)
      }
    }

    config.resolve.extensions.add('.scss')
    config.resolve.extensions.add('.styl')

    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },

  css: {
    loaderOptions: {
      
    }
  },
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.join(__dirname, 'src/styles/variables.scss'),
      ],
    })
}

function resolveClientEnv (PREFIX) {
  const env = {}
  Object.keys(process.env).forEach(key => {
    if (PREFIX.test(key) || key === 'NODE_ENV') {
      env[key] = JSON.stringify(process.env[key])
    }
  })

  return env
}

function cleanQuotes (object) {
  const env = {}
  
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      env[key] = object[key].replace(/^"/, '').replace(/"$/, '')
    }
  }

  return env
}

function generateHash () {
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let hash = ""

  for (let i = 0; i < 10; i++) {
    hash += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return hash
}