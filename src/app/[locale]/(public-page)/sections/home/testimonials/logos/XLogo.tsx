import React from "react";
import useTheme from "@/utils/hooks/useTheme";

const XLogo: React.FC = () => {
  const mode = useTheme((state) => state.mode);
  const fillColor = mode === "dark" ? "white" : "#000";

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="x-logo"
    >
      <path
        d="M91.724 72.4375L106.295 55.5002H102.842L90.1901 70.2066L80.0852 55.5002H68.4304L83.711 77.7389L68.4304 95.5002H71.8834L85.244 79.9698L95.9155 95.5002H107.57L91.7231 72.4375H91.724ZM86.9946 77.9348L85.4464 75.7204L73.1276 58.0996H78.4312L88.3726 72.3201L89.9208 74.5346L102.844 93.0191H97.5399L86.9946 77.9357V77.9348Z"
        fill={fillColor}
      ></path>
    </svg>
  );
};

export default XLogo; 