import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  h3 {
    color: ${cores.salmaoEscuro};
    font-weight: bold;
    font-size: 18px;
  }

  .container {
    height: 186px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
  }
`
