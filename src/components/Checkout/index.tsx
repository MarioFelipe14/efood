import { useState } from 'react'
import { Overlay, SideBar } from '../Cart/styles'
import { CheckoutItem, CheckoutContainer } from './styles'

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState('Checkout')
  const goBackToCart = () => setCurrentStep('Cart')

  return (
    <CheckoutContainer>
      <Overlay />
      {currentStep === 'Checkout' && (
        <>
          <SideBar>
            <CheckoutItem>
              <label>Quem irá receber</label>
              <input type="text" />
              <label>Endereço</label>
              <input type="text" />
              <label>Cidade</label>
              <input type="text" />
              <div className="cep-number">
                <label>CEP</label>
                <input type="number" />
                <label>Número</label>
                <input type="number" />
              </div>
              <label>Complemento</label>
              <input type="text" />
            </CheckoutItem>
            <button type="button">Continuar com o pagamento</button>
            <button type="button" onClick={goBackToCart}>
              Voltar para o carrinho
            </button>
          </SideBar>
        </>
      )}
    </CheckoutContainer>
  )
}

export default Checkout
