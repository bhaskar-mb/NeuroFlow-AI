import { useEffect, useRef, useState } from 'react';

export function useScrollReveal() {
  const [hasRevealed, setHasRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05, // Trigger as soon as 5% is visible
        rootMargin: '0px 0px -80px 0px' // Trigger slightly before entering viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, hasRevealed };
}
