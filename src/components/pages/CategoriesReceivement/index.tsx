import ListCategories from '@/components/ListCategories'
import { useState } from 'react'
import CategoriesReceivementAdd from './components/CategoriesReceivementAdd'
import * as S from './styles'

const CategoriesReceivement = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const openAddModal = (value: boolean) => {
    setModalIsOpen(true)
  }
  return (
    <>
      <S.Wrapper>
        <ListCategories openModal={openAddModal} />
      </S.Wrapper>
      <S.ModalArea>
        <CategoriesReceivementAdd getValueOpen={openAddModal} isOpen={modalIsOpen} />
      </S.ModalArea>
    </>
  )
}

export default CategoriesReceivement
