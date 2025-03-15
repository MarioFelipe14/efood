import styled from 'styled-components'
import { cores } from '../../styles'

export const Items = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 56px;
  margin-bottom: 120px;
  gap: 32px;
`
export const Item = styled.li`
  margin-right: 16px;
  position: relative;
  padding: 8px;

  img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }

  h3 {
    color: ${cores.salmaoClaro};
    margin-top: 8px;
    font-weight: 900;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
  }

  p {
    color: ${cores.salmaoClaro};
    padding-top: 8px;
    padding-bottom: 8px;
    font-weight: 400;
    font-size: 14px;
    height: 88px;
    line-height: 22px;
    letter-spacing: 0%;
  }

  button {
    background-color: ${cores.salmaoClaro};
    color: ${cores.salmaoEscuro};
    width: 304px;
    height: 24px;
    top: 804px;
    left: 179px;
    font-weight: bold;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    border: none;
    cursor: pointer;
  }
`
export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
`
export const CardEscuro = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.salmaoEscuro};
`
export const Modal = styled.div`
  position: fixed;
  padding-top: 336px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
`
