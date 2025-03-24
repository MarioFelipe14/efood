import styled from 'styled-components'
import { cores } from '../../styles'

import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  width: 360px;
  background-color: ${cores.salmaoEscuro};
  z-index: 1;
  padding: 32px 8px 16px;
`
export const ContainerP = styled.div`
  color: ${cores.salmaoClaro};
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.salmaoClaro};
  padding: 8px 8px 12px;
  margin-bottom: 16px;
  position: relative;

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    padding-right: 8px;
  }

  h3 {
    color: ${cores.salmaoEscuro};
  }

  span {
    color: ${cores.salmaoEscuro};
    margin-top: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
export const BotaoEntregar = styled.button`
  width: 100%;
  height: 24px;

  color: ${cores.salmaoEscuro};
  background-color: ${cores.salmaoClaro};
  border: none;
  font-weight: bold;

  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
`
