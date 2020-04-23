module.exports = {
  extends: ['@port-frame/eslint-config/react'],
  plugins: ['filenames'],

  rules: {
    'filenames/match-regex': [2, '^[a-z-.]+$', true],
  },
};
