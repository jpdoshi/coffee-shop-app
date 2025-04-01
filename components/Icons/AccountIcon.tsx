import React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";

const AccountIcon = ({
  size,
  focused,
}: {
  size?: string | number;
  focused: boolean;
}) => {
  return (
    <Svg
      height={size?.toString() || "32"}
      width={size?.toString() || "32"}
      viewBox="0 0 32 32"
      fill="none"
    >
      <Circle
        cx="16"
        cy="16"
        fill="none"
        r="15"
        stroke={focused ? "#C67C4E" : "#848484"}
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2.5"
      />

      <Path
        d="M26,27L26,27   c0-5.523-4.477-10-10-10h0c-5.523,0-10,4.477-10,10v0"
        fill="none"
        stroke={focused ? "#C67C4E" : "#848484"}
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2.5"
      />

      <Circle
        cx="16"
        cy="11"
        fill="none"
        r="6"
        stroke={focused ? "#C67C4E" : "#848484"}
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2.5"
      />
    </Svg>
  );
};

export default AccountIcon;
