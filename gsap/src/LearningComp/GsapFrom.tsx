import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GsapFrom() {
  useGSAP(() => {
    gsap.from("#green-box", {
      x: 240,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 3,
      //   ease: "circ",
    });
  }, []);

  return (
    <div className="px-10 py-10">
      <div id="green-box" className="w-20 h-20 bg-green-600"></div>
    </div>
  );
}
