import { DataBody } from '../../App';
import Table from './index'

export default {
    title: 'Components/Table',
    component: Table,
}

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


const dataBody: DataBody[] = [
    {
        name: 'Elsie',
        lastname: 'Fields',
        age: 27,
        gender: 'F',
        email: 'elsie.fields@example.com',
        nationality: 'US',
        photo: ''
    },
    {
        name: 'Elsie 2',
        lastname: 'Fields 2',
        age: 27,
        gender: 'F',
        email: 'elsie.fields@example.com',
        nationality: 'US',
        photo: ''
    }
]

export const Primary = () => {
    return (
        <Table dataHeader={dataHeader} dataBody={dataBody} />
    )
}

Primary.storyName = 'Default';