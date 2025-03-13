import styled from 'styled-components'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 280px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  padding-top: 25px;
  padding-bottom: 32px;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  h2 {
    width: 101px;
    height: 33px;
    top: 187px;
    left: 170px;
    font-family: Roboto;
    font-weight: 100;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0%;
  }

  p {
    width: 676;
    height: 33.25;
    top: 376.75px;
    left: 170px;
    font-weight: 900;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0%;
  }
`
