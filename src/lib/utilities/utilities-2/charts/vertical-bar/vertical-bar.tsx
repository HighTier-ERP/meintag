import React, { useState } from 'react'
import classNames from 'classnames'
import { AlertCircle } from '@untitled-ui/icons-react'
import Link from 'next/link'

import './vertical-bar.scss'
import { Colors } from '../../../services'
import { Modal } from '../../../layout'
import { Button } from '../../../global'
import { nanoid } from 'nanoid'

const VerticalBar = ({ barItems, active, chartType = 'percent' }: any) => {
  const [openDashboardTwoStep, setOpenDashboardTwoStep] = useState(false)
  const [activeModal, setActiveModal] = useState(false)

  const percent = [
    {
      value: '100',
    },
    {
      value: '80',
    },
    {
      value: '60',
    },
    {
      value: '40',
    },
    {
      value: '0',
    },
  ]

  const grades = [
    {
      value: 'A',
    },
    {
      value: 'B',
    },
    {
      value: 'C',
    },
    {
      value: 'D',
    },
    {
      value: 'F',
    },
  ]

  const maturity = [
    {
      value: '5',
    },
    {
      value: '4',
    },
    {
      value: '3',
    },
    {
      value: '2',
    },
    {
      value: '1',
    },
  ]

  const openClickToDashboard = (i: any) => {
    setOpenDashboardTwoStep(true)
    setActiveModal(i)
  }

  return (
    <>
      {barItems.map((item: any, i: any) => (
        <React.Fragment key={i + nanoid()}>
          {item.link && (
            <Modal
              title={`Open ${item.name} Dashboard`}
              shouldShow={openDashboardTwoStep && activeModal === i ? true : false}
              icon={<AlertCircle />}
              onRequestClose={() => {
                setOpenDashboardTwoStep(false)
              }}
            >
              <br />
              <br />
              <br />
              <Button
                type="text"
                btnWidth={'full'}
                onClick={() => setOpenDashboardTwoStep(false)}
                className="set-control-modal__btn set-control-modal__btn-outline"
                color={'outline'}
              >
                Cancel
              </Button>
              <Link href={item.link} className="full-width  text-decoration-none">
                <Button type="text" btnWidth={'full'} className="set-control-modal__btn">
                  View Dashboard
                </Button>
              </Link>
            </Modal>
          )}
        </React.Fragment>
      ))}
      <section className="chart-vert">
        <div className="bar-item backgound">
          <div className="chart-lines">
            {chartType === 'percent' &&
              percent.map((item: any, i: any) => (
                <div key={i} className="column">
                  {item.value}
                </div>
              ))}
            {chartType === 'grades' &&
              grades.map((item: any, i: any) => (
                <div key={i} className="column">
                  {item.value}
                </div>
              ))}
            {chartType === 'maturity' &&
              maturity.map((item: any, i: any) => (
                <div key={i} className="column">
                  {item.value}
                </div>
              ))}
          </div>
        </div>
        <div className="bar-items">
          {barItems.map((item: any, i: any) => (
            <React.Fragment key={i + nanoid()}>
              <div
                className={classNames('vertical-bar-item', i === active ? 'active' : 'not-active')}
                style={{
                  '--column-width': `${item.columnWidth}%`,
                  '--z': `${-i + barItems.length}`,
                }}
              >
                {item.link ? (
                  <>
                    <a onClick={() => openClickToDashboard(i)} className="pointer link-trust">
                      <div className="bar-wrapper" style={{ '--z': `${-i + barItems.length}` }}>
                        {item.bars.map((bar: any, i: any) => (
                          <React.Fragment key={i + nanoid()}>
                            <div
                              className={classNames(
                                i === item.bars.length - 1 ? 'last-bar' : '',
                                'bar',
                              )}
                              style={{
                                '--bar-width': `${bar.percent}${bar.percent > 20 ? '%' : 'px'}`,
                                '--bar-color': bar.color ? bar.color : Colors[i].color,
                              }}
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
                          </React.Fragment>
                        ))}
                      </div>
                      <p className="bar-title">{item.name}</p>
                    </a>
                  </>
                ) : (
                  <>
                    <div className="bar-wrapper" style={{ '--z': `${-i + barItems.length}` }}>
                      {item.bars.map((bar: any, i: any) => (
                        <React.Fragment key={i + nanoid()}>
                          <div
                            className={classNames(
                              i === item.bars.length - 1 ? 'last-bar' : '',
                              'bar',
                            )}
                            style={{
                              '--bar-width': `${bar.percent}${bar.percent > 20 ? '%' : 'px'}`,
                              '--bar-color': bar.color ? bar.color : Colors[i].color,
                            }}
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
                        </React.Fragment>
                      ))}
                    </div>
                    <p className="bar-title">{item.name}</p>
                  </>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  )
}

export default VerticalBar
