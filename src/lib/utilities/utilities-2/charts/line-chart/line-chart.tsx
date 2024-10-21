import * as d3 from 'd3'
import { format } from 'date-fns'
import { CSSProperties } from 'react'
import './line-chart.scss'
import LegendItem from '../../legend-item/legend-item'
import { Colors, putThousandsSeparators } from '../../../services'
import { nanoid } from 'nanoid'

const LineChart = ({
  data,
  data2,
  data3,
  dataSetLabel,
  dataSetLabel2,
  dataSetLabel3,
  hideX,
}: any) => {
  const dataChecked: { value: number; time: Date }[] = data

  const data2Checked: { value: number; time: Date }[] = data2

  const data3Checked: { value: number; time: Date }[] = data3

  const month = format(new Date(), 'MMM')

  const xScale = d3
    .scaleTime()
    .domain([dataChecked[0]?.time, data[data.length - 1]?.time])
    .range([0, 100])

  const xScale2 = d3
    .scaleTime()
    .domain([data2Checked[0]?.time, data[data.length - 1]?.time])
    .range([0, 100])

  const xScale3 = d3
    .scaleTime()
    .domain([data3Checked[0]?.time, data[data.length - 1]?.time])
    .range([0, 100])

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataChecked.map((d) => d.value)) ?? 0])
    .range([100, 0])

  const yScale2 = d3
    .scaleLinear()
    .domain([0, d3.max(data2Checked.map((d) => d.value)) ?? 0])
    .range([100, 0])

  const yScale3 = d3
    .scaleLinear()
    .domain([0, d3.max(data3Checked.map((d) => d.value)) ?? 0])
    .range([100, 0])

  const line = d3
    .line<(typeof data)[number]>()
    .x((d) => xScale(d.time))
    .y((d) => yScale(d.value))

  const d = line(dataChecked)

  const d2: any = line(data2Checked)

  const d_3: any = line(data3Checked)

  if (!d) {
    return null
  }

  if (!d && !d2) {
    return null
  }

  if (!d && !d2 && !d_3) {
    return null
  }

  return (
    <div className="chart-line-dot">
      <div
        className="container"
        style={
          {
            '--marginTop': '6px',
            '--marginRight': '8px',
            '--marginBottom': '25px',
            '--marginLeft': '25px',
          } as CSSProperties
        }
      >
        {/* X axis */}
        <svg
          className="absolute inset-0
          overflow-visible
        "
          style={{
            height: 'calc(100% - 6px)',
            width: 'calc(100% - 25px - 8px)',
            transform: 'translate(25px,6px) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)',
          }}
        >
          {dataChecked.map((day: any, i: any) => (
            <g
              key={i + nanoid()}
              className="overflow-visible font-medium text-gray-x"
              style={{
                transform: 'translate(33px,6px) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)',
              }}
            >
              <text
                x={`${xScale(day?.time)}%`}
                y="100%"
                textAnchor={i === 0 ? 'start' : i === data.length - 1 ? 'end' : 'middle'}
                fill="currentColor"
              >
                {!hideX ? <>{format(day?.time, 'MMM')}</> : <></>}
              </text>
            </g>
          ))}
          {data2Checked.map((day: any, i: any) => (
            <g
              key={i + nanoid()}
              className="overflow-visible font-medium text-gray-x"
              style={{
                transform: 'translate(33px,6px) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)',
              }}
            >
              <text
                x={`${xScale2(day?.time)}%`}
                y="100%"
                textAnchor={i === 0 ? 'start' : i === data.length - 1 ? 'end' : 'middle'}
                fill="currentColor"
              >
                {format(day?.time, 'MMM')}
              </text>
            </g>
          ))}
          {data3Checked.map((day: any, i: any) => (
            <g
              key={i + nanoid()}
              className="overflow-visible font-medium text-gray-x"
              style={{
                transform: 'translate(33px,6px) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)',
              }}
            >
              <text
                x={`${xScale3(day?.time)}%`}
                y="100%"
                textAnchor={i === 0 ? 'start' : i === data.length - 1 ? 'end' : 'middle'}
                fill="currentColor"
              >
                {format(day?.time, 'MMM')}
              </text>
            </g>
          ))}
        </svg>

        {/* Y axis */}
        <svg
          className="absolute inset-0
          overflow-visible
        "
          style={{
            height: 'calc(100% - 6px - 25px)',
            transform: 'translate(25px,6px) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)',
          }}
        >
          <g
            style={{
              transform: 'translate(1rem, 0px) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)',
            }}
          >
            {yScale
              .ticks(8)
              .map(yScale.tickFormat(8, 'd'))
              .map((value, i) => (
                <text
                  key={i + nanoid()}
                  y={`${yScale(+value)}%`}
                  alignmentBaseline="middle"
                  textAnchor="end"
                  className="text-xs tabular-nums text-gray-600"
                  fill="currentColor"
                >
                  {putThousandsSeparators(value, ',')}
                </text>
              ))}
            {yScale2
              .ticks(8)
              .map(yScale.tickFormat(8, 'd'))
              .map((value, i) => (
                <text
                  key={i + nanoid()}
                  y={`${yScale(+value)}%`}
                  alignmentBaseline="middle"
                  textAnchor="end"
                  className="text-xs tabular-nums text-gray-600"
                  fill="currentColor"
                >
                  {putThousandsSeparators(value, ',')}
                </text>
              ))}
            {yScale3
              .ticks(8)
              .map(yScale.tickFormat(8, 'd'))
              .map((value, i) => (
                <text
                  key={i + nanoid()}
                  y={`${yScale(+value)}%`}
                  alignmentBaseline="middle"
                  textAnchor="end"
                  className="text-xs tabular-nums text-gray-600"
                  fill="currentColor"
                >
                  {putThousandsSeparators(value, ',')}
                </text>
              ))}
          </g>
        </svg>

        {/* Chart area */}
        <svg
          className="absolute inset-0
          overflow-visible
        "
          style={{
            height: 'calc(100% - 6px - 25px)',
            width: 'calc(100% - 25px - 8px)',
            transform: 'translate(60px,6px) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)',
          }}
        >
          <svg viewBox="0 0 100 100" className="overflow-visible" preserveAspectRatio="none">
            {/* Grid lines */}
            {yScale
              .ticks(8)
              .map(yScale.tickFormat(8, 'd'))
              .map((active, i) => (
                <g
                  transform={`translate(0,${yScale(+active)})`}
                  className="text-gray-400"
                  key={i + nanoid()}
                >
                  <line
                    x1={0}
                    x2={100}
                    stroke="currentColor"
                    strokeWidth={0.5}
                    vectorEffect="non-scaling-stroke"
                  />
                </g>
              ))}

            {yScale2
              .ticks(8)
              .map(yScale.tickFormat(8, 'd'))
              .map((active, i) => (
                <g
                  transform={`translate(0,${yScale(+active)})`}
                  className="text-gray-400"
                  key={i + nanoid()}
                >
                  <line
                    x1={0}
                    x2={100}
                    stroke="currentColor"
                    strokeWidth={0.5}
                    vectorEffect="non-scaling-stroke"
                  />
                </g>
              ))}

            {yScale3
              .ticks(8)
              .map(yScale.tickFormat(8, 'd'))
              .map((active, i) => (
                <g
                  transform={`translate(0,${yScale(+active)})`}
                  className="text-gray-400"
                  key={i + nanoid()}
                >
                  <line
                    x1={0}
                    x2={100}
                    stroke="currentColor"
                    strokeWidth={0.5}
                    vectorEffect="non-scaling-stroke"
                  />
                </g>
              ))}

            {/* Line */}
            <path
              d={d}
              fill="none"
              className="line-1"
              stroke="currentColor"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />

            {/* Line */}
            <path
              d={d2}
              fill="none"
              className="line-2"
              stroke="currentColor"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />

            {/* Line */}
            <path
              d={d_3}
              fill="none"
              className="line-3"
              stroke="currentColor"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />

            {/* Circles */}
            {dataChecked.map((d) => (
              <path
                key={d?.time.toString() + nanoid()}
                d={`M ${xScale(d.time)} ${yScale(d.value)} l 0.0001 0`}
                vectorEffect="non-scaling-stroke"
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
                stroke="currentColor"
                className="line-1"
              />
            ))}

            {data2Checked.map((d2) => (
              <path
                key={d2?.time.toString() + nanoid()}
                d={`M ${xScale(d2.time)} ${yScale(d2.value)} l 0.0001 0`}
                vectorEffect="non-scaling-stroke"
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
                stroke="currentColor"
                className="line-2"
              />
            ))}

            {data3Checked.map((d2) => (
              <path
                key={d2?.time.toString() + nanoid()}
                d={`M ${xScale(d2.time)} ${yScale(d2.value)} l 0.0001 0`}
                vectorEffect="non-scaling-stroke"
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
                stroke="currentColor"
                className="line-3"
              />
            ))}
          </svg>
        </svg>
      </div>
      {hideX && (
        <div className="X-label">
          <p className="text-gray-x">
            {dataSetLabel} changes from May to {month}
          </p>
        </div>
      )}
      <div className="legend-bar-line">
        {dataSetLabel && (
          <LegendItem
            name={dataSetLabel}
            dotColor={Colors[0].color}
            outerBorder={Colors[0].color}
          />
        )}
        {dataSetLabel2 && (
          <LegendItem
            name={dataSetLabel2}
            dotColor={Colors[1].color}
            outerBorder={Colors[1].color}
          />
        )}
        {dataSetLabel3 && (
          <LegendItem
            name={dataSetLabel3}
            dotColor={Colors[2].color}
            outerBorder={Colors[2].color}
          />
        )}
      </div>
    </div>
  )
}

export default LineChart
