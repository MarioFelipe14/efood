import macaBannerImg from '../../assets/images/macarrao-banner.png'

import { Banner } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${macaBannerImg})` }}>
    <div className="container">
      <div>
        <h2>Italiana</h2>
      </div>
      <div>
        <p>La Dolce Vita Trattoria</p>
      </div>
    </div>
  </Banner>
)

export default Hero
