import { Service } from "@/components/Services/types";
import animationIcon from "public/assets/icons/animation.svg";
import bulbIcon from "public/assets/icons/bulb.svg";
import mobileIcon from "public/assets/icons/mobile.svg";
import programmingIcon from "public/assets/icons/programming.svg";
import prototypingIcon from "public/assets/icons/prototyping.svg";
import webDesignIcon from "public/assets/icons/webdesign.svg";

export const SERVICES: Service[] = [
  { key: "webDesign", icon: webDesignIcon },
  { key: "webDevelopment", icon: programmingIcon },
  { key: "mobileApps", icon: mobileIcon },
  { key: "prototyping", icon: prototypingIcon },
  { key: "animation", icon: animationIcon },
  { key: "consulting", icon: bulbIcon },
];

export const TICKER_KEYS = ["webDesign", "programming", "seo", "consulting"];

export const TICKER_SEPARATOR_COLORS = ["secondary.300", "primary.300", "pink.300", "orange.300"];
