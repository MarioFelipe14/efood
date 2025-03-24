import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import fechar from '../../assets/images/fechar.png'

export const Items = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 56px;
  margin-bottom: 120px;
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
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

  @media (max-width: ${breakpoints.desktop}) {
    button {
      width: 264px;
    }
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

  @media (max-width: ${breakpoints.desktop}) {
    width: 280px;

    img {
      width: 264px;
    }
  }
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
  display: flex;
  width: 100%;
  height: 344px;
  position: relative;
  background-color: ${cores.salmaoEscuro};
  z-index: 1;

  img {
    height: 280px;
    width: 280px;
    margin: 32px 24px 32px 32px;
    object-fit: cover;
  }
  .containerConteudo {
    position: relative;

    h3 {
      margin-top: 32px;
    }

    p {
      width: 656px;
      height: 176px;
      margin: 16px 32px 16px 0;

      span {
        margin-top: 16px;
        display: block;
      }
    }

    button {
      background-color: ${cores.salmaoClaro};
      color: ${cores.salmaoEscuro};

      width: 218px;
      height: 24px;
      font-weight: 700;
      font-size: 14px;
      line-height: 100%;
      border: none;
      cursor: pointer;
    }

    button[type='button'] {
      background-image: url(${fechar});
      width: 16px;
      height: 16px;
      border: none;
      background-color: transparent;
      position: absolute;
      top: 8px;
      right: 8px;
      cursor: pointer;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    .containerConteudo {
      p {
        width: 100%;
        height: auto;
        margin: 16px auto;
      }

      button {
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    height: auto;
    margin-bottom: 32px;

    img {
      height: 140px;
      width: 274px;
      margin-bottom: 12px;
    }

    .containerConteudo {
      width: 100%;
      padding-top: 12px;

      p {
        width: 90%;
      }

      button,
      h3 {
        margin-top: 1px;
        margin-left: 16px;
      }
    }

    button[type='button'] {
      display: none;
    }
  }
`
