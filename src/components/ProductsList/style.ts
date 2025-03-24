import styled from 'styled-components'
import { Props } from '.'
import { breakpoints, cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 80px 0 120px;
  background-color: ${(props) =>
    props.background === 'salmao' ? cores.salmao : cores.branco};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'salmao' ? cores.branco : cores.branco};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
