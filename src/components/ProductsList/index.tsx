import Product from '../Product'
import { Container, List } from './style'
import { Menu } from '../../pages/Categories'

export type Props = {
  title: string
  background: 'salmao'
  menu: Menu[]
}

const ProductsList = ({ title, background, menu }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {menu.map((menu) => (
          <Product
            key={menu.id}
            description={menu.descricao}
            image={menu.capa}
            infos={menu.cardapio}
            title={menu.titulo}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
