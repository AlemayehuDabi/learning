import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function BallBounce() {
  const element = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      element.current,
      {
        y: 0,
        opacity: 1,
      },
      {
        y: "400",
        opacity: 0,
        ease: "bounce.out",
        duration: 3,
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  return (
    <div className="flex justify-center min-h-screen">
      <div ref={element} className="w-20 h-20 rounded-full bg-amber-800"></div>
    </div>
  );
}
