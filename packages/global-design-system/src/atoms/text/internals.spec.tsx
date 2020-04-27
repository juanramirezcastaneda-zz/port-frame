import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from './internals';
import defaultTheme from '~/theme';

describe('Text', () => {
  it('should render a text component as expected', () => {
    const givenText = `fakeText`;
    const givenSize = `100`;

    const tree = renderer
      .create(
        <Text theme={defaultTheme} size={givenSize}>
          {givenText}
        </Text>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
