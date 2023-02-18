import { Global } from "@emotion/react";

export const fonts = {
  heading: "'Circular Std', sans-serif",
  body: "'Circular Std', sans-serif",
};

export const GlobalFonts = () => (
  <Global
    styles={`
		/* latin */
		@font-face {
			font-family: 'Circular Std';
			font-style: normal;
			font-weight: 450;
			src: local('Circular Std'), url('https://fonts.cdnfonts.com/s/15011/CircularStd-Book.woff') format('woff');
			font-display: swap;
		}
		@font-face {
			font-family: 'Circular Std';
			font-style: italic;
			font-weight: 450;
			src: local('Circular Std'), url('https://fonts.cdnfonts.com/s/15011/CircularStd-BookItalic.woff') format('woff');
			font-display: swap;
		}
		@font-face {
			font-family: 'Circular Std';
			font-style: normal;
			font-weight: 500;
			src: local('Circular Std'), url('https://fonts.cdnfonts.com/s/15011/CircularStd-Medium.woff') format('woff');
			font-display: swap;
		}
		@font-face {
			font-family: 'Circular Std';
			font-style: italic;
			font-weight: 500;
			src: local('Circular Std'), url('https://fonts.cdnfonts.com/s/15011/CircularStd-MediumItalic.woff') format('woff');
			font-display: swap;
		}
		@font-face {
			font-family: 'Circular Std';
			font-style: normal;
			font-weight: 700;
			src: local('Circular Std'), url('https://fonts.cdnfonts.com/s/15011/CircularStd-Bold.woff') format('woff');
			font-display: swap;
		}
		@font-face {
			font-family: 'Circular Std';
			font-style: italic;
			font-weight: 700;
			src: local('Circular Std'), url('https://fonts.cdnfonts.com/s/15011/CircularStd-BoldItalic.woff') format('woff');
			font-display: swap;
		}
		@font-face {
			font-family: 'Circular Std';
			font-style: normal;
			font-weight: 900;
			src: local('Circular Std'), url('https://fonts.cdnfonts.com/s/15011/CircularStd-Black.woff') format('woff');
			font-display: swap;
		}
		@font-face {
			font-family: 'Circular Std';
			font-style: italic;
			font-weight: 900;
			src: local('Circular Std'), url('https://fonts.cdnfonts.com/s/15011/CircularStd-BlackItalic.woff') format('woff');
			font-display: swap;
		}		
		`}
  />
);
