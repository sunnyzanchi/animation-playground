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
  '& svg': {
    // I had to use + here because ESLint was being a dick and erroring out when I used
    // template strings
    height: p.radius + 'px',
    transition: '.16s fill',
    width: p.radius + 'px',
  },
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
