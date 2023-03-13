import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
    children?: string
    disabled?: boolean
    isFilter?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, disabled = false, isFilter = false, ...buttonHTMLProps }: ButtonProps) {
    return (
        <S.ButtonWrapper disabled={disabled} isFilter={isFilter} {...buttonHTMLProps} >
            {children}
        </S.ButtonWrapper>
    )
}
