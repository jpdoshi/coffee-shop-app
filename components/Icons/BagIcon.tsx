import Svg, { G, Path } from "react-native-svg";

const BagIcon = ({
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
      viewBox="0 0 24 24"
      fill="none"
    >
      <G id="SVGRepo_iconCarrier">
        <Path
          d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
          stroke={focused ? "#C67C4E" : "#848484"}
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z"
          stroke={focused ? "#C67C4E" : "#848484"}
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.4955 12H15.5045"
          stroke={focused ? "#C67C4E" : "#848484"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.49451 12H8.50349"
          stroke={focused ? "#C67C4E" : "#848484"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

export default BagIcon;
