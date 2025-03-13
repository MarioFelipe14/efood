import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Hero from '../../components/Hero'

import Gallery from '../../components/Gallery'
import { useEffect, useState } from 'react'

export type Menu = {
  id: number
  titulo: string
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
  }
}

const Categories = () => {
  const { id } = useParams()
  const [categories, setCategories] = useState<Menu[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCategories(res))
  }, [])

  return (
    <>
      <Banner />
      <Hero />
      <Gallery menu={categories} />
    </>
  )
}

export default Categories
