import { h, Component } from 'preact'
import Card from '../global/Card'

/**
 * Animation using rAF with the Canvas API and direct DOM refs
 */

class Triangles extends Component {
  frame = 0;
  componentDidMount() {
    this.ctx = this.canvas.getContext('2d')
    requestAnimationFrame(this.animation)
  }

  animation = () => {
    const { cos, sin } = Math
    const { ctx, frame } = this

    const x1 = 150 + cos(frame / 60) * 50
    const y1 = 150 + sin(frame / 60) * 50

    const x2 = 150 + cos(-frame / 60) * 50
    const y2 = 150 + sin(-frame / 60) * 50

    ctx.clearRect(0, 0, 350, 350)
    ctx.beginPath()
    ctx.moveTo(150, 150)
    ctx.lineTo(x1, y1)
    ctx.moveTo(150, 150)
    ctx.lineTo(x2, y2)
    ctx.moveTo(x1, y1)
    // TODO: Figure this out 😩
    ctx.arc(150, 150, 50, sin(frame / 60), cos(frame / 60))
    ctx.stroke()

    this.frame += 1
    requestAnimationFrame(this.animation)
  }

  render() {
    return (
      <Card>
        <canvas height={350} ref={el => (this.canvas = el)} width={350} />
      </Card>
    )
  }
}

export default Triangles
