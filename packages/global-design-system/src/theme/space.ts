const Space = {
  '000': '0',
  '100': '0.125rem', // 2px
  '200': '0.25rem', // 4px
  '300': '0.5rem', // 8px
  '400': '1rem', // 16px
  '500': '1.5rem', // 24px
  '600': '2rem', // 32px
  '700': '2.5rem', // 40px
  '800': '3rem', // 48px
  '900': '4rem', // 64px
  '1000': '5rem', // 80px
  mobileGutter: '0.25rem',
  tabletGutter: '0.5rem',
  desktopGutter: '0.75rem', // half of 24
} as const;

export default Space;
