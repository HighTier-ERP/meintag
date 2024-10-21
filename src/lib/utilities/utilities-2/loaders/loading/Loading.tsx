import CircularProgress from '../circular-progress'
import './loading.scss'
import classNames from 'classnames'

const Loading = ({ className, short = false, ...props }: any) => {
  return (
    <div
      className={classNames({
        grid: true,
        short: short,
        className,
      })}
    >
      <CircularProgress size="5rem" {...props} />
    </div>
  )
}

export default Loading
