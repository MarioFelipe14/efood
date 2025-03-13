import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'salmao' ? cores.salmao : cores.branco};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'salmao' ? cores.branco : cores.branco};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 40px;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
