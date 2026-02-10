import { useEffect, useState } from "react";
import ShapingTomorrow from "../components/about/shapingTomorrow";
import CeoMessage from "../components/about/ceoMessage";
import DeploymentScaling from "../components/about/deploymentscaling";
import CoreValues from "../components/about/coreValues";
import MeetExperts from "../components/about/meetExperts";
import ChooseAstrumai from "../components/about/chooseAstrumai";
import RightFit from "../components/about/rightFit";

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 brightness-150" />
        <div className="absolute inset-0 bg-size-[40px_40px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        <div className="pt-20">
          {" "}
          {/* Header spacing */}
          <ShapingTomorrow />
        </div>
        <div className="space-y-0">
          <CeoMessage />
          <DeploymentScaling />
          <RightFit />
          <CoreValues />
          <MeetExperts />
          <ChooseAstrumai />
        </div>
      </div>
    </div>
  );
}
