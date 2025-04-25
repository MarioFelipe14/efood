import { useFormik } from 'formik'
import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { CheckoutItem, CheckoutContainer } from './styles'
import { Overlay, SideBar } from '../Cart/styles'

interface StepProps {
  currentStep: string
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>
}
const Checkout = ({ currentStep, setCurrentStep }: StepProps) => {
  const goBackToCart = () => setCurrentStep('Cart')
  const [purchase, { isError, isLoading, data }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const form = useFormik({
    initialValues: {
      cliente: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: ''
    },
    validationSchema: Yup.object({
      cliente: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string().required('O campo é obrigatório'),
      cidade: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O cep precisa ter 9 caracteres')
        .max(9, 'O cep precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      numero: Yup.string()
        .min(2, 'O número precisa ter 2 caracteres')
        .max(2, 'O número precisa ter 2 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.cliente,
          address: {
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero)
          }
        }
      })
      setCurrentStep('Payment')
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const handleCheckout = () => {
    setCurrentStep('Payment')
  }

  return (
    <>
      {currentStep === 'Checkout' && (
        <CheckoutContainer>
          <Overlay />
          <SideBar>
            <CheckoutItem onSubmit={form.handleSubmit}>
              <h3>Entrega</h3>
              <label htmlFor="cliente">Quem irá receber</label>
              <input
                id="nome"
                type="text"
                name="cliente"
                value={form.values.cliente}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cliente') ? 'error' : ''}
              />
              <label htmlFor="endereco">Endereço</label>
              <input
                id="endereco"
                type="text"
                name="endereco"
                value={form.values.endereco}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('endereco') ? 'error' : ''}
              />
              <label htmlFor="cidade">Cidade</label>
              <input
                id="cidade"
                type="text"
                name="cidade"
                value={form.values.cidade}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cidade') ? 'error' : ''}
              />
              <div className="cep-number">
                <div>
                  <label htmlFor="cep">CEP</label>
                  <input
                    id="cep"
                    type="text"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cep') ? 'error' : ''}
                  />
                </div>
                <div>
                  <label htmlFor="numero">Número</label>
                  <input
                    id="numero"
                    type="text"
                    name="numero"
                    value={form.values.numero}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('numero') ? 'error' : ''}
                  />
                </div>
              </div>
              <label htmlFor="complemento">Complemento</label>
              <input id="complemento" type="text" />
              <button type="submit">Continuar com o pagamento</button>
            </CheckoutItem>
            <button type="button" onClick={goBackToCart}>
              Voltar para o carrinho
            </button>
          </SideBar>
        </CheckoutContainer>
      )}
    </>
  )
}

export default Checkout
