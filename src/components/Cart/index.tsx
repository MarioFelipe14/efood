import {
  Overlay,
  CartContainer,
  SideBar,
  ContainerP,
  CartItem,
  BotaoEntregar
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Gallery'

interface StepProps {
  currentStep: string
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>
}

const Cart = ({ currentStep, setCurrentStep }: StepProps) => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const handleCheckout = () => {
    setCurrentStep('Checkout')
  }

  return (
    <>
      {currentStep === 'Cart' && (
        <CartContainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={closeCart} />
          <SideBar>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <ContainerP>
              <p>Valor total</p>
              <p>{formataPreco(getTotalPrice())}</p>
            </ContainerP>
            <BotaoEntregar type="button" onClick={handleCheckout}>
              Continuar com a entrega
            </BotaoEntregar>
          </SideBar>
        </CartContainer>
      )}
    </>
  )
}

export default Cart
