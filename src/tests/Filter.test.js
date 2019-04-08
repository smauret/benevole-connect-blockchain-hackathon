import {shallow} from "enzyme/build";
import Filter from "../components/Filter";
import React from "react";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
let choices = ['CEO','CTO','Developer','Designer','Scrum master'];
describe('<Filter />', () => {
  const mockFn = jest.fn();
  let wrapper = shallow(<Filter choices={choices} filter={mockFn}/>);

  it('should display the choices', () => {
    expect(wrapper.find('option')).toHaveLength(5);
  });

  test('Should change job options', () => {
    wrapper.find('select').simulate('change', {target: {options : [{value: 'CTO', selected: true}]}});
    expect(mockFn).toHaveBeenCalledTimes(1);
  })
});
