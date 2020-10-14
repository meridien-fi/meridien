import { createGlobalStyle, ThemeProvider } from 'styled-components';

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
  font-weight: normal;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
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
  background-color: var(--yellow);
  color: var(--black);
}


/* Global Vars */

:root {
--black:     #0a0a0a;
--white:     #ffffff;

--grey-50:   #fafafa;
--grey-100:  #f5f5f5;
--grey-200:  #eeeeee;
--grey-300:  #e0e0e0;
--grey-400:  #bdbdbd;
--grey-500:  #9e9e9e;
--grey-600:  #757575;
--grey-700:  #616161;
--grey-800:  #424242;
--grey-900:  #212121;

--yellow:    #ffd034;

--serif: 'Playfair Display', 'Georgia', 'Cambria';
}

body {
  font-size: 1.6rem;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
  transition: 0.3s;
}
`;

const theme = {
  screen: {
    md: '700',
    lg: '1200px',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
