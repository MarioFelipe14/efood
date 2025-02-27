import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import Resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Residente Evil 4,conhecido no Japão como Biohazard 4, é um jogo survival...',
    image: Resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Residente Evil 4'
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Residente Evil 4,conhecido no Japão como Biohazard 4, é um jogo survival...',
    image: Resident,
    infos: ['5%', 'R$ 290,00'],
    system: 'PS5',
    title: 'Residente Evil 4'
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Residente Evil 4,conhecido no Japão como Biohazard 4, é um jogo survival...',
    image: Resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Residente Evil 4'
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Residente Evil 4,conhecido no Japão como Biohazard 4, é um jogo survival...',
    image: Resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Residente Evil 4'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é  um RPG de ação em desenvolvimento pela Blizard Entertainment...',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV é  um RPG de ação em desenvolvimento pela Blizard Entertainment...',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo IV é  um RPG de ação em desenvolvimento pela Blizard Entertainment...',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: starwars
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo IV é  um RPG de ação em desenvolvimento pela Blizard Entertainment...',
    title: 'Residente Evil 5',
    system: 'Windows',
    infos: ['17/05'],
    image: Resident
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
