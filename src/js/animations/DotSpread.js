import { h, Component } from 'preact'
import styled from 'preact-emotion'
import anime from 'animejs'
import randomColor from 'randomcolor'
import Card from '../global/Card'

const NUM_OF_DOTS = 12
const RADIUS = '24px'

const Container = styled('div')`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`

const Dot = styled('div')`
  background-color: ${p => p.color};
  border-radius: 50%;
  height: ${p => p.radius};
  position: absolute;
  width: ${p => p.radius};
`

/**
 * Animation using raw animejs and direct DOM refs
 */
class DotSpread extends Component {
  constructor(props) {
    super(props)

    this.dotRefs = []
  }

  componentDidMount() {
    const { cos, sin, PI } = Math
    anime({
      direction: 'alternate',
      duration: 900,
      elasticity: 400,
      loop: true,
      opacity: [0.2, 1],
      scale: [0.5, 1],
      targets: this.dotRefs,
      translateX(el, i) {
        const angle = -i * (2 * PI / NUM_OF_DOTS) - (PI / 2)
        return (cos(angle) * 130).toFixed(2)
      },
      translateY(el, i) {
        const angle = -i * (2 * PI / NUM_OF_DOTS) - (PI / 2)
        // This isn't a clean 0, it's a very tiny and long decimal
        // and i guess anime doesn't like that
        return (sin(angle) * 130).toFixed(2)
      },
    })

    // Spin the container the dots are in for funsies
    anime({
      direction: 'alternate',
      duration: 900,
      easing: 'easeOutQuint',
      loop: true,
      rotate: '90deg',
      targets: this.containerRef,
    })
  }

  render() {
    const dots = []
    for (let i = 0; i < NUM_OF_DOTS; i += 1) {
      dots.push(
        <Dot color={randomColor} innerRef={el => this.dotRefs.push(el)} radius={RADIUS} />
      )
    }

    return (
      <Card>
        <Container innerRef={el => (this.containerRef = el)}>
          {dots}
        </Container>
      </Card>
    )
  }
}

export default DotSpread
