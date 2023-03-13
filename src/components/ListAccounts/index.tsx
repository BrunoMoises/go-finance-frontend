import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import * as S from './styles'
import Button from '@/components/Button'
import Input from '@/components/Input'

function createData(
    title: string,
    description: string,
    category: string,
    value: number,
    date: number,
) {
    return { title, description, category, value, date }
}

const titles = ['Title', 'Description', 'Category', 'Value', 'Date', 'Delete'];

const rows = [
    createData('Frozen yoghurt', '159', '6.0', 24, 4.0),
];

export default function ListAccounts() {
    return (
        <S.Wrapper>
            <S.Button>
                <Button isFilter>
                    Adicionar
                </Button>
            </S.Button>
            <S.Filters>
                <S.Filter>
                    <Input label='Data inicial' type='date' name='initialDate' isFilter />
                </S.Filter>
                <S.Filter>
                    <Input label='Data final' type='date' name='finalDate' isFilter />
                </S.Filter>
                <S.Filter>
                    <Input label='Title' type='text' placeholder='Titulo' name='title' isFilter />
                </S.Filter>
                <S.Filter>
                    <Input label='Description' type='text' placeholder='Description' name='description' isFilter />
                </S.Filter>
                <S.Filter>
                    <Input label='Category' type='text' placeholder='Category' name='category' isFilter />
                </S.Filter>
            </S.Filters>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {titles.map((title) => (
                                <TableCell>{title}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.title}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right">{row.category}</TableCell>
                                <TableCell align="right">{row.value}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="left">
                                    <S.IconDelete size={20} onClick={() => console.log('delete')} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </S.Wrapper>
    );
}