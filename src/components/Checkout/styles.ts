import styled from 'styled-components'
import { cores } from '../../styles'

export const CheckoutContainer = styled.div`
  background-color: ${cores.salmaoEscuro};

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
`

export const CheckoutItem = styled.form`
  color: ${cores.salmaoClaro};
  background-color: ${cores.salmaoClaro};
  padding: 8px 8px 12px;
  margin-bottom: 16px;
  position: relative;
`
