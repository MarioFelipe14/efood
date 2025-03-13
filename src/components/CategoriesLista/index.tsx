import Product from '../Product'
import { Container, List } from './style'
import Game from '../../models/Game'

export type Props = {
  title: string
  background: 'salmao'
  games: Game[]
}

const categoriesList = ({ title, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default categoriesList
