import { Imagem, Titulo } from './styles'

import bannerImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo-efood.png'

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <img src={logo} alt="EFOOD" className="logo" />
        <Titulo>
          Viva experiências gastronômicas no conforto da sua casa{' '}
        </Titulo>
      </div>
    </Imagem>
  )
}

export default Banner
