import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `

* {
  font-family: Helvetica;
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}

body {
  background-color: #000;
  color: #fff;
}

a {
  text-decoration: none;
  color: #F7D354;
  transition: .5s;
}

a:hover {
  color: #b8930c
}

`

export default GlobalStyle