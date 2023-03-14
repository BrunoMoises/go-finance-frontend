import ListCategories from '@/components/ListCategories'
import { useEffect, useState } from 'react'
import CategoriesReceivementAdd from './components/CategoriesReceivementAdd'
import * as S from './styles'

const CategoriesReceivement = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const getValueOpen = (value: boolean) => {
    setModalIsOpen(value)
  }
  return (
    <>
      <S.Wrapper>
        <ListCategories openModal={getValueOpen} />
      </S.Wrapper>
      <S.ModalArea>
        <CategoriesReceivementAdd getValueOpen={getValueOpen} isOpen={modalIsOpen} />
      </S.ModalArea>
    </>
  )
}

export default CategoriesReceivement
