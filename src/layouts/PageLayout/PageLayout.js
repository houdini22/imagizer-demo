import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink
} from 'reactstrap'
import { Link } from 'react-router'
import styles from './PageLayout.module.scss'

class PageLayout extends React.Component {
  constructor (props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      isNavbarOpen: false,
    }
  }

  toggleNavbar () {
    this.setState({
      isNavbarOpen: !this.state.isNavbarOpen
    })
  }

  render () {
    const { children } = this.props

    return (
      <div styleName='layout'>
        <Navbar color='dark' dark expand='md'>
          <Container>
            <NavbarBrand tag={Link} to='/'>Imagizer</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar}/>
            <Collapse isOpen={this.state.isNavbarOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink tag={Link} to='/documentation'>Docs</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to='/layers'>Layers</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to='/effects'>Effects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='https://github.com/houdini22/imagizer' target='_blank'>Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <Container>
          <div styleName='content'>
            {children}
          </div>
        </Container>
      </div>
    )
  }
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default CSSModules(PageLayout, styles)
