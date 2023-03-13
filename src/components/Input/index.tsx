import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type InputProps = {
    label?: string
    placeholder?: string
} & InputHTMLAttributes<HTMLInputElement>

export default function Input({ name, label, placeholder, type }: InputProps) {
    return (
        <S.Wrapper>
            <S.Label htmlFor={name}>{label}</S.Label>
            <S.InputWrapper>
                <S.Input placeholder={placeholder} name={name} type={type} />
            </S.InputWrapper>
        </S.Wrapper>
    )
}
