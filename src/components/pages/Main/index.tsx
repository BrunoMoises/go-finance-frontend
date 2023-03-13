import Button from '@/components/Button'
import Card from '@/components/Card'
import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Main>
      <S.Graph>
        graph
      </S.Graph>
      <S.Cards>
        <Card title='Saldo a pagar' count='120.55' />
        <Card title='Saldo a receber' count='100.55' />
        <Card title='Saldo total' count='-20.55' />
        <Button>
          Download
        </Button>
      </S.Cards>
    </S.Main>
  </S.Wrapper>
)

export default Main
