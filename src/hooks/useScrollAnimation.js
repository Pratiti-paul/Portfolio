import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { 
      threshold: 0.15, // Trigger when 15% visible
      rootMargin: "0px 0px -50px 0px" // Trigger slightly before bottom
    });

    const hiddenElements = document.querySelectorAll('.reveal, .reveal-scale, .stagger-container');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);
};

export default useScrollAnimation;
