import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from './internals';

describe('Text', () => {
  it('should render a text component as expected', () => {
    const givenText = `fakeText`;
    const givenSize = `100`;

    const theme = {
      fontSizes: ['100'],
    };

    const tree = renderer
      .create(
        <Text theme={theme} size={givenSize}>
          {givenText}
        </Text>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
