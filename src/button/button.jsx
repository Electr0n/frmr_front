// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  color?:         string,
  label?:         string,
  size?:          20 | 40 | 60 | 80 | 100,
  shape?:         'circle' | 'square' | 'rounded' | 'pentagon' | 'hexagon',
  status?:        'active' | 'disabled' | 'loading' | 'pressed' | 'unclickable',
  url:            string,
  icon?:          string,
  isInverse:      boolean,
  isBordered:     boolean,
  isTransparent:  boolean,
  onClick:        Function
};

export default class Button extends Component<Props>{

  static defaultProps = {
    url:      '',
    onClick:  () => {}
  };

  handleClick(e/*: SyntheticEvent<HTMLButtonElement>*/)/*: void*/{
    e.stopPropagation();
    this.props.onClick(e);
  }

  isExternalLink()/*: boolean*/{
    const url = this.props.url;
    return url.startsWith('http') || url.startsWith('//');
  }

  className()/*: ?string*/{
    let name = 'button';
    const notStylizedProps = ['label', 'children', 'url', 'onClick'];
    const keys = Object.keys(this.props).filter((key) => notStylizedProps.indexOf(key) < 0);

    keys.forEach((key) => {
      name += this.props[key]
        ? typeof(this.props[key]) !== 'boolean'
          ? ' button_' + key + '_' + this.props[key].toString()
          : ' button_' + key
        : '';
    })

    return name;
  }

  showLabel()/*: ?string*/{
    return !this.props.label
      ? ''
      : this.props.label.length > 30
        ? this.props.label.substring(0, 30) + '...'
        : this.props.label;
  }

  renderButton()/*: React$Element<'button'>*/{
    return  <button
              className={this.className()}
              onClick={e => this.handleClick(e)}>
              {this.showLabel()}
            </button>
  }

  renderLink()/*: React$Element<any>*/{
    return this.isExternalLink()
      ? <a href={this.props.url}
          className={this.className()}
          onClick={e => this.handleClick(e)}>
          {this.showLabel()}
        </a>
      : <Link to={this.props.url}
          className={this.className()}
          onClick={e => this.handleClick(e)}>
          {this.showLabel()}
        </Link>
  }

  render()/*: React$Element<any>*/{
    return (
      this.props.url ? this.renderLink() : this.renderButton()
    )
  }
}
