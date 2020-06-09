import { css } from 'styled-components';
import Colors from '~/theme/colors';

export type ElevationLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export function getBoxShadow(level: ElevationLevel = 0) {
  switch (level) {
    case 1:
      return 'box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);';
    case 2:
      return 'box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14);';
    case 3:
      return 'box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 3px 4px 0 rgba(0, 0, 0, 0.14);';
    case 4:
      return 'box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 4px 5px 0 rgba(0, 0, 0, 0.14);';
    case 5:
      return 'box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 6px 10px 0 rgba(0, 0, 0, 0.14);';
    case 6:
      return 'box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 8px 10px 1px rgba(0, 0, 0, 0.14);';
    case 7:
      return 'box-shadow: 0 5px 6px -3px rgba(0, 0, 0, 0.2), 0 3px 16px 2px rgba(0, 0, 0, 0.12), 0 9px 12px 1px rgba(0, 0, 0, 0.14);';
    case 8:
      return 'box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 12px 17px 2px rgba(0, 0, 0, 0.14);';
    case 9:
      return 'box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 16px 24px 2px rgba(0, 0, 0, 0.14);';
    case 10:
      return 'box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);';
  }
}

export function getCardElevation(level: ElevationLevel = 0) {
  return css`
    background-color: ${Colors.whiteCore};
    border-radius: 0.25rem;

    ${getBoxShadow(level)}
  `;
}
