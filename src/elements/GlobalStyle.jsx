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
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow:  5px 5px 3px #ffffff,
}
${'' /* hamburger menu */}
aside {
  
}
.nav-link-mobile {
  text-decoration: none;
  color: #204051;
  font-family: 'Playfair Display SC', serif;
}
.open {
  transform: translateX(0);
}

.sidebar:hover {
  color: #f0c040;
  border: none;
}
aside ul {
  padding: 0;
  list-style: none;
}
aside li {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
.close-sidebar {
  padding: 0.3rem 0.8rem;
}
`;

export default GlobalStyle;
