import React, { useRef, useEffect } from "react";

const MultiLayerParallax = () => {
  const ref = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const updateProgress = () => {
          const progress = 1 - entry.intersectionRatio;
          ref.current.style.setProperty("--scroll-progress", progress);
          animationFrameRef.current = null; // Clear the animation frame reference
        };

        if (!animationFrameRef.current) {
          animationFrameRef.current = requestAnimationFrame(updateProgress);
        }
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
      style={{
        "--scroll-progress": 1,
      }}
    >
      <h1
        style={{
          transform: `translateY(calc(var(--scroll-progress) * 350%))`,
        }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10"
      >
        PARALLAX
      </h1>
      <div
        className="absolute inset-0 z-0 mix-blend-color-dodge"
        style={{
          backgroundImage: `url(/image-full.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          transform: `translateY(calc(var(--scroll-progress) * 50%))`

        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/image-bottom.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};

export default MultiLayerParallax;
