import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 136px;
  }
`

export const Titulo = styled.h2`
  width: 539px;
  height: 84px;
  top: 236px;
  left: 414px;
  font-size: 36px;
  line-height: 42px;
  color: ${cores.salmaoEscuro};
`
