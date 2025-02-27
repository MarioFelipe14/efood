import { Link } from 'react-router-dom'

import { HeaderBar } from './styles'
import logo from '../../assets/images/logo-efood.png'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
      <h3>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </h3>
    </div>
  </HeaderBar>
)

export default Header
