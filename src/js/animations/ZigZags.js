import { h } from 'preact'
import CanvasAnimation from '../global/CanvasAnimation'
import Card from '../global/Card'

/**
 * Animation using rAF with the Canvas API and direct DOM refs
 */

const ZigZags = ({ baseWidth }) => {
  const animation = info => {
    drawZigZags(info, info.frame)
    drawZigZagsVert(info, info.frame)
  }

  const drawLine = (info, x1, y1) => {
    const { ctx, height } = info
    const x2 = x1 + baseWidth
    const y2 = y1 + baseWidth

    ctx.lineTo(x1, y2)
    ctx.lineTo(x2, y2)

    if (y2 > height) return
    drawLine(info, x2, y2)
  }

  const drawZigZags = (info, frame, x1 = 0) => {
    const { ctx, width } = info
    const x2 = x1 + baseWidth * 2

    // If lineWidth is set <= 0, it just sets to 1, but we want essentially a non-existent line
    ctx.lineWidth = Math.max(7 * Math.sin(frame / 20) + 7, 0.0001)
    ctx.strokeStyle = `hsl(${frame / 5}, 90%, 70%)`

    ctx.beginPath()
    ctx.moveTo(x1, 0)
    drawLine(info, x1, 0)
    ctx.stroke()

    if (x2 > width) return
    drawZigZags(info, frame + 6, x2)
  }

  // Can probably abstract this more better
  const drawZigZagsVert = (info, frame, y1 = 0) => {
    const { ctx, height } = info
    const y2 = y1 + baseWidth * 2
    ctx.strokeStyle = `hsl(${frame / 5}, 90%, 70%)`

    ctx.lineWidth = Math.max(7 * Math.sin(frame / 20) + 7, 0.0001)
    ctx.beginPath()
    ctx.moveTo(0, y1)
    drawLine(info, 0, y1)
    ctx.stroke()

    if (y2 > height) return
    drawZigZagsVert(info, frame - 6, y2)
  }

  return (
    <Card>
      <CanvasAnimation animation={animation} />
    </Card>
  )
}

export default ZigZags
