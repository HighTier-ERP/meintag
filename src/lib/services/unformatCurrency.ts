const usdCurrencyShortCodeMap: any = {
  K: 3, //000
  M: 6, //000,000
  B: 9, //000,000,000
  T: 12, //000,000,000,000
}

function unformatCurrency(value: any) {
  // Test if the currency starts with $
  const currencySymbols = Object.keys(usdCurrencyShortCodeMap)
  let currency = value.trim()
  if (currency.startsWith('$')) {
    currency = currency.substring(1)
    let amountAfterDecimal = 0
    if (currency.includes('.')) {
      amountAfterDecimal = currency.slice(currency.indexOf('.') + 1, currency.length - 1).length
    }
    // find if the currency includes the numbers above
    const symbol = currency[currency.length - 1].toUpperCase()
    if (currencySymbols.includes(symbol)) {
      currency = currency
        .concat('0'.repeat(usdCurrencyShortCodeMap[symbol] - amountAfterDecimal))
        .replace(symbol, '')
        .replace('.', '')
    }
    currency = parseFloat(currency)
  }
  return currency
}

export default unformatCurrency
