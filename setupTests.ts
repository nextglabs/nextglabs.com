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
