import TCell from "./Cell";
import { THeader } from "./Header";
import TRow from "./Row";
import { TableStyle } from "./style";

interface DataHeader {
    name: string;
    width: string;
    align?: 'left' | 'center' | 'right';
}

const dataHeader: DataHeader[] = [
    {
        name: 'Nombre',
        width: '200px',
        align: 'left'
    },
    {
        name: 'Apellido',
        width: '200px',
        align: 'left'
    },
    {
        name: 'Edad',
        width: '200px',
    },
    {
        name: 'Genero',
        width: '200px',
    },
    {
        name: 'Email',
        width: '600px',
        align: 'left'
    },
    {
        name: 'Nacionalidad',
        width: '200px',
    },
    {
        name: 'Foto',
        width: '200px',
    }
]

const Table = () => {
    return (
        <TableStyle>
            <thead>
                <TRow>
                    {dataHeader.map((item, index) => (
                        <THeader key={index} width={item.width} align={item.align}>
                            {item.name}
                        </THeader>
                    ))}
                </TRow>
            </thead>
            <tbody>
                <TRow>
                    <TCell>
                        b
                    </TCell>
                    <TCell>
                        b
                    </TCell>
                    <TCell>
                        b
                    </TCell>
                    <TCell>
                        b
                    </TCell>
                </TRow>
                <TRow>
                    <TCell>
                        b
                    </TCell>
                    <TCell>
                        b
                    </TCell>
                    <TCell>
                        b
                    </TCell>
                    <TCell>
                        b
                    </TCell>
                </TRow>
            </tbody>
        </TableStyle>
    )
}

export default Table;
