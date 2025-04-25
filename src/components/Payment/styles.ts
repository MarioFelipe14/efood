import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

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
export const NumCvv = styled.div<InputGroupProps>`
  gap: 30px;
  display: flex;
  justify-content: space-between;
`
export const InputGroup = styled.div<InputGroupProps>`
  max-width: ${(props) => props.maxWidth || 'auto'};

  display: flex;
  flex-direction: column;
  width: 100%;
`
export const MesAno = styled.div`
  display: flex;
  gap: 30px;
`
