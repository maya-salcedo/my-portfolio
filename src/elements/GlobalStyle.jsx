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
  color: #424642;
  font-family: 'Playfair Display SC', serif;
}

.nav-link:hover {
  color: #151515;
  border-radius: 1px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow:  5px 5px 3px #5a5a5a,
             -5px -5px 3px #ffffff;
}
`;

export default GlobalStyle;



