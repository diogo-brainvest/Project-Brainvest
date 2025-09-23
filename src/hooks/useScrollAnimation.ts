import { useCallback, useEffect, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  selectors: string[];
}

export const useScrollAnimation = ({ 
  selectors, 
  threshold = 150 
}: UseScrollAnimationOptions) => {
  const [isClient, setIsClient] = useState(false);

  // Only run on client, not during SSR
  useEffect(() => {
    setIsClient(true);
  }, []);

  const animateOnScroll = useCallback(() => {
    // Don't run during SSR
    if (!isClient) return;
    
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
      console.error('Error in animateOnScroll:', err);
    }
  }, [selectors, threshold, isClient]);

  const initializeAnimations = useCallback(() => {
    // Don't run during SSR
    if (!isClient) return;
    
    try {
      const elements = document.querySelectorAll(selectors.join(', '));
      
      elements.forEach(element => {
        const el = element as HTMLElement;
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.6s ease';
      });
    } catch (err) {
      console.error('Error in initializeAnimations:', err);
    }
  }, [selectors, isClient]);

  useEffect(() => {
    // Don't run during SSR
    if (!isClient) return;

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      initializeAnimations();
      animateOnScroll(); // Initial check
      
      window.addEventListener('scroll', animateOnScroll);
    }, 100);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, [animateOnScroll, initializeAnimations, isClient]);

  return { animateOnScroll, initializeAnimations };
};