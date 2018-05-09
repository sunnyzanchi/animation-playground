import { h, render } from 'preact'
import styled from 'preact-emotion'
import 'reset-css'

import DotSpread from './animations/DotSpread'

const Grid = styled('div')`
  display: grid;
`

const App = ({ children }) => (
  <Grid>
    <DotSpread />
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
