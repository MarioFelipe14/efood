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

  .form-row {
    display: flex;
    gap: 16px; /* Espaço entre os inputs */
  }

  .form-group {
    flex: 1; /* Faz os inputs ocuparem a mesma largura */
    display: flex;
    flex-direction: column; /* Label acima do input */
  }

  .form-group label {
    margin-bottom: 4px;
    font-weight: 500;
  }
  input {
    width: 138px;
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
    margin: 16px 8px 0;
  }

  .form-row {
    display: flex;
    gap: 34px;
    margin-bottom: 16px; /* Espaço entre linhas */
  }

  .form-group {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .form-group.small {
    flex: 0.5; /* Deixa os campos menores, você pode ajustar */
  }

  .form-group label {
    margin-bottom: 4px;
    font-weight: 500;
  }
`
