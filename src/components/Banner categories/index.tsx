import { Imagem } from './styles'

import bannerImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo-efood.png'

const BannerCategories = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <h3>Restaurantes</h3>
      <img src={logo} alt="EFOOD" className="logo" />
      <h3>0 produto(s) no carrinho</h3>
    </div>
  </Imagem>
)

export default BannerCategories
