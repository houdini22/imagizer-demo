import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import imagizer from 'imagizer'
import { Progress, Row, Col } from 'reactstrap'
import styles from './Layers.module.scss'

const imageBackgroundURL = '/img/background.jpg'
const imageCircleURL = '/img/overlap.gif'

const effects = [
  {
    blendingMode: 'normal',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'lighten',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'darken',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'multiply',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'average',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'add',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'subtract',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'difference',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'negation',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'screen',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'exclusion',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'overlay',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'softLight',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'hardlight',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'colorDodge',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'colorBurn',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'linearBurn',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'vividLight',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'pinLight',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'hardMix',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'reflect',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'glow',
    callback: (project) => {
      return project.render()
    }
  },
  {
    blendingMode: 'phoenix',
    callback: (project) => {
      return project.render()
    }
  }
]

const createInstance = (blendingMode) => {
  const promise = new Promise((resolve) => {
    const project = new imagizer.Project(450, 254)
    const layer1 = project.createLayer()
    const image1 = new imagizer.Image()
    const image2 = new imagizer.Image()
    image1.load(imageBackgroundURL, function () {
      layer1.put(image1, 0, 0)
      image2.load(imageCircleURL, function () {
        const layer2 = project.createLayer({
          blendingMode
        })
        layer2.put(image2, 145, 47)
        resolve(project)
      })
    })
  })
  return promise
}

export class LoginView extends React.Component {
  static propTypes = {}

  constructor (props) {
    super(props)
    this.state = {
      images: []
    }
  }

  componentDidMount () {
    this.break = false
    this.renderLayer(0)
  }

  componentWillUnmount () {
    this.break = true
  }

  renderLayer (i) {
    if (!effects[i]) return false

    createInstance(effects[i].blendingMode).then((project) => {
      const image = effects[i].callback(project)

      if (this.break) return false

      this.setState({
        images: this.state.images.concat([image])
      })
      this.renderLayer(i + 1)
    })
  }

  render () {
    const { images } = this.state
    return (
      <div>
        <div className='text-center'>{images.length} / {effects.length}</div>
        <Progress value={Math.floor(images.length / effects.length * 100)}/>
        <div styleName='effects'>
          {images.map((image, i) => {
            return (
              <div key={i}>
                <Row className='text-center'>
                  <Col xs={12}>
                    <img src={image.src} alt=''/>
                  </Col>
                </Row>
                <Row className='text-center'>
                  <Col xs={12}><p>{effects[i].blendingMode}</p></Col>
                </Row>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default CSSModules(LoginView, styles)
