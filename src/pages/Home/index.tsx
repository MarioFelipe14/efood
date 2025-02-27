import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.',
    image: sushi,
    infos: ['Destaque', 'japonesa'],
    system: 'Windows',
    title: 'Hioki Sushi '
  },
  {
    id: 2,
    category: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.',
    image: macarrao,
    infos: ['5%', 'italiana'],
    system: 'Windows',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 3,
    category: '4.9',
    description:
      'Residente Evil 4,conhecido no Japão como Biohazard 4, é um jogo survival...',
    image: sushi,
    infos: ['10%', 'japonesa'],
    system: 'Windows',
    title: 'Residente Evil 4'
  },
  {
    id: 4,
    category: '4.9',
    description:
      'Residente Evil 4,conhecido no Japão como Biohazard 4, é um jogo survival...',
    image: macarrao,
    infos: ['10%', 'japonesa'],
    system: 'Windows',
    title: 'Residente Evil 4'
  },
  {
    id: 2,
    category: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.',
    image: sushi,
    infos: ['5%', 'italiana'],
    system: 'Windows',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 2,
    category: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.',
    image: macarrao,
    infos: ['5%', 'italiana'],
    system: 'Windows',
    title: 'La Dolce Vita Trattoria'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="salmao" />
  </>
)

export default Home
