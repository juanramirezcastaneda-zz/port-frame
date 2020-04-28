import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from './internals';
import { MockThemeProvider } from '~/theme/mock';

describe('Text', () => {
  it('should render a text component as expected', () => {
    const givenText = `fakeText`;
    const givenSize = `100`;

    const tree = renderer
      .create(
        <MockThemeProvider>
          <Text size={givenSize}>{givenText}</Text>
        </MockThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
