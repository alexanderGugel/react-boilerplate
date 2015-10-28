import { render } from 'react-dom'
import React from 'react'

const App = React.createClass({
  render: function () {
    return <div>Hello</div>
  }
})

const $app = document.createElement('div')
document.body.appendChild($app)

render(<App />, $app)
