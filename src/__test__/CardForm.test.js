import React from 'react';
import Enzyme,{ shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'
import CardForm from '../components/CardForm'

Enzyme.configure({adapter: new Adapter()})

describe('CardForm', () => {

  it('should be defined', () => {
    expect(CardForm).toBeDefined()
  })
  it('should render correctly', () => {
    const wrapper = shallow(<CardForm />);
    expect(wrapper).toMatchSnapshot()
  })
  it('should render correctly with RTR', () => {
    const tree = renderer
    .create(<CardForm />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
