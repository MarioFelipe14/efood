import { useFormik } from 'formik'
import { Overlay, SideBar } from '../Cart/styles'
import {
  CheckoutItem,
  CheckoutContainer,
  NumCvv,
  InputGroup,
  MesAno
} from './styles'
import * as Yup from 'yup'
import { formataPreco } from '../Gallery'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { useEffect } from 'react'

interface StepProps {
  currentStep: 'Cart' | 'Checkout' | 'Payment' | 'Confirmation'
  setCurrentStep: React.Dispatch<
    React.SetStateAction<'Cart' | 'Checkout' | 'Payment' | 'Confirmation'>
  >
}

const Checkout = ({ currentStep, setCurrentStep }: StepProps) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const goBackToCheckout = () => setCurrentStep('Checkout')

  const [purchase, { isSuccess, isLoading }] = usePurchaseMutation()

  useEffect(() => {
    if (isSuccess) {
      setCurrentStep('Confirmation')
    }
  }, [isSuccess, setCurrentStep])

  const getTotalPreco = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      nomeNoCartao: '',
      numeroDoCartao: '',
      cvv: '',
      mesDeVencimento: '',
      anoDeVencimento: ''
    },
    validationSchema: Yup.object({
      nomeNoCartao: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      numeroDoCartao: Yup.string().required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'O cvv precisa ter 3 caracteres')
        .max(3, 'O cvv precisa ter 3 caracteres')
        .required('O campo é obrigatório'),
      mesDeVencimento: Yup.string()
        .min(2, 'O mês precisa ter 2 caracteres')
        .max(2, 'O mês precisa ter 2 caracteres')
        .required('O campo é obrigatório'),
      anoDeVencimento: Yup.string()
        .min(4, 'O ano precisa ter 4 caracteres')
        .max(4, 'O ano precisa ter 4 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        payment: {
          card: {
            name: values.nomeNoCartao,
            number: values.numeroDoCartao,
            code: parseInt(values.cvv),
            expires: {
              month: parseInt(values.mesDeVencimento),
              year: parseInt(values.anoDeVencimento)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const handleCheckout = () => {
    setCurrentStep('Confirmation')
  }

  return (
    <>
      {currentStep === 'Payment' && (
        <CheckoutContainer>
          <Overlay />
          <SideBar>
            <CheckoutItem onSubmit={form.handleSubmit}>
              <h3>
                Pagamento - Valor a pagar: {formataPreco(getTotalPreco())}
              </h3>
              <label htmlFor="nomeNoCartao">Nome no cartão</label>
              <input
                type="text"
                id="nomeNoCartao"
                name="nomeNoCartao"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('nomeNoCartao') ? 'error' : ''}
              />
              <NumCvv>
                <InputGroup>
                  <label htmlFor="numeroDoCartao">Número do cartão</label>
                  <input
                    type="number"
                    id="numeroDoCartao"
                    name="numeroDoCartao"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('numeroDoCartao') ? 'error' : ''
                    }
                  />
                </InputGroup>
                <InputGroup maxWidth="87px">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="number"
                    id="cvv"
                    name="cvv"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cvv') ? 'error' : ''}
                  />
                </InputGroup>
              </NumCvv>
              <MesAno>
                <InputGroup>
                  <label htmlFor="mesDeVencimento">Mês de vencimento</label>
                  <input
                    type="number"
                    id="mesDeVencimento"
                    name="mesDeVencimento"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('mesDeVencimento') ? 'error' : ''
                    }
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="anoDeVencimento">Ano de vencimento</label>
                  <input
                    type="number"
                    id="anoDeVencimento"
                    name="anoDeVencimento"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('anoDeVencimento') ? 'error' : ''
                    }
                  />
                </InputGroup>
              </MesAno>
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Processando...' : 'Finalizar pagamento'}
              </button>
            </CheckoutItem>
            <button type="button" onClick={goBackToCheckout}>
              Voltar para a edição de endereço
            </button>
          </SideBar>
        </CheckoutContainer>
      )}
    </>
  )
}

export default Checkout
