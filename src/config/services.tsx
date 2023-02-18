import { AnimationIcon } from "@/components/Icons/Animation";
import { AppDevelopmentIcon } from "@/components/Icons/AppDevelopment";
import { ConsultingIcon } from "@/components/Icons/Consulting";
import { MobileDesignIcon } from "@/components/Icons/MobileDesign";
import { PrototypingIcon } from "@/components/Icons/Prototyping";
import { WebDesignIcon } from "@/components/Icons/WebDesign";
import { Service } from "@/components/Services/types";

export const SERVICES: Service[] = [
  { key: "webDesign", icon: <WebDesignIcon /> },
  { key: "webDevelopment", icon: <AppDevelopmentIcon /> },
  { key: "mobileApps", icon: <MobileDesignIcon /> },
  { key: "prototyping", icon: <PrototypingIcon /> },
  { key: "animation", icon: <AnimationIcon /> },
  { key: "consulting", icon: <ConsultingIcon /> },
];

export const TICKER_KEYS = ["webDesign", "programming", "seo", "consulting"];

export const TICKER_SEPARATOR_COLORS = ["secondary.300", "primary.300", "pink.300", "orange.300"];
