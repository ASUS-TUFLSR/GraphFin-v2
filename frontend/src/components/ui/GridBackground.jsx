import { cn } from "../../utils/cn";
import React from "react";

const GridBackground = ({ children }) => {
  return (
    <div className="w-full bg-black text-white relative">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0", // Ensure the grid is visible but behind content
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial Gradient Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)] dark:bg-black" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GridBackground;
