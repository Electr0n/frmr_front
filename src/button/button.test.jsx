import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

describe('Button', () => {

  let component, action;

  describe('render', () => {

    it('should have element \'button\'', () => {
      component = shallow(<Button />);
      expect(component.find('button')).toHaveLength(1);
    });

    it('should render <button> if url not specified', () => {
      component = shallow(<Button />);
      expect(component.name()).toEqual('button');
    });

    it('should render <Link> if specified local url', () => {
      component = shallow(<Button url='/' />);
      expect(component.name()).toEqual('Link');
    });

    it('should render <a> if specified an external url', () => {
      component = shallow(<Button url='http:////' />);
      expect(component.name()).toEqual('a');
    });

  });

  describe('className()', () => {

    it('should return \'button\' by default', () => {
      component = shallow(<Button />).instance();
      expect(component.className()).toEqual('button');
    });

    it('should return \'button button_size_xl\' if size=xl', () => {
      component = shallow(<Button size='xl'/>).instance();
      expect(component.className()).toEqual('button button_size_xl');
    });

    it('should return \'button button_color_red\' if color=red', () => {
      component = shallow(<Button color='red'/>).instance();
      expect(component.className()).toEqual('button button_color_red');
    });

    it('should not return \'button button_color_\' if color=\'\'', () => {
      component = shallow(<Button color=''/>).instance();
      expect(component.className()).toEqual('button');
    });

    it('should return \'button button_transparent\' if transparent=true', () => {
      component = shallow(<Button isTransparent={true}/>).instance();
      expect(component.className()).toEqual('button button_transparent');
    });

    it('should not return \'button button_transparent\' if transparent=false', () => {
      component = shallow(<Button isTransparent={false}/>).instance();
      expect(component.className()).toEqual('button');
    });

    it('should not return \'button button_label_test\' if label was specified', () => {
      component = shallow(<Button label='test'/>).instance();
      expect(component.className()).toEqual('button');
    });

    it('should not return \'button button_url_http://\' if url was specified', () => {
      component = shallow(<Button url='http://'/>).instance();
      expect(component.className()).toEqual('button');
    });

    it('should not return \'button button_onClick_function(){}\' if onClick was specified', () => {
      component = shallow(<Button onClick={function(){}}/>).instance();
      expect(component.className()).toEqual('button');
    });

    it('should not return \'button button_children_test\' if children was specified', () => {
      component = shallow(<Button>TEST</Button>).instance();
      expect(component.className()).toEqual('button');
    });

  });

  describe('showLabel', () => {

    it('should return label', () => {
      component = shallow(<Button label='somestring' />).instance();
      expect(component.showLabel()).toEqual('somestring');
    });

    it('should return substring of label', () => {
      component = shallow(<Button label='This is very loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong string' />).instance();
      expect(component.showLabel()).toEqual('This is very loooooooooooooooo...');
    });

    it('should not return children', () => {
      component = shallow(<Button><div>hello</div></Button>).instance();
      expect(component.showLabel()).not.toEqual(<div>hello</div>);
    });

    it('should return empty result', () => {
      component = shallow(<Button />).instance();
      expect(component.showLabel()).toEqual('');
    });

  });

  describe('handleClick()', () => {

    let onStopPropagation;

    beforeEach(() => {
      action = jest.fn();
      onStopPropagation = jest.fn();
      component = shallow(<Button onClick={action} />).instance();
    });

    it('should call e.stopPropagation()', () => {
      component.handleClick({stopPropagation: onStopPropagation});
      expect(onStopPropagation).toBeCalledWith();
    });

    it('should call this.props.onClick(e)', () => {
      component.handleClick({stopPropagation: onStopPropagation});
      expect(action).toBeCalledWith({stopPropagation: onStopPropagation});
    });

  });

  describe('isExternalLink()', () => {

    it('should return true if url starts with \'http://\'', () => {
      component = shallow(<Button url='http://google.com'/>).instance();
      expect(component.isExternalLink()).toEqual(true);
    });

    it('should return true if url starts with \'//\'', () => {
      component = shallow(<Button url='//google.com'/>).instance();
      expect(component.isExternalLink()).toEqual(true);
    });

    it('should return false if url is local link', () => {
      component = shallow(<Button url='/main'/>).instance();
      expect(component.isExternalLink()).toEqual(false);
    });

    it('should return false if url not specified', () => {
      component = shallow(<Button />).instance();
      expect(component.isExternalLink()).toEqual(false);
    });

  });

});
