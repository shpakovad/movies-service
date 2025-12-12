import { useRef, useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const atBottom = scrollTop !== 0 && Math.abs(scrollHeight - scrollTop - clientHeight) === 0;
      setIsAtBottom(atBottom);
    };
    let timeoutId: NodeJS.Timeout;
    const debouncedCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkScrollPosition, 50);
    };
    checkScrollPosition();

    window.addEventListener('scroll', debouncedCheck);
    window.addEventListener('resize', debouncedCheck);

    return () => {
      window.removeEventListener('scroll', debouncedCheck);
      window.removeEventListener('resize', debouncedCheck);
      clearTimeout(timeoutId);
    };
  }, []);

  return {
    isAtBottom,
    bottomRef,
  };
};
