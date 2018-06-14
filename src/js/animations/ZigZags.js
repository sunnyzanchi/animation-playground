import { h, Component } from 'preact'
import Card from '../global/Card'

class ZigZags extends Component {
  frame = 0

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d')
    this.height = this.canvas.height
    this.width = this.canvas.width

    this.ctx.translate(0.5, 0.5)
    requestAnimationFrame(this.animation)
  }

  animation = () => {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.drawZigZags(this.frame)
    this.drawZigZagsVert(this.frame)

    this.frame += 1
    requestAnimationFrame(this.animation)
  }

  drawLine = (x1, y1) => {
    const x2 = x1 + this.props.baseWidth
    const y2 = y1 + this.props.baseWidth

    this.ctx.lineTo(x1, y2)
    this.ctx.lineTo(x2, y2)

    if (y2 > this.height) return
    this.drawLine(x2, y2)
  }

  drawZigZags = (frame, x1 = 0) => {
    const x2 = x1 + this.props.baseWidth * 2

    // If lineWidth is set <= 0, it just sets to 1, but we want essentially a non-existent line
    this.ctx.lineWidth = Math.max(7 * Math.sin(frame / 20) + 7, 0.0001)
    this.ctx.strokeStyle = `hsl(${frame / 5}, 90%, 70%)`

    this.ctx.beginPath()
    this.ctx.moveTo(x1, 0)
    this.drawLine(x1, 0)
    this.ctx.stroke()

    if (x2 > this.width) return
    this.drawZigZags(frame + 6, x2)
  }

  // Can probably abstract this more better
  drawZigZagsVert = (frame, y1 = 0) => {
    const y2 = y1 + this.props.baseWidth * 2
    this.ctx.strokeStyle = `hsl(${frame / 5}, 90%, 70%)`

    this.ctx.lineWidth = Math.max(7 * Math.sin(frame / 20) + 7, 0.0001)
    this.ctx.beginPath()
    this.ctx.moveTo(0, y1)
    this.drawLine(0, y1)
    this.ctx.stroke()

    if (y2 > this.height) return
    this.drawZigZagsVert(frame - 6, y2)
  }

  render() {
    return (
      <Card>
        <canvas height={350} ref={el => (this.canvas = el)} width={350} />
      </Card>
    )
  }
}

export default ZigZags
