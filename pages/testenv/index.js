import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function ParallaxTest() {
  const ref = useRef(null);

  // Use useScroll to track the scroll progress of the ref element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Transform the Y position based on scroll progress
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div style={{ height: "200vh", overflowY: "scroll" }}>
      {/* Scrollable container */}
      <div
        ref={ref}
        style={{
          height: "150vh",
          position: "relative",
          backgroundColor: "#0a0a0a",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* Parallax Image */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: 'url(/image-full.png)',
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: imageY, // Apply the Y transform
          }}
        />

        {/* Foreground Text */}
        <h1 style={{ zIndex: 1, fontSize: "3rem" }}>
          Scroll to see the Parallax Effect
        </h1>
      </div>
      {/* Additional content to ensure scrolling */}
      <div style={{ height: "100vh", backgroundColor: "#06141D" }}>
        <p style={{ color: "#fff", padding: "20px" }}>More content below...</p>
      </div>
    </div>
  );
}
