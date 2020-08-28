import * as React from 'react';
import renderer from 'react-test-renderer';
import { Button } from './internals';
import { MockThemeProvider } from '~/theme/mock';

describe('Button', () => {
  it('should render a button component as expected', () => {
    const givenLabel = 'fakeLabel';
    const givenIsDisable = false;

    const tree = renderer
      .create(
        <MockThemeProvider>
          <Button disabled={givenIsDisable}>{givenLabel}</Button>
        </MockThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render a button component with ghost prop', () => {
    const givenLabel = 'fakeLabel';
    const givenIsDisable = false;
    const givenIsGhost = true;
    const tree = renderer
      .create(
        <MockThemeProvider>
          <Button disabled={givenIsDisable} ghost={givenIsGhost}>
            {givenLabel}
          </Button>
        </MockThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render a button component with secondary appearance prop', () => {
    const givenLabel = 'fakeLabel';
    const givenIsDisable = false;
    const givenAppearance = 'Secondary';
    const tree = renderer
      .create(
        <MockThemeProvider>
          <Button disabled={givenIsDisable} appearance={givenAppearance}>
            {givenLabel}
          </Button>
        </MockThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
