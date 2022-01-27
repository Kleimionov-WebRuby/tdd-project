import { shallow } from 'enzyme';

import { findElementByTestAttr } from './test/testUtils';
import App from './App';

const setup = () => {
  return shallow(<App />);
};

describe('<App />', () => {
  it('render without error', () => {
    const wrapper = setup();
    const appComponent = findElementByTestAttr(wrapper, 'component-app');

    expect(appComponent).toHaveLength(1);
  });
});
