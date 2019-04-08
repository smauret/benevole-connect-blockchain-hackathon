import {mount} from "enzyme/build";
import Person from "../components/Person";
import React from "react";
import imgDefault from '../static/default.png'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
var person = {"id":13,"first_name":"Sarah","last_name":"Mitchell","email":"pmitchellc@ebay.co.uk","job":"CTO","modified":"2015-03-28","vip":false}

describe('<Person />', () => {
  const mockFn = jest.fn();
  let wrapper = mount(<Person firstname={person.first_name} lastname={person.last_name} email={person.email} fetchPicture={mockFn} />);
  let wrapper1 = mount(<Person firstname={person.first_name} lastname={person.last_name} email={person.email} isLoaded={true} avatarURL={'url'} fetchPicture={mockFn} />);

  it('should display the person\'s details', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h3')).toHaveLength(2);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(mockFn).toHaveBeenCalledTimes(1);
  })

  it('should display the person\'s default avatar', () => {
    expect(wrapper.find('img').prop('src')).toEqual(imgDefault);
    expect(mockFn).toHaveBeenCalledTimes(1);
  })

  it('should display the person\'s avatar', () => {
    expect(wrapper1.find('img').prop('src')).not.toEqual(imgDefault);
    expect(mockFn).toHaveBeenCalledTimes(1);
  })
});
