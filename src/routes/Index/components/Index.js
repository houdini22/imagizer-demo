import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { Jumbotron, Button } from 'reactstrap'
import { browserHistory } from 'react-router'
import styles from './Index.module.scss'

export class LoginView extends React.Component {
  static propTypes = {}

  render () {
    return (
      <div>
        <Jumbotron>
          <div className='text-center' styleName='actions'>
            <h1>imagizer</h1>
            <h4>JavaScript image manipulation library</h4>
            <Button
              color='info'
              outline
              onClick={(e) => {
                e.preventDefault()
                window.open('https://github.com/houdini22/imagizer')
              }}
            >
              View on github
            </Button>
            <Button
              color='info'
              outline
              onClick={() => {
                browserHistory.push('/effects')
              }}
            >
              Browse effects
            </Button>
          </div>
        </Jumbotron>
      </div>
    )
  }
}

export default CSSModules(LoginView, styles)
