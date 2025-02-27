import { Container, SectionTitle, FooterSection } from './styles'

import logo from '../../assets/images/logo-efood.png'
import instagram from '../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import facebook from '../../assets/images/facebook-round-svgrepo-com 1.png'
import twitter from '../../assets/images/Group.png'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>
          <img src={logo} alt="logo efood" />
        </SectionTitle>
        <a href="#">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="#">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
      </FooterSection>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
      <p>{currentYear}- &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
