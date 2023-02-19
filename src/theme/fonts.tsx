import localFont from "@next/font/local";

const circluarStd = localFont({
  src: [
    {
      path: "../../public/assets/fonts/CircularStd-book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/CircularStd-medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/assets/fonts/CircularStd-bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/assets/fonts/CircularStd-bold.woff2",
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
