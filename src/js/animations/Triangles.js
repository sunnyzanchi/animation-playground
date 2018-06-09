import { h, Component } from 'preact'
import Card from '../global/Card'

/**
 * Animation using rAF with the Canvas API and direct DOM refs
 */

class Triangles extends Component {
  frame = 0;
  componentDidMount() {
    this.ctx = this.canvas.getContext('2d')
    this.ctx.translate(0.5, 0.5)
    requestAnimationFrame(this.animation)
  }

  animation = () => {
    const { cos, sin } = Math
    const { ctx, frame } = this
    const CENTER = 175
    const NUM_SLICES = 4

    ctx.clearRect(0, 0, 350, 350)

    // TODO: Make these slices work
    for (let i = 0; i < NUM_SLICES; i += 1) {
      const currentFrame = frame + i * 10
      const x1 = CENTER + cos(currentFrame / 30) * (50 - i)
      const y1 = CENTER + sin(currentFrame / 30) * (50 - i)
      ctx.fillStyle = `rgb(255, ${255 / NUM_SLICES * i}, ${255 / NUM_SLICES * i}`

      ctx.beginPath()
      ctx.moveTo(CENTER, CENTER)

      // This makes the line out, makes the arc, then goes back to the center, so we have a full shape
      ctx.lineTo(x1, y1)
      ctx.arc(CENTER, CENTER, 50, currentFrame / 30, -currentFrame / 30)
      ctx.lineTo(CENTER, CENTER)
      ctx.fill()
    }

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
