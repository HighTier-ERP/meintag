const ReturnPercent = (i: any, value: any, sum: any, data: any) => {
  const valuePercent = (value / sum) * 100
  const data0Percent = data[0] ? (data[0].value / sum) * 100 : 0.0
  const data1Percent = data[1] ? (data[1].value / sum) * 100 : 0.0
  const data2Percent = data[2] ? (data[2].value / sum) * 100 : 0.0
  const data3Percent = data[3] ? (data[3].value / sum) * 100 : 0.0
  const data4Percent = data[4] ? (data[4].value / sum) * 100 : 0.0
  const data5Percent = data[5] ? (data[5].value / sum) * 100 : 0.0
  const data6Percent = data[6] ? (data[6].value / sum) * 100 : 0.0
  const data7Percent = data[7] ? (data[7].value / sum) * 100 : 0.0
  const data8Percent = data[8] ? (data[8].value / sum) * 100 : 0.0
  const data9Percent = data[9] ? (data[9].value / sum) * 100 : 0.0
  const data10Percent = data[10] ? (data[10].value / sum) * 100 : 0.0
  const data11Percent = data[11] ? (data[11].value / sum) * 100 : 0.0
  const data12Percent = data[12] ? (data[12].value / sum) * 100 : 0.0
  const data13Percent = data[13] ? (data[13].value / sum) * 100 : 0.0
  const data14Percent = data[14] ? (data[14].value / sum) * 100 : 0.0
  const data15Percent = data[15] ? (data[15].value / sum) * 100 : 0.0
  const data16Percent = data[16] ? (data[16].value / sum) * 100 : 0.0
  const data17Percent = data[17] ? (data[17].value / sum) * 100 : 0.0
  const data18Percent = data[18] ? (data[18].value / sum) * 100 : 0.0
  const data19Percent = data[19] ? (data[19].value / sum) * 100 : 0.0
  const data20Percent = data[20] ? (data[20].value / sum) * 100 : 0.0
  const data21Percent = data[21] ? (data[21].value / sum) * 100 : 0.0
  const data22Percent = data[22] ? (data[22].value / sum) * 100 : 0.0
  const data23Percent = data[23] ? (data[23].value / sum) * 100 : 0.0
  const data24Percent = data[24] ? (data[24].value / sum) * 100 : 0.0
  const data25Percent = data[25] ? (data[25].value / sum) * 100 : 0.0
  const data26Percent = data[26] ? (data[26].value / sum) * 100 : 0.0
  const data27Percent = data[27] ? (data[27].value / sum) * 100 : 0.0
  const data28Percent = data[28] ? (data[28].value / sum) * 100 : 0.0
  const data29Percent = data[29] ? (data[29].value / sum) * 100 : 0.0
  const data30Percent = data[30] ? (data[30].value / sum) * 100 : 0.0

  if (i === 0) {
    return valuePercent.toFixed(0)
  }
  if (i === 1) {
    return (data0Percent + valuePercent).toFixed(0)
  }
  if (i === 2) {
    return (data1Percent + data0Percent + valuePercent).toFixed(0)
  }
  if (i === 3) {
    return (data2Percent + data1Percent + data0Percent + valuePercent).toFixed(0)
  }
  if (i === 4) {
    return (data3Percent + data2Percent + data1Percent + data0Percent + valuePercent).toFixed(0)
  }
  if (i === 5) {
    return (
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 6) {
    return (
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 7) {
    return (
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 8) {
    return (
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 9) {
    return (
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 10) {
    return (
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 11) {
    return (
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 12) {
    return (
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 13) {
    return (
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 14) {
    return (
      data13Percent +
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 15) {
    return (
      data14Percent +
      data13Percent +
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 16) {
    return (
      data15Percent +
      data14Percent +
      data13Percent +
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 17) {
    return (
      data16Percent +
      data15Percent +
      data14Percent +
      data13Percent +
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 18) {
    return (
      data17Percent +
      data16Percent +
      data15Percent +
      data14Percent +
      data13Percent +
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }

  if (i === 19) {
    return (
      data18Percent +
      data17Percent +
      data16Percent +
      data15Percent +
      data14Percent +
      data13Percent +
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }

  if (i === 20) {
    return (
      data19Percent +
      data18Percent +
      data17Percent +
      data16Percent +
      data15Percent +
      data14Percent +
      data13Percent +
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }

  if (i === 21) {
    return (
      data20Percent +
      data19Percent +
      data18Percent +
      data17Percent +
      data16Percent +
      data15Percent +
      data14Percent +
      data13Percent +
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }

  if (i === 22) {
    return (
      data21Percent +
      data20Percent +
      data19Percent +
      data18Percent +
      data17Percent +
      data16Percent +
      data15Percent +
      data14Percent +
      data13Percent +
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }

  if (i === 23) {
    return (
      data22Percent +
      data21Percent +
      data20Percent +
      data19Percent +
      data18Percent +
      data17Percent +
      data16Percent +
      data15Percent +
      data14Percent +
      data13Percent +
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }

  if (i === 24) {
    return (
      data23Percent +
      data22Percent +
      data21Percent +
      data20Percent +
      data19Percent +
      data18Percent +
      data17Percent +
      data16Percent +
      data15Percent +
      data14Percent +
      data13Percent +
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 25) {
    return (
      data24Percent +
      data23Percent +
      data22Percent +
      data21Percent +
      data20Percent +
      data19Percent +
      data18Percent +
      data17Percent +
      data16Percent +
      data15Percent +
      data14Percent +
      data13Percent +
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 26) {
    return (
      data25Percent +
      data24Percent +
      data23Percent +
      data22Percent +
      data21Percent +
      data20Percent +
      data19Percent +
      data18Percent +
      data17Percent +
      data16Percent +
      data15Percent +
      data14Percent +
      data13Percent +
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 27) {
    return (
      data26Percent +
      data25Percent +
      data24Percent +
      data23Percent +
      data22Percent +
      data21Percent +
      data20Percent +
      data19Percent +
      data18Percent +
      data17Percent +
      data16Percent +
      data15Percent +
      data14Percent +
      data13Percent +
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 28) {
    return (
      data27Percent +
      data26Percent +
      data25Percent +
      data24Percent +
      data23Percent +
      data22Percent +
      data21Percent +
      data20Percent +
      data19Percent +
      data18Percent +
      data17Percent +
      data16Percent +
      data15Percent +
      data14Percent +
      data13Percent +
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 29) {
    return (
      data28Percent +
      data27Percent +
      data26Percent +
      data25Percent +
      data24Percent +
      data23Percent +
      data22Percent +
      data21Percent +
      data20Percent +
      data19Percent +
      data18Percent +
      data17Percent +
      data16Percent +
      data15Percent +
      data14Percent +
      data13Percent +
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 30) {
    return (
      data29Percent +
      data28Percent +
      data27Percent +
      data26Percent +
      data25Percent +
      data24Percent +
      data23Percent +
      data22Percent +
      data21Percent +
      data20Percent +
      data19Percent +
      data18Percent +
      data17Percent +
      data16Percent +
      data15Percent +
      data14Percent +
      data13Percent +
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
  if (i === 31) {
    return (
      data30Percent +
      data29Percent +
      data28Percent +
      data27Percent +
      data26Percent +
      data25Percent +
      data24Percent +
      data23Percent +
      data22Percent +
      data21Percent +
      data20Percent +
      data19Percent +
      data18Percent +
      data17Percent +
      data16Percent +
      data15Percent +
      data14Percent +
      data13Percent +
      data12Percent +
      data11Percent +
      data10Percent +
      data9Percent +
      data8Percent +
      data7Percent +
      data6Percent +
      data5Percent +
      data4Percent +
      data3Percent +
      data2Percent +
      data1Percent +
      data0Percent +
      valuePercent
    ).toFixed(0)
  }
}

export default ReturnPercent
