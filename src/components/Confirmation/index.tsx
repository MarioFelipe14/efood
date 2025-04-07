import { ConfirmationContainer } from './styles'

interface StepProps {
  currentStep: string
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>
}
export const Confirmation = ({ currentStep, setCurrentStep }: StepProps) => {
  return (
    <>
      {currentStep === 'Confirmation' && (
        <ConfirmationContainer>
          <h3>Pedido realizado - ORDER_ID</h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras. Lembre-se da importância de
            higienizar as mãos após o recebimento do pedido, garantindo assim
            sua segurança e bem-estar durante a refeição. Esperamos que desfrute
            de uma deliciosa e agradável experiência gastronômica. Bom apetite!
          </p>
          <button type="button">Concluir</button>
        </ConfirmationContainer>
      )}
    </>
  )
}
