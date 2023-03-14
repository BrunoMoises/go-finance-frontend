import ListCategories from '@/components/ListCategories'
import { useState } from 'react'
import CategoriesDebitAdd from './components/CategoriesDebitAdd'
import * as S from './styles'

const CategoriesDebit = () => {
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
        <CategoriesDebitAdd getValueOpen={getValueOpen} isOpen={modalIsOpen} />
      </S.ModalArea>
    </>
  )
}

export default CategoriesDebit
