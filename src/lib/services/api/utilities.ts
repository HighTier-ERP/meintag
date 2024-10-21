export const setBaseUrl = (env: any, overwrite: any) => {
  if (typeof window !== 'undefined') {
    var localhost = 'http://localhost:3000'
    var origin = window.location.origin
    var cleanOrigin = origin.replace(/^https?:\/\//, '')
    var removeSubDomain = cleanOrigin.replace('app.', '')
    var removeBetaSubDomain = removeSubDomain.replace('beta.', '')
    var apiLink = 'https://api.' + removeBetaSubDomain + '/'

    if (overwrite) {
      return overwrite
    }

    if (env === 'development' && origin === localhost) {
      return 'https://api.dev.crmtm.net/'
    }

    if (env === 'development' && origin !== localhost) {
      return apiLink
    }

    if (env === 'testing') {
      return apiLink
    }

    if (env === 'staging') {
      return apiLink
    }
    if (env === 'production') {
      return apiLink
    }
  }
}
