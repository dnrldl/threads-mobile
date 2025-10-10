import { useEffect, useRef, useState } from 'react';

type ScrollDirection = 'up' | 'down';

interface UseScrollDirectionOptions {
  threshold?: number;
}

// 스크롤 방향(up/down)을 감지하는 커스텀 훅
export function useScrollDirection({ threshold = 30 }: UseScrollDirectionOptions = {}) {
  const [direction, setDirection] = useState<ScrollDirection>('up');
  const lastScrollY = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0);
  const ticking = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const updateDirection = () => {
      const currentScrollY = window.scrollY;
      const diff = Math.abs(currentScrollY - lastScrollY.current);

      if (diff < threshold) {
        ticking.current = false;
        return;
      }

      setDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = Math.max(currentScrollY, 0);
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateDirection);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return direction;
}
