import { useState, useEffect } from 'react';

/**
 * Custom hook for triggering animations when elements scroll into view
 * @param {Object} options - Configuration options
 * @param {string} options.rootMargin - Margin around the root element (default: '0px 0px -100px 0px')
 * @param {number} options.threshold - Visibility threshold to trigger callback (default: 0.1)
 * @param {boolean} options.triggerOnce - Whether to trigger the animation only once (default: true)
 * @returns {Array} - [ref, isVisible] where ref is the reference to attach to the element and isVisible is a boolean
 */
const useScrollAnimation = (options = {}) => {
  const {
    rootMargin = '0px 0px -100px 0px',
    threshold = 0.1,
    triggerOnce = true
  } = options;
  
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Unobserve if we only want to trigger once
          if (triggerOnce && ref) {
            observer.unobserve(ref);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, rootMargin, threshold, triggerOnce]);

  return [setRef, isVisible];
};

export default useScrollAnimation;