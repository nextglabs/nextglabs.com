import type * as ReactDom from "react-dom";
import "@testing-library/jest-dom";
import { useInView } from "react-intersection-observer";
import mockRouter from "next-router-mock";

mockRouter.locale = "en";

jest.mock("next/router", () => require("next-router-mock"));

// !Workaround for TypeError: env.window.matchMedia is not a function
// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: "3rdParty",
    init: () => {},
  },
  // mock the Trans component
  Trans: ({ i18nKey }) => {
    return i18nKey;
  },
}));

jest.mock("react-intersection-observer");
(useInView as jest.Mock<any>).mockImplementation(() => [null, true]);

// Fixes react-fast-marquee error "ResizeObserver not defined"
// See: https://github.com/ZeeCoder/use-resize-observer/issues/40
https: window.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Fixes "Error: Uncaught [TypeError: (0 , _reactdom.preload) is not a function]""
// See: https://github.com/vercel/next.js/issues/53272
jest.mock("react-dom", () => ({
  ...jest.requireActual<typeof ReactDom>("react-dom"),
  preload: jest.fn(),
}));
