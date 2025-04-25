import styled from 'styled-components'
import { cores } from '../../styles'

export const CheckoutContainer = styled.div`
  background-color: ${cores.salmaoEscuro};
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;

  button {
    color: ${cores.salmaoEscuro};
    background-color: ${cores.salmaoClaro};
    width: 344px;
    height: 24px;
    border: none;
    font-weight: bold;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    margin-bottom: 16px;
  }
`

export const CheckoutItem = styled.form`
  color: ${cores.salmaoClaro};
  margin-bottom: 16px;
  position: relative;

  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    margin-bottom: 16px;
  }

  .cep-number {
    display: flex;
    width: 344px;
    margin-top: 16px;
    justify-content: space-between;

    input {
      width: 138px;
    }
  }

  label {
    color: ${cores.salmaoClaro};
    display: block;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    margin: 8px 0;
  }

  input {
    width: 100%;
    height: 32px;
    background-color: ${cores.salmaoClaro};
    border: none;
    outline: none;
    padding: 8px;

    &.error {
      border: 2px solid red;
    }
  }

  button {
    margin: 16px 0 0;
  }
`
