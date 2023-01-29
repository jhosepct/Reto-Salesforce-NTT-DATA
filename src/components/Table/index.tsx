import { TCell } from "./Cell";
import { THeader } from "./Header";
import TRow from "./Row";
import { TableStyle } from "./style";

interface DataHeader {
    name: string;
    width: string;
    align?: 'left' | 'center' | 'right';
    id: string;
}

const dataHeader: DataHeader[] = [
    {
        name: 'Nombre',
        width: '200px',
        align: 'left',
        id: 'name'

    },
    {
        name: 'Apellido',
        width: '200px',
        align: 'left',
        id: 'lastname'
    },
    {
        name: 'Edad',
        width: '200px',
        id: 'age'
    },
    {
        name: 'Genero',
        width: '200px',
        id: 'gender'
    },
    {
        name: 'Email',
        width: '600px',
        align: 'left',
        id: 'email'
    },
    {
        name: 'Nacionalidad',
        width: '200px',
        id: 'nationality'
    },
    {
        name: 'Foto',
        width: '200px',
        id: 'photo'
    }
]

const getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) =>
    obj[key];

interface DataBody {
    name: string;
    lastname: string;
    age: string;
    gender: string;
    email: string;
    nationality: string;
    photo: string;
}

const dataBody: DataBody[] = [
    {
        name: 'Elsie',
        lastname: 'Fields',
        age: '27',
        gender: 'F',
        email: 'elsie.fields@example.com',
        nationality: 'US',
        photo: ''
    },
    {
        name: 'Elsie 2',
        lastname: 'Fields 2',
        age: '27',
        gender: 'F',
        email: 'elsie.fields@example.com',
        nationality: 'US',
        photo: ''
    }
]

const keyOf = (key: string) => {
    return key as keyof DataBody;
}

const Table = () => {
    return (
        <TableStyle>
            <thead>
                <TRow>
                    {dataHeader.map((item) => (
                        <THeader key={item.id} {...item}>
                            {item.name}
                        </THeader>
                    ))}
                </TRow>
            </thead>
            <tbody>
                {dataBody.map((row, index) => (
                    <TRow>
                        {dataHeader.map((column) => (
                            <TCell key={column.id} align={column.align} headers={column.id} bgColor={(index + 1) % 2 == 0 ? '#d9e1f2' : '#b4c6e7'}>
                                {row[keyOf(column.id)]}
                            </TCell>
                        ))}

                    </TRow>
                ))}
            </tbody>
        </TableStyle>
    )
}

export default Table;
