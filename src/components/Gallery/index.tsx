import { Item, Items, CardEscuro, Modal, ModalContent } from './styles'

import { useState } from 'react'
import { MenuCategories } from '../../pages/Categories'

type Props = {
  menu: MenuCategories
}

type Prato = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Gallery = ({ menu }: Props) => {
  const [modalEstaAberta, setModalEstaAberta] = useState(false)
  const [prato, setPrato] = useState<Prato>()

  const formataPreco = (preco: number) => {
    return preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
    <>
      <div className="container">
        <Items>
          {menu.cardapio.map((menu, index) => (
            <CardEscuro key={menu.id}>
              <Item>
                <img
                  src={menu.foto}
                  alt={`Mídia ${index + 1} de nome do alimento`}
                />
                <h3>{menu.nome}</h3>
                <p>
                  {menu.descricao.length > 100
                    ? menu.descricao.slice(0, 100) + '...'
                    : menu.descricao}
                </p>
                <button
                  onClick={() => {
                    setModalEstaAberta(true)
                    setPrato(menu)
                  }}
                >
                  Adicionar ao carrinho
                </button>
              </Item>
            </CardEscuro>
          ))}
        </Items>
      </div>
      <Modal className={modalEstaAberta ? 'visivel' : ''}>
        <ModalContent className="container">
          <img
            src={prato?.foto}
            alt="conteúdo"
            onClick={() => setModalEstaAberta(false)}
          />
          <div className="containerConteudo">
            <h3>{prato?.nome}</h3>
            <p>
              {prato?.descricao}
              <span>{`Serve: ` + prato?.porcao}</span>
            </p>
            <button>
              {' '}
              Adicionar ao carrinho - {formataPreco(prato?.preco || 0)}
            </button>
            <button
              type="button"
              onClick={() => setModalEstaAberta(false)}
            ></button>
          </div>
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
