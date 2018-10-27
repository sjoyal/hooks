import React from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'

const Main = () => <div>Hello World</div>

const App = () => (
  <>
    <Router>
      <Main path="/" />
    </Router>
  </>
)

render(<App />, document.getElementById('app'))
