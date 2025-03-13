import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Hero from '../../components/Hero'
import CategoriesList from '../../components/CategoriesLista'
import pizza from '../../assets/images/pizza.png'
import Game from '../../models/Game'

const menu: Game[] = [
  {
    id: 1,
    category: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.',
    image: pizza,
    infos: ['Destaque', 'japonesa'],
    system: 'Windows',
    title: 'Hioki Sushi '
  },
  {
    id: 2,
    category: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.',
    image: pizza,
    infos: ['5%', 'italiana'],
    system: 'Windows',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 3,
    category: '4.9',
    description:
      'Residente Evil 4,conhecido no Japão como Biohazard 4, é um jogo survival...',
    image: pizza,
    infos: ['10%', 'japonesa'],
    system: 'Windows',
    title: 'Residente Evil 4'
  },
  {
    id: 4,
    category: '4.9',
    description:
      'Residente Evil 4,conhecido no Japão como Biohazard 4, é um jogo survival...',
    image: pizza,
    infos: ['10%', 'japonesa'],
    system: 'Windows',
    title: 'Residente Evil 4'
  },
  {
    id: 2,
    category: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.',
    image: pizza,
    infos: ['5%', 'italiana'],
    system: 'Windows',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 2,
    category: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.',
    image: pizza,
    infos: ['5%', 'italiana'],
    system: 'Windows',
    title: 'La Dolce Vita Trattoria'
  }
]

const Categories = () => {
  const { id } = useParams()
  return (
    <>
      <Banner />
      <Hero />
      <CategoriesList
        title=""
        background="salmao"
        games={menu}
      ></CategoriesList>
    </>
  )
}

export default Categories
