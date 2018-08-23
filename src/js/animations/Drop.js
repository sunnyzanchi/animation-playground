import { h } from 'preact'
import CanvasAnimation from '../global/CanvasAnimation'
import Card from '../global/Card'

const STEP = 45
const { sin } = Math

const getRadius = (height, width) =>
  Math.sqrt(height ** 2 + width ** 2) / 2

// TODO: Make this deterministic
const oneOf = list =>
  list[Math.round(Math.random() * list.length)]

const colors = [
  '#ffa000',
  '#e64a19',
  '#ffeb3b',
  '#43a047',
  '#1e88e5',
  '#43a047',
]

const Drop = ({ baseWidth }) => {
  const animation = info => {
    const { ctx, frame, height, width } = info
    const x = width / 2
    const y = height / 2
    const maxRadius = getRadius(height, width)

    const r = -Math.pow(sin(frame / STEP), 12 / 3) * maxRadius + maxRadius

    // TODO: Get this from the frame value to be exact
    if (Math.floor(r) === 0) {
      ctx.fillStyle = oneOf(colors)
    }
    ctx.beginPath()
    ctx.ellipse(x, y, r, r, 0, 0, Math.PI * 2)
    ctx.fill()
  }

  return (
    <Card>
      <CanvasAnimation animation={animation} />
    </Card>
  )
}

export default Drop
