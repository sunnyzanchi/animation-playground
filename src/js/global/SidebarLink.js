import { h } from 'preact'
import styled from 'styled'

const HoverText = styled('p')({
  fontFamily: 'sans-serif',
  fontSize: '10px',
  textTransform: 'uppercase',
  transform: 'translate(60px)',
  transition: '.24s color, .24s transform',
})

const Wrapper = styled('a')(p => ({
  ':hover': {
    color: '#777',
    cursor: 'pointer',
    fill: '#777',
  },
  ':hover p': {
    transform: 'translate(0)',
  },
  color: '#fff',
  display: 'block',
  fill: '#aaa',
  overflow: 'hidden',
  textDecoration: 'none',

}))

const SidebarLink = ({ href, radius = 40, svg, text }) => (
  <Wrapper href={href} radius={radius}>
    {svg}
    <HoverText>{text}</HoverText>
  </Wrapper>
)

export default SidebarLink
