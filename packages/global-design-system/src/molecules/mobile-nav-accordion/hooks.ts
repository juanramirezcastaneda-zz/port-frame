import { useState, useCallback } from 'react';
import { useMeasure, usePrevious } from 'react-use';
import { useSpring } from 'react-spring';

export function useAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  const previous = usePrevious(isOpen);
  const [ref, { height: viewHeight }] = useMeasure();

  // @ts-ignore issue with types in non-beta version of react-spring
  const { height } = useSpring({
    from: { height: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
    },
  });

  const toggleAccordion = useCallback(() => {
    setIsOpen((isOpen) => {
      return !isOpen;
    });
  }, []);

  return { height: isOpen && previous === isOpen ? 'auto' : height, toggleAccordion, ref, isOpen };
}
