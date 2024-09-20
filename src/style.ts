// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`



body {
  font-optical-sizing: auto;
  height: 100%;
  margin: 0px;
}

html {
  height: 100%;
}

html,
html * {
  scrollbar-width: thin;
}

.html::-webkit-scrollbar {
  width: 3px;
  height: 3px; /* A altura só é vista quando a rolagem é horizontal */
}

.html::-webkit-scrollbar-track {
  background: transparent;
  padding: 2px;
}

.html::-webkit-scrollbar-thumb {
  background-color: #000;
}



`;

export default GlobalStyle;
