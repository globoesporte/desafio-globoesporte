import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';

export class ToggleButton extends Component {
  static defaultProps = {
    height: '1.5em'
  };

  render() {
    const style = {
      container: {
        cursor: 'pointer'
      },
        inner: {
        fill: 'none',
        stroke: '#616573',
        strokeWidth: '4',
        strokeLinecap: 'square',
        strokeLinejoin: 'square'
      },
      innerCheck: {
        fill: 'none',
        stroke : '#378d04',
        strokeWidth: '4',
        strokeLinecap: 'square',
        strokeLinejoin: 'square'
      },
      ...this.props.style
    }
    
    const totalLength = 72.7977294921875
    const circleLength = 50.24085998535156
    const checkedLength = -22.55687141418457

    const defaultSpring = -totalLength
    const circleSpring = spring(circleLength, {stiffness: 60, damping: 11})
    const checkedSpring = spring(checkedLength, {stiffness: 120, damping: 13.8})


    return (
      <svg {...this.props}  style={style.container} viewBox="0 0 24 24" >
        <g style={this.props.active ?style.innerCheck:style.inner}>
          <Motion
            defaultStyle={{offset: defaultSpring}}
            style={{offset: this.props.active ? circleSpring : checkedSpring}}
          >
          {({ offset }) =>
            <path
              strokeDasharray={`${totalLength} ${totalLength}`}
              strokeDashoffset={offset}
              d="M20 6.7L9.3 17.3 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8"
            />
          }
          </Motion>
        </g>
      </svg>
    )
  }
}