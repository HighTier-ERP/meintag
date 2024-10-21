const overwrite = (overwriteKey: any) => {
  switch (overwriteKey) {
    case 'dev':
      return 'https://api.dev.crmtm.net/'
    case 'staging':
      return 'https://api.staging.crmtm.net/'
    case 'prod':
      return 'https://api.crmtm.net/'
    default:
      return null
  }
}

export default overwrite
