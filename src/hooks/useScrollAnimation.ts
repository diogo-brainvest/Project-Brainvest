import { useCallback, useEffect } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  selectors: string[];
}

export const useScrollAnimation = ({ 
  selectors, 
  threshold = 150 
}: UseScrollAnimationOptions) => {
  const animateOnScroll = useCallback(() => {
    const elements = document.querySelectorAll(selectors.join(', '));
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < window.innerHeight - threshold) {
        const el = element as HTMLElement;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  }, [selectors, threshold]);

  const initializeAnimations = useCallback(() => {
    const elements = document.querySelectorAll(selectors.join(', '));
    
    elements.forEach(element => {
      const el = element as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
      el.style.transition = 'all 0.6s ease';
    });
  }, [selectors]);

  useEffect(() => {
    initializeAnimations();
    animateOnScroll(); // Initial check
    
    window.addEventListener('scroll', animateOnScroll);
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, [animateOnScroll, initializeAnimations]);

  return { animateOnScroll, initializeAnimations };
};