import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  color: ${cores.salmaoEscuro};
  background-color: ${cores.branco};
  border: 1px solid ${cores.salmaoEscuro};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }

  button {
    background-color: ${cores.salmaoEscuro};
    color: ${cores.salmaoClaro};
    border: none;
    width: 82px;
    height: 24px;
    margin-top: 16px;
    margin: 8px;
    cursor: pointer;
  }
`
export const CardSemFundo = styled(Card)`
  font-weight: bold;
  font-size: 18px;
  line-height: 100%;
  background-color: transparent;
  border: none;
  button {
    background-color: unset;
    cursor: pointer;
  }
`

export const ContainerTitulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 8px;
`
export const ContainerTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  padding: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
