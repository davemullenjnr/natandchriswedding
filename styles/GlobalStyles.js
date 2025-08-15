import { createGlobalStyle } from 'styled-components';
import { breakpoint, color, typography } from '.';

const GlobalStyles = createGlobalStyle`
      /* Import custom fonts */
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Medium.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Recoleta';
    src: url('/fonts/Recoleta-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Recoleta';
    src: url('/fonts/Recoleta-Black.woff') format('woff');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Druk';
    src: url('/fonts/DrukTextWide-Super-Web.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Druk';
    src: url('/fonts/DrukWide-Medium.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

/* Reset basic styling */
* {
  box-sizing: border-box !important;
  margin: 0;
}

input,
select,
textarea,
button {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
hr,
dl,
dd,
ol,
ul,
figure {
  margin: 0;
  padding: 0;
}

/* Basic styling */
html {
  font-family: sans-serif;
  font-size: 16px;
  scroll-behavior: smooth;
}

@media only screen and (min-width: 1536px) {
  html {
    font-size: 20px;
  }
}

@media only screen and (min-width: 2000px) {
  html {
    font-size: 24px;
  }
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background: #fff; /* override as needed */
  color: ${color.green[90]};      /* override as needed */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-wrap: break-word;
  font-size: ${typography.size.f7};
      @media ${breakpoint.sm} {
        font-size: ${typography.size.f6};
      }
      @media ${breakpoint.md} {
        font-size: ${typography.size.f5};
      }
      @media ${breakpoint.lg} {
        font-size: ${typography.size.f4};
      }
}

b {
  font-weight: bold;
}

i,
em {
  font-style: italic;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
  line-height: 1.25;
}

a {
  color: inherit;
  text-decoration: underline;
}

img {
  width: 100%;
  height: auto;
  display: inherit;
}

::selection {
  background: #e8e5e4;
  color: #323438;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}

mark {
  background-color: #ff0;
  color: #000;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}

svg:not(:root) {
  overflow: hidden;
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

figure {
  margin: 1em 40px;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

button,
input,
optgroup,
select,
textarea {
  font: inherit;
  margin: 0;
}

:focus {
  outline: cornflowerblue auto;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}
[type='reset'],
[type='submit'],
button,
html [type='button'] {
  -webkit-appearance: button;
}
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  border: 1px solid silver;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
textarea {
  overflow: auto;
}
[type='checkbox'],
[type='radio'] {
  box-sizing: border-box;
  padding: 0;
}
[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}
[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type='search']::-webkit-search-cancel-button,
[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

html {
  box-sizing: border-box;
  overflow-y: scroll;
}
* {
  box-sizing: inherit;
}
*:before {
  box-sizing: inherit;
}
*:after {
  box-sizing: inherit;
}`;

export default GlobalStyles;
