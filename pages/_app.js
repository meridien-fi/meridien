import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul,
blockquote {
  margin: 0;
  padding: 0;
  font-weight: 300;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

strong {
  font-weight: 600;
}

html {
  scroll-behavior: smooth;
}

@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

::selection {
  background-color: var(--blue-700);
  color: var(--white);
}


/* Global Vars */

:root {

--black:  #0a0a0a;
--white:  #ffffff;

/* Grey  */

--grey-100:  #f7fafc;
--grey-200:  #edf2f7;
--grey-300:  #e2e8f0;
--grey-400:  #cbd5e0;
--grey-500:  #a0aec0;
--grey-600:  #718096;
--grey-700:  #4a5568;
--grey-800:  #2d3748;
--grey-900:  #1a202c;

/* Blues  */

--blue-50:   #E1F5FE;
--blue-100:  #B3E5FC;
--blue-200:  #81D4FA;
--blue-300:  #4FC3F7;
--blue-400:  #29B6F6;
--blue-500:  #03A9F4;
--blue-600:  #039BE5;
--blue-700:  #0288D1;
--blue-800:  #0277BD;
--blue-900:  #01579B;

/* Other */

--orange-600: #FB8C00;
--orange-700: #F57C00;
--orange-800: #EF6C00;
--orange-900: #e65100;

--beige-100:  #fcfbf3;

/* Fonts */

--serif: 'Playfair Display', 'Georgia', 'Cambria';

}

body {
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 300;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--grey-700);
}

a {
  text-decoration: none;
  transition: 0.3s;
}
`

const theme = {
  screen: {
    md: '800px',
    lg: '1200px',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
