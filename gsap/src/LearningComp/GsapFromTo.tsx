import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function GsapFromTo() {
  useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {
        y: 0,
        borderRadius: 0,
      },
      {
        y: 240,
        repeat: -1,
        yoyo: true,
        rotation: 360,
        duration: 3,
        borderRadius: "100%",
        ease: "bounce.inOut",
      }
    );
  }, []);

  return (
    <div className="px-10 py-10">
      <div id="red-box" className="w-20 h-20 bg-red-600"></div>
    </div>
  );
}
