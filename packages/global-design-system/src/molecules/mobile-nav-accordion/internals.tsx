import React from 'react';
import { MobileNavAccordionStyled, SubLinks, SubLinksContainer, IconLink, Header } from './styled';
import { MobileNavAccordionProps } from './types';
import { MobileNavLink } from '~/atoms/mobile-nav-link';
import { useAccordion } from './hooks';
import { animated } from 'react-spring';
import { Icon } from '~/atoms/icon';

export function MobileNavAccordion({ title, url, children }: MobileNavAccordionProps) {
  const { height, toggleAccordion, ref, isOpen } = useAccordion();

  return (
    <MobileNavAccordionStyled>
      <Header>
        <MobileNavLink href={url}>{title}</MobileNavLink>
        <IconLink onClick={toggleAccordion} isOpen={isOpen}>
          <Icon icon="chevronDown" />
        </IconLink>
      </Header>
      <SubLinksContainer>
        <animated.div style={{ height }}>
          <SubLinks ref={ref}>{children}</SubLinks>
        </animated.div>
      </SubLinksContainer>
    </MobileNavAccordionStyled>
  );
}
