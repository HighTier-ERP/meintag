import { nanoid } from 'nanoid'
import { Colors, putThousandsSeparators } from '../../../services'
import './pie-chart.scss'
import ReturnPercent from './return-percent'

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

const PieChart = ({
  data,
  containerWidth,
  chartWrapperWidth,
  borderWidth = '80px',
  chartWidth = '320px',
  valueType,
  limit,
  sumLimit,
  hideSum,
}: any) => {
  var topResults: any = null

  if (data) {
    topResults = data.slice(0, limit)
  }

  var numberSumLimit: any = 0
  var numberSumCleanedAll: any = 0
  var numberSumCleaned: any = 0
  var numberSumPercentCleaned: any = 0

  if (topResults) {
    numberSumLimit = topResults.reduce((n: any, { value }: any) => n + value, 0)
    numberSumCleanedAll = data.reduce((n: any, { value }: any) => n + value, 0)
    sumLimit > 0
      ? (numberSumCleaned = numberSumLimit.toFixed(0))
      : (numberSumCleaned = numberSumCleanedAll.toFixed(0))
    sumLimit > 0
      ? (numberSumPercentCleaned = ((numberSumLimit / numberSumCleanedAll) * 100).toFixed(0))
      : (numberSumPercentCleaned = (numberSumCleanedAll / data.length).toFixed(0))
  }

  return (
    <div
      className="chart-wrapper"
      style={{
        '--container-w': `${containerWidth}`,
      }}
    >
      <div
        className="pie-wrapper"
        style={{
          '--w': `${chartWrapperWidth ? chartWrapperWidth : containerWidth}`,
        }}
      >
        {data?.map((item: any, i: any) => (
          <div
            key={i + nanoid()}
            className="pie animate no-round"
            data-content={item.value}
            style={{
              '--p': `${ReturnPercent(i, item.value, numberSumLimit, data)}`,
              '--c': `${Colors[i].color}`,
              '--z': `${-i + data.length}`,
              '--w': `${chartWidth}`,
              '--b': `${borderWidth}`,
            }}
          ></div>
        ))}
      </div>
      {!hideSum && (
        <>
          {valueType !== 'percent' ? (
            <p className="number-sum">
              {numberSumLimit > 0 && `$${putThousandsSeparators(numberSumCleaned, ',')}`}
            </p>
          ) : (
            <p className="number-sum">{numberSumPercentCleaned}%</p>
          )}
        </>
      )}
    </div>
  )
}

export default PieChart
