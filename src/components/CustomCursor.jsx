import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Track cursor with smooth interpolation
    let cursorX = 0;
    let cursorY = 0;
    let targetX = 0;
    let targetY = 0;
    const speed = 0.15; // Lower = smoother inertia

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updatePosition = () => {
      cursorX += (targetX - cursorX) * speed;
      cursorY += (targetY - cursorY) * speed;
      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', onMouseMove);
    const animationFrameId = requestAnimationFrame(updatePosition);

    // Hover effect classes
    const addHover = () => {
      if (cursor) cursor.classList.add('hovered');
    };
    const removeHover = () => {
      if (cursor) cursor.classList.remove('hovered');
    };

    const attachListeners = (elements) => {
      elements.forEach((el) => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    };

    // Attach to initial interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .interactive-hover');
    attachListeners(interactiveElements);

    // Observer for dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const interactiveItems = node.querySelectorAll('a, button, [role="button"], input, textarea, select, .interactive-hover');
              attachListeners(interactiveItems);
              if (node.matches('a, button, [role="button"], input, textarea, select, .interactive-hover')) {
                node.addEventListener('mouseenter', addHover);
                node.addEventListener('mouseleave', removeHover);
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="custom-cursor hidden md:block fixed top-0 left-0" 
      aria-hidden="true"
    />
  );
};

export default CustomCursor;
