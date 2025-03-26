import { Overlay, SideBar } from '../Cart/styles'
import { CheckoutItem, CheckoutContainer } from './styles'

const Checkout = () => (
  <CheckoutContainer>
    <Overlay />
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
      <button type="button">Voltar para o carrinho</button>
    </SideBar>
  </CheckoutContainer>
)

export default Checkout
