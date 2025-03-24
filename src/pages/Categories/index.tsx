import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'

import Gallery from '../../components/Gallery'
import BannerCategories from '../../components/Banner categories'
import { useGetIdQuery } from '../../services/api'

export type MenuCategories = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Categories = () => {
  const { id } = useParams()
  const { data: categories } = useGetIdQuery(id!)

  if (!categories) return <>Carregando</>

  return (
    <>
      <BannerCategories />
      <Hero menu={categories} />
      <Gallery menu={categories} />
    </>
  )
}

export default Categories
