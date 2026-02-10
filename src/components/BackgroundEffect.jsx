import React from "react";

const BackgroundEffect = () => {
  return (
    <div className="absolute inset-x-0 top-0 bottom-0 -z-10 overflow-hidden pointer-events-none w-full">
      {/* Top Left Glow */}
      <div className="absolute top-[5%] -left-[10%] w-[50%] h-[30%] rounded-full bg-purple-600/15 blur-[120px] animate-pulse" />

      {/* Middle Right Glow */}
      <div className="absolute top-[25%] -right-[5%] w-[45%] h-[35%] rounded-full bg-violet-600/10 blur-[100px] animate-pulse delay-700" />

      {/* Lower Mid Left Glow */}
      <div className="absolute top-[50%] -left-[5%] w-[40%] h-[30%] rounded-full bg-purple-500/10 blur-[110px] animate-pulse delay-1000" />

      {/* Deep Lower Right Glow */}
      <div className="absolute top-[75%] -right-[10%] w-[50%] h-[40%] rounded-full bg-purple-600/10 blur-[130px] animate-pulse delay-500" />

      {/* Bottom Center Glow */}
      <div className="absolute bottom-[5%] left-[25%] w-[50%] h-[30%] rounded-full bg-violet-600/15 blur-[120px] animate-pulse delay-200" />

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
    </div>
  );
};

export default BackgroundEffect;
