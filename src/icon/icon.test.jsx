import React from 'react';
import { shallow } from 'enzyme';
import Icon from './icon';

describe('Icon', () => {
  let component, action;

  describe('render()', () => {

    it('should return svg', () => {
      component = shallow(<Icon />);
      expect(component.name()).toEqual('svg');
    });

  });

  describe('className()', () => {

    it('should return "icon" if name not specified', () => {
      component = shallow(<Icon />).instance();
      expect(component.className()).toEqual('icon');
    });

    it('should return "icon icon_name_login" if name login', () => {
      component = shallow(<Icon name='login' />).instance();
      expect(component.className()).toEqual('icon icon_name_login');
    });

    it('should return "icon icon_size_40" if size = 40', () => {
      component = shallow(<Icon size='40' />).instance();
      expect(component.className()).toEqual('icon icon_size_40');
    });

  });

  describe('colorizeSVGPart()', () => {

    it('should not return anything if colors was not specified', () => {
      component = shallow(<Icon />).instance();
      expect(component.colorizeSVGPart(2)).toEqual();
    });

    it('should not return anything index not specified', () => {
      component = shallow(<Icon colors={['green', 'red']} />).instance();
      expect(component.colorizeSVGPart()).toEqual();
    });

    it('should return specified color by index', () => {
      component = shallow(<Icon colors={['green', 'red', 'blue']} />).instance();
      expect(component.colorizeSVGPart(2)).toEqual('icon_color_red');
    });

    it('should return last specified color if color was not specified', () => {
      component = shallow(<Icon colors={['green']} />).instance();
      expect(component.colorizeSVGPart(5)).toEqual('icon_color_green');
    });

  });

});
