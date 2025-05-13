import { useState } from 'react'
import { usePurchaseMutation } from '../../services/api'
import { ConfirmationContainer } from './styles'

interface StepProps {
  currentStep: 'Cart' | 'Checkout' | 'Payment' | 'Confirmation'
  setCurrentStep: React.Dispatch<
    React.SetStateAction<'Cart' | 'Checkout' | 'Payment' | 'Confirmation'>
  >
}

export const Confirmation = ({ currentStep, setCurrentStep }: StepProps) => {
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const [orderId, setOrderId] = useState<string>('')

  return (
    <>
      {currentStep === 'Confirmation' && (
        <ConfirmationContainer>
          {isSuccess ? (
            <>
              <h3>Pedido realizado - {orderId}</h3>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras. Lembre-se da
                importância de higienizar as mãos após o recebimento do pedido,
                garantindo assim sua segurança e bem-estar durante a refeição.
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </>
          ) : (
            <p>Seu pagamento não foi confirmado. Tente novamente.</p>
          )}
          <button type="button">Concluir</button>
        </ConfirmationContainer>
      )}
    </>
  )
}
