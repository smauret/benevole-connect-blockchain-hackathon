import {shallow} from "enzyme/build";
import ListPerson from "../components/ListPerson";
import React from "react";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
var PERSONS = require('../static/persons.json')

describe('<ListPerson />', () => {
  let wrapper;

  test('Should display 88 persons', () => {
    wrapper = shallow(<ListPerson list={PERSONS} />);
    expect(wrapper.find('Person')).toHaveLength(88);
  })

  test('Should say no one in the list', () => {
    wrapper = shallow(<ListPerson list={[]} />);
    expect(wrapper.find('h3').text()).toEqual('No one in the list');
  })
});
