const colors = {
  primary: "#D81A61",
  gray12: "#36393C",
  gray11: "#4F5357",
  gray10: "#64696E",
  gray09: "#7C8389",
  gray08: "#959CA4",
  gray07: "#AFB8C1",
  gray06: "#bdc5cc",
  gray05: "#CDD2D8",
  gray04: "#dde0e4",
  gray03: "#ECEEF0",
  gray02: "#F6F7FA",
  gray01: "#FAFAFC",
  black: "#181818",
  white: "#ffffff",
};

function FONT({ weight, size, lineHeight, letterSpacing }) {
  return `
      font-family: 'pretendard', sans-serif;
      font-weight: ${weight};
      font-style: normal;
      font-size: ${size}rem;
      line-height: ${lineHeight}rem;
      ${letterSpacing && `letter-spacing: -0.0${letterSpacing}rem;`}
  `;
}
const fonts = {
  display01: FONT({ weight: 700, size: 4.8, lineHeight: 4 }),
  display02: FONT({ weight: 700, size: 3.2, lineHeight: 4 }),
  headline1: FONT({ weight: 700, size: 2.8, lineHeight: 3.6 }),
  headline2_bold: FONT({ weight: 700, size: 2.4, lineHeight: 3.2 }),
  headline2_medium: FONT({ weight: 500, size: 2.4, lineHeight: 3.2 }),
  subhead1_bold: FONT({ weight: 700, size: 2, lineHeight: 2.6 }),
  subhead1_medium: FONT({ weight: 500, size: 2, lineHeight: 2.6 }),
  subhead2_bold: FONT({ weight: 700, size: 1.8, lineHeight: 2.2 }),
  subhead2_semibold: FONT({ weight: 600, size: 1.8, lineHeight: 2.4 }),
  subhead2_medium: FONT({ weight: 500, size: 1.8, lineHeight: 2.4 }),
  body1_medium: FONT({ weight: 500, size: 1.5, lineHeight: 2.4 }),
  body2_bold: FONT({ weight: 700, size: 1.4, lineHeight: 1.6 }),
  body2_medium: FONT({ weight: 500, size: 1.4, lineHeight: 2 }),
  body2_regular: FONT({ weight: 400, size: 1.4, lineHeight: 2 }),
  body3_medium: FONT({ weight: 500, size: 1.2, lineHeight: 1.6 }),
  body3_regular: FONT({ weight: 400, size: 1.2, lineHeight: 1.6 }),
  body4: FONT({ weight: 500, size: 1.0, lineHeight: 1.5 }),
  caption: FONT({
    weight: 500,
    size: 1,
    lineHeight: 1.6,
    letterSpacing: 0.04,
  }),
};
export const theme = {
  colors,
  fonts,
};
