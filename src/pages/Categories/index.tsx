import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'

import Gallery from '../../components/Gallery'
import { useEffect, useState } from 'react'
import BannerCategories from '../../components/Banner categories'

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
  const [categories, setCategories] = useState<MenuCategories>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setCategories(
          res.find(
            (restaurante: MenuCategories) => restaurante.id === Number(id)
          )
        )
      })
  }, [id])

  if (!categories) return <></>

  return (
    <>
      <BannerCategories />
      <Hero />
      <Gallery menu={categories} />
    </>
  )
}

export default Categories
