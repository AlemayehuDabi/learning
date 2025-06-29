import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 240,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 3,
      ease: "circ",
    });
  }, []);

  return (
    <div className="px-10 py-10">
      <div id="blue-box" className="w-20 h-20 bg-blue-600"></div>
    </div>
  );
}

export default App;
