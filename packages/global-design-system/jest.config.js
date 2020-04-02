module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(svg)$': 'identity-obj-proxy', //Required for jest to mock svg as js
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  globals: {
    'ts-jest': {
      tsConfig: {
        jsx: 'react',
      },
    },
  },
};
