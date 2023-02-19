import localFont from "@next/font/local";
import fontBook from "./fonts/CircularStd-book.woff2";
import fontMedium from "./fonts/CircularStd-medium.woff2";
import fontBold from "./fonts/CircularStd-bold.woff2";
import fontBlack from "./fonts/CircularStd-black.woff2";

const circluarStd = localFont({
  src: [
    {
      path: fontBook,
      weight: "400",
      style: "normal",
    },
    {
      path: fontMedium,
      weight: "500",
      style: "medium",
    },
    {
      path: fontBold,
      weight: "700",
      style: "bold",
    },
    {
      path: fontBlack,
      weight: "900",
      style: "black",
    },
  ],
  display: "swap",
  fallback: ["system-ui, sans-serif"],
  adjustFontFallback: "Arial",
});

export const fonts = {
  heading: circluarStd.style.fontFamily,
  body: circluarStd.style.fontFamily,
};
