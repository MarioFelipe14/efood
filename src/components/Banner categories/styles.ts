import styled from 'styled-components'
import { cores } from '../../styles'
import { Link as RouterLink } from 'react-router-dom'

export const Imagem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  a {
    color: ${cores.salmaoEscuro};
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
  }

  .container {
    height: 186px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
  }
`
export const Link = styled(RouterLink)`
  color: ${cores.salmaoEscuro};
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
`
