import { shallow } from 'enzyme';

import { findElementByTestAttr } from '../../../test/testUtils';
import Congrats from './Congrats';

describe('<Congrats />', () => {
  const setup = (props = {}) => shallow(<Congrats {...props} />);

  it('renders without error', () => {
    const wrapper = setup();
    const component = findElementByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
  });

  it('renders no text when "success" prop is false', () => {
    const wrapper = setup({ success: false });
    const component = findElementByTestAttr(wrapper, 'component-congrats');

    expect(component.text()).toBe('');
  });
  it('renders non-empty message when "success" prop is true', () => {
    const wrapper = setup({ success: true });
    const message = findElementByTestAttr(wrapper, 'congrats-message');

    expect(message.text().length).not.toBe(0);
  });
});
