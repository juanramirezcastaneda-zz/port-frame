module.exports = {
  '*.{js,jsx,ts,tsx}': ['git add', 'eslint'],
  '*.json': ['prettier --write', 'git add'],
  '*.{ts,tsx}': ['stylelint'],
};
