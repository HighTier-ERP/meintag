import classNames from 'classnames'
import { Colors } from '../../../services'
import './horizontal-bar.scss'
import { nanoid } from 'nanoid'

const HorizontalBar = ({ barItems }: any) => {
  return (
    <>
      <div className="chart" data-testid="Horizontal-Bar">
        <div className="bar-item backgound">
          <div className="widget-section__title"></div>
          <div className="chart-lines">
            <div className="column">0</div>
            <div className="column">10</div>
            <div className="column">20</div>
            <div className="column">30</div>
            <div className="column">40</div>
            <div className="column">50</div>
            <div className="column">60</div>
            <div className="column">70</div>
            <div className="column">80</div>
            <div className="column">90</div>
            <div className="column">100</div>
          </div>
        </div>
        <div className="bar-items">
          {barItems?.map((item: any, i: any) => (
            <div className="bar-item" key={i + nanoid()}>
              <div className="widget-section__title">
                <p>{item.name}</p>
                <p className="widget__section-title-bold">{item.percent}</p>
              </div>
              <div className="bar-wrapper">
                {item.bars[0].percent >= 100 && (
                  <div
                    className="last-bar bar"
                    style={{
                      '--bar-width': `${item.bars[0].percent}%`,
                      '--bar-color': Colors[0].color,
                    }}
                  >
                    {item.bars[0]?.tooltip && (
                      <div className="last-bar-tooltip'">{item.bars[0].tooltip}</div>
                    )}
                  </div>
                )}
                {item.bars[0].percent <= 0 && (
                  <div
                    className="last-bar bar"
                    style={{
                      '--bar-width': `${item.bars[1].percent}%`,
                      '--bar-color': Colors[1].color,
                    }}
                  >
                    {item.bars[1]?.tooltip && (
                      <div className="last-bar-tooltip'">{item.bars[1].tooltip}</div>
                    )}
                  </div>
                )}
                {item.bars[0].percent > 0 && item.bars[0].percent < 100 && (
                  <>
                    {item.bars.map((bar: any, i: any) => (
                      <div
                        key={i + nanoid()}
                        className={classNames(i === item.bars.length - 1 ? 'last-bar' : '', 'bar')}
                        style={{ '--bar-width': `${bar.percent}%`, '--bar-color': Colors[i].color }}
                      >
                        {bar?.tooltip && (
                          <div
                            className={classNames(
                              i === item.bars.length - 1 ? 'last-bar-tooltip' : 'bar-tooltip',
                            )}
                          >
                            {bar.tooltip}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HorizontalBar
