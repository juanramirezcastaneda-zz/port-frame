import React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from './internals';

describe('Icon', () => {
  it('should render an icon component as expected', () => {
    const givenIcon = 'bars';

    const tree = renderer.create(<Icon icon={givenIcon} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
