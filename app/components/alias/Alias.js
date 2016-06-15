'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import { User } from '../common/index'

import { generateKey } from '../../utils/pgp'

class Alias extends Component {
  classes() {
    return {
      'default': {
        user: {
          color: '#fff',
          flex: '1',
          fontWeight: '500',
        },
      },
    }
  }

  render() {
    return (
      <div is="user">
        <User
          name={ this.props.alias.name.length === 0 ? this.props.alias.email : this.props.alias.name }
          avatar={ 9 }
        />
      </div>
    )
  }
}

export default ReactCSS(Alias)
