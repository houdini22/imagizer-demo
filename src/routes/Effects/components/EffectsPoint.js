import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { Progress } from 'reactstrap'
import imagizer from 'imagizer'
import styles from './EffectsPoint.module.scss'

const imageURL = '/img/girl.png'

const effects = [
  {
    name: 'auto-contrast',
    callback: (project) => {
      project.applyEffect('auto-contrast')
      return project.render()
    }
  },
  {
    name: 'auto-white-balance',
    callback: (project) => {
      project.applyEffect('auto-white-balance')
      return project.render()
    }
  },
  {
    name: 'component-stretching',
    callback: (project) => {
      project.applyEffect('component-stretching')
      return project.render()
    }
  },
  {
    name: 'component-stretching + auto-white-balance + auto-contrast',
    callback: (project) => {
      project.applyEffect('component-stretching')
      project.applyEffect('auto-white-balance')
      project.applyEffect('auto-contrast')
      return project.render()
    }
  },
  {
    name: 'gray-scale',
    callback: (project) => {
      project.applyEffect('gray-scale')
      return project.render()
    }
  },
  {
    name: 'sepia',
    callback: (project) => {
      project.applyEffect('sepia', {
        sepiaValue: 50
      })
      return project.render()
    }
  },
  {
    name: 'diffusion',
    callback: (project) => {
      project.applyEffect('diffusion')
      return project.render()
    }
  },
  {
    name: 'dither',
    callback: (project) => {
      project.applyEffect('dither')
      return project.render()
    }
  },
  {
    name: 'exposure',
    callback: (project) => {
      project.applyEffect('exposure', {
        exposure: 4
      })
      return project.render()
    }
  },
  {
    name: 'gain',
    callback: (project) => {
      project.applyEffect('gain', {
        gain: 0.6,
        bias: 0.5
      })
      return project.render()
    }
  },
  {
    name: 'gamma',
    callback: (project) => {
      project.applyEffect('gamma', {
        gammaRed: 1,
        gammaGreen: 1,
        gammaBlue: 5
      })
      return project.render()
    }
  },
  {
    name: 'hsb-adjust',
    callback: (project) => {
      project.applyEffect('hsb-adjust', {
        h: 0.5,
        s: 0.2,
        b: 1
      })
      return project.render()
    }
  },
  {
    name: 'invert-alpha',
    callback: (project) => {
      project.applyEffect('invert-alpha')
      return project.render()
    }
  },
  {
    name: 'invert',
    callback: (project) => {
      project.applyEffect('invert')
      return project.render()
    }
  },
  {
    name: 'rescale',
    callback: (project) => {
      project.applyEffect('rescale', {
        scale: 0.5
      })
      return project.render()
    }
  },
  {
    name: 'solarize',
    callback: (project) => {
      project.applyEffect('solarize')
      return project.render()
    }
  },
  {
    name: 'threshold',
    callback: (project) => {
      project.applyEffect('threshold')
      return project.render()
    }
  },
  {
    name: 'tritone',
    callback: (project) => {
      project.applyEffect('tritone', {
        shadowColor: {
          r: 255,
          g: 0,
          b: 0,
          a: 255
        },
        midColor: {
          r: 136,
          g: 136,
          b: 136,
          a: 255
        },
        highColor: {
          r: 0,
          g: 255,
          b: 255,
          a: 255
        }
      })
      return project.render()
    }
  },
  {
    name: 'levels',
    callback: (project) => {
      project.applyEffect('levels', {
        low: 0.5,
        high: 0.5,
        lowOutput: 0.2,
        highOutput: 0.8
      })
      return project.render()
    }
  },
  {
    name: 'diffuse',
    callback: (project) => {
      project.applyEffect('diffuse', {
        scale: 5
      })
      return project.render()
    }
  },
  {
    name: 'kaleidoscope',
    callback: (project) => {
      project.applyEffect('kaleidoscope', {
        centreX: 0.2,
        centreY: 0.8,
        angle: 30,
        angle2: 90,
        sides: 5,
        radius: 0
      })
      return project.render()
    }
  },
  {
    name: 'pinch',
    callback: (project) => {
      project.applyEffect('pinch', {
        angle: 0,
        centreX: 0.5,
        centreY: 0.5,
        radius: 100,
        amount: 0.5
      })
      return project.render()
    }
  },
  {
    name: 'ripple',
    callback: (project) => {
      project.applyEffect('ripple', {
        xAmplitude: 5,
        yAmplitute: 0,
        xWaveLength: 16,
        yWaveLength: 16,
        waveType: 'NOISE'
      })
      return project.render()
    }
  },
  {
    name: 'shear',
    callback: (project) => {
      project.applyEffect('shear', {
        xAngle: 30,
        yAngle: 15,
        xOffset: 0,
        yOffset: 0
      })
      return project.render()
    }
  },
  {
    name: 'sphere',
    callback: (project) => {
      project.applyEffect('sphere', {
        a: 0,
        b: 0,
        centreX: 0.5,
        centreY: 0.5,
        refractionIndex: 1.5
      })
      return project.render()
    }
  },
  {
    name: 'swim',
    callback: (project) => {
      project.applyEffect('swim', {
        scale: 60,
        turbulence: 10,
        amount: 3,
        time: 100,
        angle: 10,
        stretch: 5
      })
      return project.render()
    }
  },
  {
    name: 'twirl',
    callback: (project) => {
      project.applyEffect('twirl', {
        angle: Math.PI / 8,
        centreX: 0.5,
        centreY: 0.5,
        radius: 20
      })
      return project.render()
    }
  },
  {
    name: 'water',
    callback: (project) => {
      project.applyEffect('water', {
        waveLength: 16,
        amplitude: 4,
        phase: 0,
        centreX: 0.5,
        centreY: 0.5,
        radius: 50
      })
      return project.render()
    }
  },
  {
    name: 'dissolve',
    callback: (project) => {
      project.applyEffect('dissolve', {
        density: 0.8,
        softness: 0.2
      })
      return project.render()
    }
  },
  {
    name: 'edge',
    callback: (project) => {
      project.applyEffect('edge')
      return project.render()
    }
  },
  {
    name: 'edge + gray-scale + invert',
    callback: (project) => {
      project.applyEffect('edge')
      project.applyEffect('gray-scale')
      project.applyEffect('invert')
      return project.render()
    }
  },
  {
    name: 'fill-color',
    callback: (project) => {
      project.applyEffect('fill-color', { color: '#ff0000' })
      return project.render()
    }
  },
  {
    name: 'channel-mix',
    callback: (project) => {
      project.applyEffect('channel-mix', {
        blueGreen: 100,
        redBlue: 150,
        greenRed: 50,
        intoR: 100,
        intoG: 150,
        intoB: 50
      })
      return project.render()
    }
  },
  {
    name: 'circle',
    callback: (project) => {
      project.applyEffect('circle')
      return project.render()
    }
  },
  {
    name: 'rotate',
    callback: (project) => {
      project.applyEffect('rotate', {
        angle: Math.PI / 2
      })
      return project.render()
    }
  },
  {
    name: 'flip',
    callback: (project) => {
      project.applyEffect('flip')
      return project.render()
    }
  },
  {
    name: 'offset',
    callback: (project) => {
      project.applyEffect('offset')
      return project.render()
    }
  },
  {
    name: 'polar',
    callback: (project) => {
      project.applyEffect('polar')
      return project.render()
    }
  },
  {
    name: 'block',
    callback: (project) => {
      project.applyEffect('block')
      return project.render()
    }
  },
  {
    name: 'border',
    callback: (project) => {
      project.applyEffect('border')
      return project.render()
    }
  },
  {
    name: 'emboss',
    callback: (project) => {
      project.applyEffect('emboss')
      return project.render()
    }
  },
  {
    name: 'perspective',
    callback: (project) => {
      project.applyEffect('perspective', {
        x0: 0.2,
        y0: 0.3,
        x1: 0.7,
        y1: 0.1,
        x2: 0.9,
        y2: 0.9,
        x3: 0,
        y3: 0.9
      })
      return project.render()
    }
  },
  {
    name: 'contrast',
    callback: (project) => {
      project.applyEffect('contrast')
      return project.render()
    }
  },
  {
    name: 'brightness',
    callback: (project) => {
      project.applyEffect('brightness')
      return project.render()
    }
  }
]

const createInstance = () => {
  const promise = new Promise((resolve) => {
    const project = new imagizer.Project(151, 151)
    const layer1 = project.createLayer()
    const image1 = new imagizer.Image()
    image1.load(imageURL, function () {
      layer1.put(image1, 0, 0)
      resolve(project)
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
    this.renderEffect(0)
  }

  renderEffect (i) {
    if (!effects[i]) return false

    createInstance().then((project) => {
      const image = effects[i].callback(project)
      this.setState({
        images: this.state.images.concat([image])
      })
      this.renderEffect(i + 1)
    })
  }

  render () {
    const { images } = this.state
    return (
      <div>
        <h5>Original image:</h5>
        <img src='/img/girl.png' alt=''/>
        <br/><br/>
        <div className='text-center'>{images.length} / {effects.length}</div>
        <Progress value={Math.floor(images.length / effects.length * 100)}/>
        <div styleName='effects'>
          {images.map((image, i) => {
            return (
              <div key={i}>
                <p>{effects[i].name}</p>
                <img src={image.src} alt=''/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default CSSModules(LoginView, styles)
