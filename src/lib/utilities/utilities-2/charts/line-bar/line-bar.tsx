import classNames from 'classnames'
import { Colors } from '../../../services'
import './line-bar.scss'
import { nanoid } from 'nanoid'

const LineBar = ({ name, data, bars, percent }: any) => {
  return (
    <section className="chart-line">
      <div className="bar-item">
        {name && (
          <div className="widget-section__title">
            <p>{name}</p>
          </div>
        )}
        {bars ? (
          <div className="bar-wrapper">
            {bars[0].percent >= 100 && (
              <div
                className="last-bar bar"
                style={{ '--bar-width': `${bars[0].percent}%`, '--bar-color': Colors[0].color }}
              >
                {bars[0]?.tooltip && <div className="last-bar-tooltip'">{bars[0].tooltip}</div>}
              </div>
            )}

            {bars[0].percent <= 0 && (
              <div
                className="last-bar bar"
                style={{ '--bar-width': `${bars[1].percent}%`, '--bar-color': Colors[1].color }}
              >
                {bars[1]?.tooltip && <div className="last-bar-tooltip'">{bars[1].tooltip}</div>}
              </div>
            )}
            {bars[0].percent > 0 && bars[0].percent < 100 && (
              <>
                {bars.map((item: any, i: any) => (
                  <div
                    key={i + nanoid()}
                    className={classNames(i === bars.length - 1 ? 'last-bar' : '', 'bar')}
                    style={{ '--bar-width': `${item.percent}%`, '--bar-color': Colors[i].color }}
                  >
                    {item?.tooltip && (
                      <div
                        className={classNames(
                          i === bars.length - 1 ? 'last-bar-tooltip' : 'bar-tooltip',
                        )}
                      >
                        {item.tooltip}
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        ) : (
          <></>
        )}
        {data ? (
          <p className="widget__section-title-bold">{(data / 5) * 100}%</p>
        ) : (
          <>{percent ? <p className="widget__section-title-bold">{percent}</p> : <></>}</>
        )}
      </div>
    </section>
  )
}

export default LineBar
