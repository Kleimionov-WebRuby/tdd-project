import { configure, shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Counter from './Counter';

configure({ adapter: new EnzymeAdapter() });

describe('<Counter />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });
  const findElementByTestAttr = (wrapper, value) => wrapper.find(`[data-test='${value}']`);

  it('renders without error', () => {
    const counterComponent = findElementByTestAttr(wrapper, 'component-counter');
    expect(counterComponent.length).toBe(1);
  });

  it('renders counter display', () => {
    const counterDisplay = findElementByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.length).toBe(1);
  });

  it('renders increment button', () => {
    const incButton = findElementByTestAttr(wrapper, 'increment-button');
    expect(incButton.length).toBe(1);
  });

  it('renders decrement button', () => {
    const decButton = findElementByTestAttr(wrapper, 'decrement-button');
    expect(decButton.length).toBe(1);
  });

  it('counter display starts at 0', () => {
    const count = findElementByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });

  it('clicking button increments counter display', () => {
    const incButton = findElementByTestAttr(wrapper, 'increment-button');
    incButton.simulate('click');

    const count = findElementByTestAttr(wrapper, 'count').text();
    expect(count).toBe('1');
  });

  it('clicking button decrements counter display', () => {
    const incButton = findElementByTestAttr(wrapper, 'increment-button');
    incButton.simulate('click');

    const decButton = findElementByTestAttr(wrapper, 'decrement-button');
    decButton.simulate('click');

    const count = findElementByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });

  it('non-zero count', () => {
    const countStart = findElementByTestAttr(wrapper, 'count').text();
    expect(countStart).toBe('0');

    const decButton = findElementByTestAttr(wrapper, 'decrement-button');
    decButton.simulate('click');

    const countEdn = findElementByTestAttr(wrapper, 'count').text();
    expect(countEdn).toBe('0');
  });
});
