// @flow
import React, { Component } from 'react';
import './icon.css';

type Props = {
  name?: string,
  colors?: Array<string>,
  size?: string
};

export default class Icon extends Component<Props>{

  className()/*: string*/{
    let className = 'icon';
    const keys = ['name', 'size'];

    keys.forEach((key) => {
      className += this.props[key]
        ? ' icon_' + key + '_' + this.props[key].toString()
        : '';
    })

    return className;
  }

  colorizeSVGPart(index/*: number*/)/*: ?string*/{
    const colors = this.props.colors;
    if(colors && index){
      return 'icon_color_' + (colors[index - 1] || colors[colors.length - 1]);
    }
  }

  showIcon()/*: React$Element<'svg'>*/{
    const icons = {
      login: 
        <svg viewBox="0 0 56 56" xmlSpace="preserve" className={this.className()} >
          <g>
            <path className={this.colorizeSVGPart(1)} d="M25.293,39.293c-0.391,0.391-0.391,1.023,0,1.414C25.488,40.902,25.744,41,26,41s0.512-0.098,0.707-0.293l11.999-11.999   c0.093-0.092,0.166-0.203,0.217-0.326c0.101-0.244,0.101-0.519,0-0.764c-0.051-0.123-0.125-0.234-0.217-0.327L26.707,15.293   c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L35.586,27H5c-0.553,0-1,0.447-1,1s0.447,1,1,1h30.586L25.293,39.293z">
            </path>
            <path className={this.colorizeSVGPart(2)} d="M51,0H14c-0.553,0-1,0.447-1,1v21c0,0.553,0.447,1,1,1s1-0.447,1-1V2h35v52H15V34c0-0.553-0.447-1-1-1s-1,0.447-1,1v21   c0,0.553,0.447,1,1,1h37c0.553,0,1-0.447,1-1V1C52,0.447,51.553,0,51,0z">
            </path>
          </g>
        </svg>,
      default:
        <svg viewBox="0 0 512 512" xmlSpace="preserve" className={this.className()} >
          <g>
            <g>
              <path className={this.colorizeSVGPart(1)} d="M507.409,433.408L288.495,44.075c-6.477-11.366-18.62-18.44-31.718-18.475c-0.026,0-0.043,0-0.06,0    c-13.099,0-25.216,7.1-31.607,18.492L4.599,433.314C1.604,438.639,0.009,444.689,0,450.799c0,0.008,0,0.008,0,0.017    C0,470.434,15.966,486.4,35.584,486.4h440.832c19.618,0,35.584-15.966,35.584-35.567    C512.009,444.715,510.413,438.673,507.409,433.408z M476.416,469.333H35.584c-10.206,0-18.517-8.303-18.517-18.509    c0.009-3.191,0.836-6.357,2.389-9.114L239.974,52.471c3.396-6.059,10.18-9.728,16.768-9.805    c6.989,0.017,13.474,3.797,16.905,9.813l218.914,389.342c1.553,2.739,2.381,5.837,2.372,8.994    C494.933,461.022,486.622,469.333,476.416,469.333z"></path>
            </g>
          </g>
          <g>
            <g>
              <path className={this.colorizeSVGPart(2)} d="M164.241,375.467l14.754-66.415l-16.657-3.703l-17.067,76.8c-0.563,2.526,0.06,5.171,1.673,7.194    c1.621,2.014,4.07,3.191,6.656,3.191h51.2v-17.067H164.241z"></path>
            </g>
          </g>
          <g>
            <g>
              <rect className={this.colorizeSVGPart(2)} x="179.2" y="349.867" width="17.067" height="59.733"></rect>
            </g>
          </g>
          <g>
            <g>
              <path className={this.colorizeSVGPart(2)} d="M256,307.2c-18.825,0-34.133,15.309-34.133,34.133v34.133c0,18.825,15.309,34.133,34.133,34.133    c18.825,0,34.133-15.309,34.133-34.133v-34.133C290.133,322.509,274.825,307.2,256,307.2z M273.067,375.467    c0,9.412-7.654,17.067-17.067,17.067c-9.412,0-17.067-7.654-17.067-17.067v-34.133c0-9.412,7.654-17.067,17.067-17.067    c9.412,0,17.067,7.654,17.067,17.067V375.467z"></path>
            </g>
          </g>
          <g>
            <g>
              <path className={this.colorizeSVGPart(2)} d="M326.374,375.467l14.763-66.415l-16.666-3.703l-17.067,76.8c-0.563,2.526,0.06,5.171,1.672,7.194    c1.621,2.014,4.062,3.191,6.656,3.191h51.2v-17.067H326.374z"></path>
            </g>
          </g>
          <g>
            <g>
              <rect className={this.colorizeSVGPart(2)} x="341.333" y="349.867" width="17.067" height="59.733"></rect>
            </g>
          </g>
          <g>
            <g>
              <rect className={this.colorizeSVGPart(3)} x="247.467" y="145.067" width="17.067" height="85.333"></rect>
            </g>
          </g>
          <g>
            <g>
              <rect className={this.colorizeSVGPart(3)} x="247.467" y="247.467" width="17.067" height="17.067"></rect>
            </g>
          </g>
        </svg>
    }
    return this.props.name ? icons[this.props.name] : icons['default'];
  }

  render(){
    return(
      this.showIcon()
    );
  }
}
