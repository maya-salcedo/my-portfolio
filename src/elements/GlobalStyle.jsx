import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Sacramento', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
  }

  h2 {
    font-family: 'Source Sans Pro', sans-serif;
      
  }

  p, a {
    font-family: 'Merriweather', serif;
  }

  .close-icon:hover, .close-icon:active {
    transform: rotate( 180deg );            
    transition: transform 1s ease;
    color: #14274E;
  }
`;

export default GlobalStyle;
