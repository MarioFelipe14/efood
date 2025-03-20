import Tag from '../Tag'
import estrela from '../../assets/images/estrela1.svg'
import {
  Card,
  Descricao,
  Titulo,
  Infos,
  ContainerTitulo,
  ContainerTag,
  CardSemFundo
} from './styles'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  title: string
  category: string
  description: string
  infos: string[]
  image: string
}

const Product = ({ title, category, description, infos, image, id }: Props) => {
  return (
    <Card>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <img src={image} alt={title} />
      <ContainerTitulo>
        <Titulo>{title}</Titulo>
        <ContainerTag>
          <CardSemFundo>{category}</CardSemFundo>
          <img src={estrela} />
        </ContainerTag>
      </ContainerTitulo>
      <Descricao>{description}</Descricao>
      <Link to={`/categories/${id}`}>
        <button>Saiba mais</button>
      </Link>
    </Card>
  )
}

export default Product
