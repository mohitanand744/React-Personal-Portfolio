import { useState, useEffect } from "react";

const CursorFollowing = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) {
        setShowCursor(true);
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    if (window.innerWidth > 768) {
      window.addEventListener("mouseout", () => setShowCursor(false));
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`followCursor w-8 h-8 fixed rounded-full pointer-events-none ${
        showCursor ? "block" : "hidden"
      }`}
      style={{
        top: `${mousePosition.y}px`,
        left: `${mousePosition.x}px`,
      }}
    ></div>
  );
};

export default CursorFollowing;
