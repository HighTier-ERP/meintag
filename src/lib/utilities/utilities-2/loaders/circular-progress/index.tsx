import './circular-progress.scss'

const CircularProgress = ({ size, color }: any) => {
  return (
    <div className="lds-default" style={{ '--height': `${size}`, '--width': size, color: color }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default CircularProgress
