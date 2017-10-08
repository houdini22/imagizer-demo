import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import Markdown from 'react-markdown'
import readme from '../../../data/readme'
import styles from './Documentation.module.scss'

export class LoginView extends React.Component {
  static propTypes = {}

  render () {
    return (
      <div className='markdown-body'>
        <Markdown source={readme} />
      </div>
    )
  }
}

export default CSSModules(LoginView, styles)
