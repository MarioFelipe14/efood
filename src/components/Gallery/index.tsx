import { Action, Item, Items, CardEscuro, Modal, ModalContent } from './styles'

import pizza from '../../assets/images/pizza.png'
import conteudo from '../../assets/images/conteudo-popup.png'
import { useState } from 'react'
import { Menu } from '../../pages/Categories'

type Props = {
  menu: Menu[]
}

type GalleryItem = {
  url: string
  h3: string
  p: string
}

const mock: GalleryItem[] = [
  {
    url: pizza,
    h3: 'Pizza Marguerita',
    p: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade.'
  },
  {
    url: pizza,
    h3: 'Pizza Marguerita',
    p: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade.'
  },
  {
    url: pizza,
    h3: 'Pizza Marguerita',
    p: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade.'
  },
  {
    url: pizza,
    h3: 'Pizza Marguerita',
    p: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade.'
  },
  {
    url: pizza,
    h3: 'Pizza Marguerita',
    p: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade.'
  },
  {
    url: pizza,
    h3: 'Pizza Marguerita',
    p: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade.'
  }
]

const Gallery = ({ menu }: Props) => {
  const [modalEstaAberta, setModalEstaAberta] = useState(false)
  const [modalUrl, setModalUrl] = useState('')

  return (
    <>
      <div className="container">
        <Items>
          {mock.map((menu, index) => (
            <CardEscuro
              key={menu.url}
              onClick={() => {
                setModalEstaAberta(true)
                setModalUrl(menu.url)
              }}
            >
              <Item>
                <img
                  src={menu.url}
                  alt={`Mídia ${index + 1} de nome do alimento`}
                />
                <h3>Pizza Marguerita</h3>
                <p>
                  A clássica Marguerita: molho de tomate suculento, mussarela
                  derretida, manjericão fresco e um toque de azeite. Sabor e
                  simplicidade!
                </p>
                <button>Adicionar ao carrinho</button>
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
