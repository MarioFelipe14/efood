import Product from '../Product'
import { Container, List } from './style'
import MenuHome from '../../models/MenuHome'
import { MenuCategories } from '../../pages/Categories'

export type Props = {
  background: 'salmao'
  menu: MenuCategories[]
}

const ProductsList = ({ background, menu }: Props) => (
  <Container menu={menu} background={background}>
    <div className="container">
      <List>
        {menu.map((menu) => (
          <Product
            key={menu.id}
            description={menu.descricao}
            image={menu.capa}
            infos={[menu.avaliacao]}
            title={menu.titulo}
            category={menu.tipo}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
