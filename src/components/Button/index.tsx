import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
    children?: string
    disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, disabled = false, ...buttonHTMLProps }: ButtonProps) {
    return (
        <S.ButtonWrapper disabled={disabled} {...buttonHTMLProps} >
            {children}
        </S.ButtonWrapper>
    )
}
