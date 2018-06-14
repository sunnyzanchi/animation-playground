import { h, render } from 'preact'
import styled from 'styled'
import 'reset-css'

import DotSpread from './animations/DotSpread'
// import Triangles from './animations/Triangles'
import ZigZags from './animations/ZigZags'

const Grid = styled('div')({
  display: 'grid',
  gridColumnGap: '20px',
  gridRowGap: '20px',
  gridTemplateColumns: 'repeat(auto-fit, 350px)',
  gridTemplateRows: 'repeat(auto-fit, 350px)',
  justifyContent: 'center',
  padding: '40px',
})

const App = ({ children }) => (
  <Grid>
    <DotSpread />
    {/* Work in Progress <Triangles /> */}
    <ZigZags baseWidth={16} />
  </Grid>
)

render(<App />, document.body)

// This clears out the old rendered DOM on save for HMR
if (module.hot) {
  module.hot.dispose(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild)
    }
  })
}
