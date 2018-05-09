import { h, render } from 'preact'
import styled from 'preact-emotion'
import 'reset-css'

import DotSpread from './animations/DotSpread'

const Grid = styled('div')`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(auto-fit, 350px);
  grid-template-rows: repeat(auto-fit, 350px);
  justify-content: center;
  padding: 40px;
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
