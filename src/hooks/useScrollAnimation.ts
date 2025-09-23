import { useEffect } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  selectors: string[];
}

export const useScrollAnimation = ({ 
  selectors, 
  threshold = 150 
}: UseScrollAnimationOptions) => {
  
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const animateOnScroll = () => {
      try {
        const elements = document.querySelectorAll(selectors.join(', '));
        
        elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          
          if (elementTop < window.innerHeight - threshold) {
            const el = element as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        });
      } catch (err) {
        console.error('Animation error:', err);
      }
    };

    const initializeAnimations = () => {
      try {
        const elements = document.querySelectorAll(selectors.join(', '));
        
        elements.forEach(element => {
          const el = element as HTMLElement;
          el.style.opacity = '0';
          el.style.transform = 'translateY(50px)';
          el.style.transition = 'all 0.6s ease';
        });
      } catch (err) {
        console.error('Initialize animation error:', err);
      }
    };

    // Initialize after a short delay
    setTimeout(() => {
      initializeAnimations();
      animateOnScroll();
      window.addEventListener('scroll', animateOnScroll);
    }, 100);

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, [selectors, threshold]);
};