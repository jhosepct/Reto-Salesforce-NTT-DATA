import { Global } from '@emotion/react';
import { DataBody, DataHeader } from '../../App';
import Table from './index'
import { global, reset } from '../../assets/global/global';

export default {
    title: 'Components/Table',
    component: Table,
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

const dataHeaderWIthSort: DataHeader[] = [
    {
        name: 'Nombre',
        width: '200px',
        align: 'left',
        id: 'name',
        sortable: true

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
        id: 'age',
        sortable: true
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


// Data fakers
const dataBody: DataBody[] = [
    {
        name: 'Victoria',
        lastname: 'Pérez',
        age: 27,
        gender: 'F',
        email: 'victoria.perez@example.com',
        nationality: 'ES',
        photo: 'https://randomuser.me/api/portraits/women/72.jpg'
    },
    {
        name: 'Amanda',
        lastname: 'Wallo',
        age: 72,
        gender: 'F',
        email: 'amanda.wallo@example.com',
        nationality: 'FI',
        photo: 'https://randomuser.me/api/portraits/women/5.jpg'
    }
]

export const Primary = () => {
    return (
        <>
            <Global styles={reset} />
            <Global styles={global} />
            <Table dataHeader={dataHeader} dataBody={dataBody} />
        </>
    )
}

Primary.storyName = 'Default';

export const WithSort = () => {
    return (
        <>
            <Global styles={reset} />
            <Global styles={global} />
            <Table dataHeader={dataHeaderWIthSort} dataBody={dataBody} />
        </>
    )
}

WithSort.storyName = 'Table With Sort';