import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import { useState } from 'react'
import Payment from './components/Payment'
import { Confirmation } from './components/Confirmation'

function App() {
  const [currentStep, setCurrentStep] = useState('Cart')
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container"></div>
        <Rotas />
        <Footer />
        {currentStep === 'Cart' && (
          <Cart currentStep={currentStep} setCurrentStep={setCurrentStep} />
        )}
        {currentStep === 'Checkout' && (
          <Checkout currentStep={currentStep} setCurrentStep={setCurrentStep} />
        )}{' '}
        {currentStep === 'Payment' && (
          <Payment currentStep={currentStep} setCurrentStep={setCurrentStep} />
        )}{' '}
        {currentStep === 'Confirmation' && (
          <Confirmation
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
      </BrowserRouter>
    </Provider>
  )
}

export default App
