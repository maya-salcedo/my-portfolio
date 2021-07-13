import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
  font-family: 'Sacramento', cursive;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  overflow-x: hidden; 
}

h2 {
  font-family: 'Source Sans Pro', sans-serif;
    
}

p, a {
  font-family: 'Merriweather', serif;
}


.nav-link {
  text-decoration: none;
  color: #ffffff;
  font-family: 'Playfair Display SC', serif;
}



.nav-link:hover {
  color: #151515;
  border-radius: 3px;
  background: #ffffff;
}

.close-icon:hover, .close-icon:active {
  transform: rotate( 180deg );            
  transition: transform 1s ease;
  color: #14274E;
}

`;

export default GlobalStyle;
