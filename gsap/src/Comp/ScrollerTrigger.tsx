import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function ScrollerTrigger() {
  useGSAP(() => {
    const boxes = gsap.utils.toArray(".box");

    gsap.fromTo(
      boxes,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".trigger-container",
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-100">
      <div className="flex gap-5 trigger-container">
        <div className="box w-20 h-20 rounded-full bg-amber-800"></div>
        <div className="box w-20 h-20 rounded-full bg-green-500"></div>
        <div className="box w-20 h-20 rounded-full bg-yellow-500"></div>
      </div>
    </div>
  );
}
