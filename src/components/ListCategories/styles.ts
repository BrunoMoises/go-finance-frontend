import { AiOutlineDelete } from 'react-icons/ai'
import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`

export const Filters = styled.div`
  display: flex;
  flex-direction: row;
`

export const Filter = styled.div`
  margin-left: 5px;
`

export const Button = styled.div`
  display:flex;
  justify-content: flex-end;
  align-items: flex-end;
`

export const IconDelete = styled(AiOutlineDelete)`
    ${({ theme })=> css`
        color: ${theme.colors.tomato};
    `}
    cursor: pointer;
`

export const FiltersAndDataTable = styled.div`
  ${({ theme })=> css`
    background: ${theme.colors.white};
    padding: 15px;
    border-radius: 7px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  `}
`