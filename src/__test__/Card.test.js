import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Card from '../containers/Card'

Enzyme.configure({adapter: new Adapter()})
 
describe('Card', () => {
  test('should be defined', () => {
    expect(Card).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot()
  })
})

it('two plus two is four', () => {
  expect(2 + 2).toBe(4);
})

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2})
})

test('adding positive numbers is not zero', () => {
  for(let a = 1; a < 10; a++){
    for (let b =1; b< 10; b++){
      expect (a+b).not.toBe(0);
    }
  }
})

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
})

const ShoppingList = ['bananas', 'apples', 'pears']
test('the shopping list has apples', () => {
  expect(ShoppingList).toContain('apples');
})

function forEach(items, callback){
  for (let index=0; index< items.length; index++){
    callback(items[index]);
  }
}

const mockCallback = jest.fn();
forEach([0,1], mockCallback);
console.log(mockCallback.mock.calls)
expect (mockCallback.mock.calls.length).toBe(2);
