import CG from './lib/caspar-react'
import React from 'react'

CG.render({
  preview () {
    // as CCG XML
    CG.emit('update', `
      <templateData>
        <componentData id="instance1">
          <data id="text" value="Text displayed in a CasparTextField" />
        </componentData>
        <componentData id="instance2">
          <data id="imagePath" value="d:/caspar/_TEMPLATEMEDIA/myImage.png" />
          <data id="alpha" value="0.6" />
        </componentData>
        <componentData id="customParameter1">
          <data id="data" value="true" />
        </componentData>
      </templateData>
    `)

    // as JS Object
    CG.emit('update', {
      instance1: [
        { id: 'text', value: 'Text displayed in a CasparTextField' }
      ],
      instance2: [
        { id: 'imagePath', value: 'd:/caspar/_TEMPLATEMEDIA/myImage.png' },
        { id: 'alpha', value: '0.6' }
      ],
      customParameter1: [
        { id: 'data', value: true }
      ]
    })

    CG.emit('play')
    setTimeout(() => CG.emit('stop'), 2000)
  },

  load () {

  },

  play () {
    this.setState({ isPlaying: true })
  },

  update (data) {
    this.setState(data)
  },

  stop () {
    this.setState({ isPlaying: false })
  },

  remove () {

  },

  render () {
    return this.state.isPlaying ? (
      <div>
        Hello {this.state && this.state.instance1 && this.state.instance1[0].value}
      </div>
    ) : null
  }
})