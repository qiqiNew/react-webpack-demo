import './index.css'
import app from './component'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class HelloReact extends Component {
  render() {
    return (<h1>Hello React</h1>)
  }
}
document.body.appendChild(app())
ReactDOM.render(<HelloReact />, document.getElementById('app'))

