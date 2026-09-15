import { useEffect, useRef } from "react";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) {
      return undefined;
    }

    document.documentElement.classList.add("custom-cursor-active");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    let animationFrame;

    const handleMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    const handleEnter = () => {
      ring.classList.add("cursor-hover");
    };

    const handleLeave = () => {
      ring.classList.remove("cursor-hover");
    };

    const interactiveElements = document.querySelectorAll(
      "a, button, [data-cursor='hover']",
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleEnter);
      element.addEventListener("mouseleave", handleLeave);
    });

    window.addEventListener("pointermove", handleMove);

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("pointermove", handleMove);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleEnter);
        element.removeEventListener("mouseleave", handleLeave);
      });

      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}

export default CustomCursor;