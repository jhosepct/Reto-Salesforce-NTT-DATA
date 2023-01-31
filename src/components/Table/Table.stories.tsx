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
        name: 'Grimaldo',
        lastname: 'Chavarría',
        age: 31,
        gender: 'M',
        email: 'grimaldo.chavarria@example.com',
        nationality: 'MX',
        photo: {
            large: "https://randomuser.me/api/portraits/women/44.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/44.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/44.jpg"
        },
    },
    {
        name: 'Catalina',
        lastname: 'Méndez',
        age: 67,
        gender: 'F',
        email: 'catalina.mendez@example.com',
        nationality: 'ES',
        photo: {
            large: "https://randomuser.me/api/portraits/men/71.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/71.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg"
        },
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