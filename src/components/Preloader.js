import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const Preloader = () => {
  const logoRef = useRef(null);
  const [randomDirection, setRandomDirection] = useState(null);

  useEffect(() => {
    const random = Math.random();
    if (random < 0.1) {
      setRandomDirection("leftToRight");
    } else {
      setRandomDirection("upToDown");
    }

    const logo = logoRef.current;
    const timeline = gsap.timeline();

    if (randomDirection === "leftToRight") {
      timeline.fromTo(
        logo,
        { opacity: 0, x: -1000 },
        { opacity: 1, x: 0, duration: 2, ease: "circ.inOut" }
      );
    } else {
      timeline.fromTo(
        logo,
        { opacity: 0, y: -1000 },
        { opacity: 1, y: 0, duration: 1, ease: "circ.inOut" }
      );
    }
  }, [randomDirection]);

  return (
    <svg
      ref={logoRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 375 374.999991"
      preserveAspectRatio="xMidYMid meet"
      width="50"
      height="50"
    >
      <defs>
        <clipPath id="clip-path">
          <path d="M 9 59 L 368.84375 59 L 368.84375 302.78125 L 9 302.78125 Z M 9 59 " />
        </clipPath>
      </defs>
      <g clipPath="url(#clip-path)">
        <path
          fill="#ffffff"
          d="M 135.6875 88.789062 L 151.300781 76.5 C 190.777344 45.464844 248.828125 58.695312 270.984375 103.777344 L 368.632812 302.574219 L 328.441406 302.574219 C 297.6875 302.574219 269.625 285.011719 256.15625 257.371094 L 191.75 125.203125 C 187.070312 115.597656 180.195312 107.171875 171.59375 100.800781 C 162.945312 94.414062 151.089844 88.929688 136.136719 89.347656 C 139.601562 93.714844 142.664062 98.519531 145.222656 103.757812 L 242.890625 302.574219 L 202.699219 302.574219 C 171.941406 302.574219 143.882812 285.011719 130.410156 257.371094 L 66.007812 125.203125 C 61.328125 115.597656 54.449219 107.171875 45.851562 100.800781 C 36.957031 94.238281 24.703125 88.617188 9.160156 89.398438 L 25.554688 76.5 C 60.246094 49.226562 109.28125 56.117188 135.6875 88.789062 Z M 53.199219 217.910156 L 9.125 302.503906 L 119.21875 302.46875 L 76.730469 218.082031 C 71.890625 208.457031 58.175781 208.355469 53.199219 217.910156 Z"
        />
      </g>
    </svg>
  );
};

export default Preloader;
