import Button from '@/components/Button'
import Input from '@/components/Input'
import * as S from './styles'

export default function CategoriesDebitForm() {
    return (
        <S.Container>
            <S.Inputs>
                <Input name='title' label='Titulo' placeholder='Titulo da categoria...' />
                <Input name='description' label='Descrição' placeholder='Digite a descrição...' />
            </S.Inputs>
            <S.Buttons>
                <Button>
                    Salvar
                </Button>
            </S.Buttons>
        </S.Container>
    )
}
