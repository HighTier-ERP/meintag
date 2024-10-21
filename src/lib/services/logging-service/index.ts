const Style: any = {
  base: ['color: #eee', 'background-color: #444', 'padding: 2px 4px', 'border-radius: 2px'],
  error: ['background-color: #CC0000'],
  warning: ['background-color: #ffeb3b', 'color: #000'],
  debug: ['background-color: #9922ff'],
  info: ['background-color: #2196F3'],
  comment: ['background-color: #4CAF50'],
  orange: ['background-color: #ff8800', 'color: #000'],
}

export const Log = {
  log(_text: string | string[], extra = [], data: any[]) {
    const logData = JSON.parse(JSON.stringify(data))
    let style: any = Style.base.join(';') + ';'
    style += extra.join(';') // Add any additional styles
    if (typeof logData === 'object' && !Array.isArray(logData) && logData !== null) {
      if (
        typeof logData.data === 'object' &&
        !Array.isArray(logData.data) &&
        logData.data !== null
      ) {
        // eslint-disable-next-line prefer-const
        for (let key in logData.data) {
          if (key.includes('password')) {
            logData.data[key] = '[Private]'
          }
        }
      }
    }
  },
  del(...data: any) {
    this.log('DeleteMe:', Style?.orange, data) //The only DeleteMe line you do not delete
  },
  grey(obj: any) {
    this.log(`${obj.label}:`, Style.base, obj.data)
  },
  v(...data: any) {
    this.log('Verbose:', Style.base, data)
  },
  red(obj: { label: any; data: any[] }) {
    this.log(`${obj.label}:`, Style.error, obj.data)
  },
  e(...data: any) {
    this.log('Error:', Style.error, data)
  },
  error(...data: any) {
    this.log('Error:', Style.error, data)
  },
  crit(...data: any) {
    this.log('CRITICAL:', Style.error, data)
  },
  fatal(...data: any) {
    this.log('FATAL:', Style.error, data)
  },
  f(...data: any) {
    this.log('FATAL:', Style.error, data)
  },
  yellow(obj: { label: any; data: any[] }) {
    this.log(`${obj.label}:`, Style.warning, obj.data)
  },
  w(...data: any) {
    this.log('Warning:', Style.warning, data)
  },
  warn(...data: any) {
    this.log('Warning:', Style.warning, data)
  },
  readme(...data: any) {
    this.log('ReadMe:', Style.warning, data)
  },
  purple(obj: { label: any; data: any[] }) {
    this.log(`${obj.label}:`, Style.debug, obj.data)
  },
  d(...data: any) {
    this.log('Debug:', Style.debug, data)
  },
  debug(...data: any) {
    this.log('Debug:', Style.debug, data)
  },
  todo(...data: any) {
    this.log('ToDo:', Style.debug, data)
  },
  blue(obj: { label: any; data: any[] }) {
    this.log(`${obj.label}:`, Style.info, obj.data)
  },
  i(...data: any) {
    this.log('Info:', Style.info, data)
  },
  info(...data: any) {
    this.log('Info:', Style.info, data)
  },
  green(obj: { label: any; data: any[] }) {
    this.log(`${obj.label}:`, Style.comment, obj.data)
  },
  c(...data: any) {
    this.log('Comment:', Style.comment, data)
  },
  comment(...data: any) {
    this.log('Comment:', Style.comment, data)
  },
  n(...data: any) {
    this.log('Note:', Style.comment, data)
  },
  note(...data: any) {
    this.log('Comment:', Style.comment, data)
  },
}
