import HomeRoute from 'routes/Login'

describe('(Route) Login', () => {
  let _component

  beforeEach(() => {
    _component = HomeRoute.component()
  })

  it('Should return a route configuration object', () => {
    expect(typeof HomeRoute).to.equal('object')
  })

  it('Should define a route component', () => {
    expect(_component.type).to.equal('div')
  })
})
