import Button from '@/components/Button'
import Input from '@/components/Input'
import * as S from './styles'

export default function AccountsReceivementForm() {
    return (
        <S.Container>
            <S.Inputs>
                <Input name='title' label='Titulo' placeholder='Titulo da categoria...' />
                <Input name='description' label='Descrição' placeholder='Digite a descrição...' />
                <Input name='category' label='Categoria' placeholder='Selecione...' />
                <Input name='value' label='Valor' placeholder='Digite o valor...' type='number' />
                <Input name='date' label='Data' placeholder='Digite a data...' type='date' />
            </S.Inputs>
            <S.Buttons>
                <Button>
                    Salvar
                </Button>
            </S.Buttons>
        </S.Container>
    )
}
