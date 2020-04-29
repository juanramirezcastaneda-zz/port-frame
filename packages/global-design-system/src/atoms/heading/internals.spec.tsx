import React from 'react';
import renderer from 'react-test-renderer';
import { Heading } from './internals';
import { MockThemeProvider } from '~/theme/mock';

describe('Heading', () => {
  it('should render a text component as expected', () => {
    const givenHeading = 'fakeHeading';
    const givenFontSize = '400';
    const givenAsHeading = 'h3';
    const givenColor = 'green';

    const tree = renderer
      .create(
        <MockThemeProvider>
          <Heading asHeading={givenAsHeading} color={givenColor} fontSize={givenFontSize}>
            {givenHeading}
          </Heading>
        </MockThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
