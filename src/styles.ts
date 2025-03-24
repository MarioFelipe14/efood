import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#fff',
  preto: '#111',
  cinza: '#333',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3',
  salmaoClaro: '#FFEBD9',
  salmao: '#FFF8F2',
  salmaoEscuro: '#E66767'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  }

  body {
    color: ${cores.branco};
  }

  .container {
    max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
  }
  `
