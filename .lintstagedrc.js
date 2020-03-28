module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'git add', 'eslint'],
  '*.json': ['prettier --write', 'git add'],
  '*.{ts,tsx}': ['stylelint'],
};
