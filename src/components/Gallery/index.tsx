import { Item, Items, CardEscuro, Modal, ModalContent } from './styles'

import { useState } from 'react'
import { MenuCategories } from '../../pages/Categories'

type Props = {
  menu: MenuCategories
}

const Gallery = ({ menu }: Props) => {
  const [modalEstaAberta, setModalEstaAberta] = useState(false)
  const [modalUrl, setModalUrl] = useState('')

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
                    setModalUrl(menu.foto)
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
          <div className="containerConteudo">
            <h3>Nome do prato</h3>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião. <span>Serve: de 2 a 3 pessoas</span>
            </p>
            <button> Adicionar ao carrinho - R$ 60,90</button>
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
