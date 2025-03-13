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

type Props = {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
}

const Product = ({ title, category, description, infos, image }: Props) => (
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
    <button>Saiba mais</button>
  </Card>
)

export default Product
