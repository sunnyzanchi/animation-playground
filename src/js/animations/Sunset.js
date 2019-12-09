import { h } from 'preact'
import roundedRect from 'rounded-rect'
import CanvasAnimation from '../global/CanvasAnimation'
import Card from '../global/Card'

const colors = [
  '#F57F17',
  '#F9A825',
  '#FBC02D',
  '#FDD835',
  '#FFEB3B',
  '#FFEE58',
  '#FFF176',
  '#FFF59D',
  '#FFF9C4',
  '#FFFDE7',
]

/**
 * Port of an old Processing animation using rAF with the Canvas API
 */

const Sunset = () => {
  const animation = ({ ctx, frame, height, width }) => {
    // Move to center
    ctx.translate(width / 2, height / 2)

    colors.forEach((color, i) => {
      const size = 250 - i * 10
      ctx.rotate((Math.PI * frame) / 480)
      ctx.fillStyle = color
      roundedRect(ctx, 0 - size / 2, 0 - size / 2, size, size, 10)
      ctx.fill()
    })

    // This is necessary so the rotations don't compound between frames
    ctx.setTransform(1, 0, 0, 1, 0, 0)
  }

  return (
    <Card>
      <CanvasAnimation animation={animation} />
    </Card>
  )
}

export default Sunset
