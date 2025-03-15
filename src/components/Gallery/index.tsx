import { Item, Items, CardEscuro, Modal, ModalContent } from './styles'

import { useState } from 'react'
import { MenuCategories } from '../../pages/Categories'

type Props = {
  menu: MenuCategories[]
}

const Gallery = ({ menu }: Props) => {
  const [modalEstaAberta, setModalEstaAberta] = useState(false)
  const [modalUrl, setModalUrl] = useState('')

  return (
    <>
      <div className="container">
        <Items>
          {menu.map((menu, index) => (
            <CardEscuro key={menu.id}>
              <Item>
                <img
                  src={menu.capa}
                  alt={`Mídia ${index + 1} de nome do alimento`}
                />
                <h3>{menu.titulo}</h3>
                <p>
                  {menu.descricao.length > 100
                    ? menu.descricao.slice(0, 100) + '...'
                    : menu.descricao}
                </p>
                <button
                  onClick={() => {
                    setModalEstaAberta(true)
                    setModalUrl(menu.cardapio.foto)
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
            src={modalUrl}
            alt="conteúdo"
            onClick={() => setModalEstaAberta(false)}
          />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
