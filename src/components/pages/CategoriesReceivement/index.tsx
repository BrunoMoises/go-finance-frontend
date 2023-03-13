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
    <S.Wrapper>
      <CategoriesReceivementAdd getValueOpen={openAddModal} isOpen={modalIsOpen} />
      <ListCategories openModal={openAddModal} />
    </S.Wrapper>
  )
}

export default CategoriesReceivement
