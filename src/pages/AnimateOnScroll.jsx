import { useRef, useState, useEffect } from 'react';

const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const makeAppear = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) setIsVisible(true);
  };

  const makeAppearRepeating = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const callBack = options.reappear ? makeAppearRepeating : makeAppear;

  useEffect(() => {
    const containerRefCurrent = containerRef.current;
    const observer = new IntersectionObserver(callBack, options);
    if (containerRefCurrent) observer.observe(containerRefCurrent);

    return () => {
      if (containerRefCurrent) {
        observer.unobserve(containerRefCurrent);
      }
    };
  }, [containerRef, options, callBack]);

  return [containerRef, isVisible];
};

export const AnimateOnScroll = (props) => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: 0.3,
    // reappear: reappear,
  });

  return (
    <div
      ref={containerRef}
      className={`transition duration-1000 ${
        isVisible ? 'opacity-100  translate-x-0' : 'opacity-20 -translate-x-20'
      }  motion-reduce:transition-none motion-reduce:hover:transform-none`}
    >
      {props}
    </div>
  );
};

export const VerticalOnScroll = (props) => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: 0.7,
    // reappear: reappear,
  });
  console.log(props);
  const { ...prop } = props;
  console.log(prop.children);

  return (
    <div
      ref={containerRef}
      className={`transition duration-1000 ${
        isVisible ? 'opacity-100  translate-y-0' : 'opacity-20 -translate-y-20'
      }  motion-reduce:transition-none motion-reduce:hover:transform-none h-3/4`}
    >
      {prop.children}
    </div>
  );
};
