import macaBannerImg from '../../assets/images/macarrao-banner.png'

import { Banner } from './styles'
import { MenuCategories } from '../../pages/Categories'

type Props = {
  menu: MenuCategories
}

const Hero = ({ menu }: Props) => (
  <Banner style={{ backgroundImage: `url(${macaBannerImg})` }}>
    <div className="container">
      <div>
        <h2>{menu.tipo}</h2>
      </div>
      <div>
        <p>{menu.titulo}</p>
      </div>
    </div>
  </Banner>
)

export default Hero
