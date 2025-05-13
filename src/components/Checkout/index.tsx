import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { Overlay, SideBar } from '../Cart/styles'
import { CheckoutItem, CheckoutContainer } from './styles'
import { ConfirmationContainer } from '../Confirmation/styles'
import { data } from 'react-router-dom'

interface StepProps {
  currentStep: 'Cart' | 'Checkout' | 'Payment' | 'Confirmation'
  setCurrentStep: React.Dispatch<
    React.SetStateAction<'Cart' | 'Checkout' | 'Payment' | 'Confirmation'>
  >
}

const Checkout = ({ currentStep, setCurrentStep }: StepProps) => {
  const [step, setStep] = useState<'address' | 'payment' | 'confirmation'>(
    'address'
  )
  const goBackToCheckout = () => setCurrentStep('Cart')

  const { items } = useSelector((state: RootReducer) => state.cart)
  const [orderId, setOrderId] = useState<string>('')
  const [purchase, { isSuccess, isLoading, data }] = usePurchaseMutation()

  useEffect(() => {
    if (isSuccess && data?.orderId) {
      setOrderId(data.orderId)
      setStep('confirmation')
    }
  }, [isSuccess, data])

  const form = useFormik({
    initialValues: {
      // Endereço
      cliente: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      // Pagamento
      nomeNoCartao: '',
      numeroDoCartao: '',
      cvv: '',
      mesDeVencimento: '',
      anoDeVencimento: ''
    },
    validationSchema: Yup.object({
      cliente: Yup.string().min(5).required('Nome do cliente é obrigatório'),
      endereco: Yup.string().required('Endereço é obrigatório'),
      cidade: Yup.string().required('Cidade é obrigatória'),
      cep: Yup.string().length(9, 'CEP inválido').required('CEP é obrigatório'),
      numero: Yup.string().required('Número é obrigatório'),
      nomeNoCartao: Yup.string().when('step', {
        is: 'payment',
        then: (schema) =>
          schema
            .min(5, 'Nome no cartão precisa ter pelo menos 5 caracteres')
            .required('Nome no cartão é obrigatório')
      }),
      numeroDoCartao: Yup.string().when('step', {
        is: 'payment',
        then: (schema) => schema.required('Número do cartão é obrigatório')
      }),
      cvv: Yup.string().when('step', {
        is: 'payment',
        then: (schema) =>
          schema
            .length(3, 'CVV precisa ter 3 caracteres')
            .required('CVV é obrigatório')
      }),
      mesDeVencimento: Yup.string().when('step', {
        is: 'payment',
        then: (schema) =>
          schema
            .length(2, 'Mês de vencimento precisa ter 2 caracteres')
            .required('Mês de vencimento é obrigatório')
      }),
      anoDeVencimento: Yup.string().when('step', {
        is: 'payment',
        then: (schema) =>
          schema
            .length(4, 'Ano de vencimento precisa ter 4 caracteres')
            .required('Ano de vencimento é obrigatório')
      })
    }),
    onSubmit: (values) => {
      if (step === 'address') {
        setStep('payment')
      } else {
        purchase({
          products: items.map((item) => ({
            id: item.id,
            price: item.preco
          })),
          delivery: {
            receiver: values.cliente,
            address: {
              description: values.endereco,
              city: values.cidade,
              zipCode: values.cep,
              number: Number(values.numero),
              complement: values.complemento
            }
          },
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
    }
  })

  const checkError = (field: keyof typeof form.touched) =>
    form.touched[field] && form.errors[field] ? 'error' : ''

  return (
    <CheckoutContainer>
      <Overlay />
      <SideBar>
        <CheckoutItem onSubmit={form.handleSubmit}>
          {step === 'address' && (
            <>
              <h3>Entrega</h3>
              <label>Quem irá receber</label>
              <input
                name="cliente"
                onChange={form.handleChange}
                value={form.values.cliente}
                className={checkError('cliente')}
              />
              <label>Endereço</label>
              <input
                name="endereco"
                onChange={form.handleChange}
                value={form.values.endereco}
                className={checkError('endereco')}
              />
              <label>Cidade</label>
              <input
                name="cidade"
                onChange={form.handleChange}
                value={form.values.cidade}
                className={checkError('cidade')}
              />
              <div className="form-row">
                <div className="form-group">
                  <label>CEP</label>
                  <input
                    name="cep"
                    onChange={form.handleChange}
                    value={form.values.cep}
                    className={checkError('cep')}
                  />
                </div>
                <div className="form-group">
                  <label>Número</label>
                  <input
                    name="numero"
                    onChange={form.handleChange}
                    value={form.values.numero}
                    className={checkError('numero')}
                  />
                </div>
              </div>

              <label>Complemento</label>
              <input
                name="complemento"
                onChange={form.handleChange}
                value={form.values.complemento}
              />
              <button type="submit">Continuar com o pagamento</button>
              <button type="button" onClick={goBackToCheckout}>
                Voltar para o carrinho
              </button>
            </>
          )}

          {step === 'payment' && (
            <>
              <h3>Pagamento</h3>
              <label>Nome no cartão</label>
              <input
                name="nomeNoCartao"
                onChange={form.handleChange}
                value={form.values.nomeNoCartao}
                className={checkError('nomeNoCartao')}
              />

              <div className="form-row">
                <div className="form-group">
                  <label>Número do cartão</label>
                  <input
                    name="numeroDoCartao"
                    onChange={form.handleChange}
                    value={form.values.numeroDoCartao}
                    className={checkError('numeroDoCartao')}
                  />
                </div>

                <div className="form-group small">
                  <label>CVV</label>
                  <input
                    name="cvv"
                    onChange={form.handleChange}
                    value={form.values.cvv}
                    className={checkError('cvv')}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group small">
                  <label>Mês de vencimento</label>
                  <input
                    name="mesDeVencimento"
                    onChange={form.handleChange}
                    value={form.values.mesDeVencimento}
                    className={checkError('mesDeVencimento')}
                  />
                </div>

                <div className="form-group small">
                  <label>Ano de vencimento</label>
                  <input
                    name="anoDeVencimento"
                    onChange={form.handleChange}
                    value={form.values.anoDeVencimento}
                    className={checkError('anoDeVencimento')}
                  />
                </div>
              </div>

              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Processando...' : 'Finalizar pagamento'}
              </button>
              <button type="button" onClick={() => setStep('address')}>
                Voltar para endereço
              </button>
            </>
          )}

          {step === 'confirmation' && (
            <>
              <ConfirmationContainer>
                {isSuccess ? (
                  <>
                    <h3>Pedido realizado - {orderId}</h3>
                    <p>
                      Estamos felizes em informar que seu pedido já está em
                      processo de preparação e, em breve, será entregue no
                      endereço fornecido. Gostaríamos de ressaltar que nossos
                      entregadores não estão autorizados a realizar cobranças
                      extras. Lembre-se da importância de higienizar as mãos
                      após o recebimento do pedido, garantindo assim sua
                      segurança e bem-estar durante a refeição. Esperamos que
                      desfrute de uma deliciosa e agradável experiência
                      gastronômica. Bom apetite!
                    </p>
                  </>
                ) : (
                  <p>Seu pagamento não foi confirmado. Tente novamente.</p>
                )}
                <button type="button">Concluir</button>
              </ConfirmationContainer>
            </>
          )}
        </CheckoutItem>
      </SideBar>
    </CheckoutContainer>
  )
}

export default Checkout
