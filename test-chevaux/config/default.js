module.exports = {
  protocol: 'https',
  port: 8081,

  authentication: {
    entity: 'user',
    service: 'users',
    secret: process.env.AUTH_SECRET,
    authStrategies: [
      'jwt',
      'local',
    ],
    jwtOptions: {
      header: { typ: 'access' },
      audience: process.env.API_URL,
      issuer: 'freebe',
      algorithm: 'HS256',
      expiresIn: '1d'
    },
    local: {
      usernameField: 'email',
      passwordField: 'password',
      errorMessage: 'Mauvais email et/ou mot de passe'
    },
  },

  paginate: {
    default: 30,
    max: 100
  },
}
