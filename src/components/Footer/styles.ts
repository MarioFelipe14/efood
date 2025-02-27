import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.salmaoClaro};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    color: ${cores.salmaoEscuro};
  }
`

export const SectionTitle = styled.h4`
  color: ${cores.branco};
  margin-top: 40px;
  font-weight: bold;
  font-size: 16px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;

  img {
    margin-top: 40px;
    margin-right: 8px;
  }
`
