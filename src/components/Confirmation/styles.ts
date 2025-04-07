import styled from 'styled-components'
import { cores } from '../../styles'

export const ConfirmationContainer = styled.div`
  background-color: ${cores.salmaoEscuro};
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  display: block;
  justify-content: flex-end;
  z-index: 1;

  h3 {
    color: ${cores.salmaoClaro};
    margin-top: 32px;
    margin-left: 8px;
    font-weight: bold;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
  }

  p {
    color: ${cores.salmaoClaro};
    margin: 16px 8px 24px;
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  button {
    border: none;
    background-color: ${cores.salmaoClaro};
    color: ${cores.salmaoEscuro};
    margin-left: 8px;
    width: 344px;
    height: 24px;
    font-weight: bold;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
  }
`
