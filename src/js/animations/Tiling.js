import { h } from 'preact'
import CanvasAnimation from '../global/CanvasAnimation'
import Card from '../global/Card'

/**
 * Animation using rAF with the Canvas API and direct DOM refs
 */

const drawTile = (ctx, frame, x, y, size) => {
  const half = size / 2

  ctx.beginPath()
  ctx.moveTo(x + half, y)
  ctx.lineTo(x + half, y + size)
  ctx.moveTo(x, y + half)
  ctx.lineTo(x + size, y + half)
  ctx.stroke()
}

// Recursively draw tiles from left to right until we fill the width
const drawRow = (ctx, frame, x, y, width, size, gap) => {
  if (x > width + size) return

  drawTile(ctx, frame, x, y, size)
  drawRow(ctx, frame, x + size + gap, y, width, size, gap)
}

// Recursively draw rows from top to bottom until we fill the height
const drawRows = (ctx, frame, x, y, width, height, size, gap) => {
  if (y > height + size) return

  drawRow(ctx, frame, x, y, width, size, gap)
  drawRows(ctx, frame, x, y + size + gap, width, height, size, gap)
}

const Tiling = ({ gap = 0, tileSize }) => {
  const animation = info => {
    drawRows(info.ctx, info.frame, 0, 0, info.width, info.height, tileSize, gap)
  }

  return (
    <Card>
      <CanvasAnimation animation={animation} />
    </Card>
  )
}

export default Tiling
