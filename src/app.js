import React from 'react'
import { render } from 'react-dom'
import { Router, Link } from '@reach/router'
import Counter from 'views/Counter'
import Summary from 'views/Summary'
import Todos from 'views/Todos'
import Wrapper from 'views/Wrapper'

const App = () => (
  <Router>
    <Wrapper path="/">
      <Summary path="/" />
      <Counter path="counter" />
      <Todos path="todos" />
    </Wrapper>
  </Router>
)

render(<App />, document.getElementById('app'))
