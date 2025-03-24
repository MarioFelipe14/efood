import { Imagem } from './styles'

import bannerImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo-efood.png'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const BannerCategories = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <h3>Restaurantes</h3>
        <img src={logo} alt="EFOOD" className="logo" />
        <a onClick={openCart}>{items.length} produto(s) no carrinho</a>
      </div>
    </Imagem>
  )
}

export default BannerCategories
