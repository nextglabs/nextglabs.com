import localFont from "@next/font/local";

const circluarStd = localFont({
  src: [
    {
      path: "../../public/assets/fonts/CircularStd-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/CircularStd-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/assets/fonts/CircularStd-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/assets/fonts/CircularStd-Black.woff2",
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
