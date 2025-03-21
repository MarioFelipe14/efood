import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.salmaoEscuro};
  color: ${cores.salmaoClaro};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 8px' : '4px 6px')};
  margin-right: 8px;
  display: inline-flex;
`
