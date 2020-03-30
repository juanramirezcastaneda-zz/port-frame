module.exports = {
  '*.json': ['prettier --write', 'git add'],
  '*.{ts,tsx}': ['stylelint'],
};
