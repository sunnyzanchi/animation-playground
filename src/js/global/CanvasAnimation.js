import { h, Component } from 'preact'

class CanvasAnimation extends Component {
  /**
   * With this way, instead of something like this.props.animation({ ctx, height, etc... })
   * We can just do this.props.animation(this.internals)
   * This prevents us from needing to allocate a new object every time,
   * which could have a negative impact on performance
   */
  internals = {
    ctx: null,
    frame: 0,
    height: 0,
    width: 0,
  }

  componentDidMount() {
    this.internals.ctx = this.canvas.getContext('2d')
    this.internals.height = this.canvas.height
    this.internals.width = this.canvas.width

    this.internals.ctx.translate(0.5, 0.5)
    requestAnimationFrame(this.animate)
  }

  animate = () => {
    this.internals.ctx.clearRect(0, 0, this.internals.width, this.internals.height)

    this.props.animation(this.internals)

    this.internals.frame += 1
    requestAnimationFrame(this.animate)
  }

  render() {
    return <canvas height="350" ref={el => (this.canvas = el)} width="350" />
  }
}

export default CanvasAnimation
