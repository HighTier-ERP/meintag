import { Laptop01, Minimize01, Monitor01, Phone02, Tablet01 } from '@untitled-ui/icons-react'
import Frame from 'react-frame-component'

import classNames from 'classnames'
import styles from '../../styles/styles'
const CanvasItem = ({ children, title, deviceSize, setDeviceSize }: any) => {
  return (
    <div className={classNames('canvas-item')}>
      <div className="canvas-item__header">
        {title}{' '}
        <div className="d-flex gap-16 pointer">
          <Phone02 onClick={() => setDeviceSize('phone')} />{' '}
          <Tablet01 onClick={() => setDeviceSize('tablet')} />{' '}
          <Laptop01 onClick={() => setDeviceSize('laptop')} />{' '}
          <Monitor01 onClick={() => setDeviceSize('large')} />{' '}
          {deviceSize !== 'unset' && <Minimize01 onClick={() => setDeviceSize('unset')} />}
        </div>
      </div>
      <div
        className={classNames(
          'canvas-item__body',
          deviceSize === 'large' && 'device-large',
          deviceSize === 'laptop' && 'device-laptop',
          deviceSize === 'tablet' && 'device-tablet',
          deviceSize === 'phone' && 'device-phone',
        )}
      >
        <Frame
          head={
            <>
              <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet"
              ></link>
              <style>{styles}</style>
            </>
          }
        >
          <div>{children}</div>
        </Frame>
      </div>
    </div>
  )
}

export default CanvasItem
