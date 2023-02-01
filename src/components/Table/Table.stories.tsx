import { ComponentStory } from '@storybook/react';
import { Global } from '@emotion/react';

import Table from './index'

import { global, reset } from '../../assets/global/global';
import { DataBody, DataHeader } from '../../utils/interfaces/data';

export default {
    title: 'Components/Table/Table',
    component: Table,
}


const dataHeader: DataHeader[] = [
    {
        name: 'Nombre',
        align: 'left',
        id: 'name',
    },
    {
        name: 'Apellido',
        align: 'left',
        id: 'lastname',
    },
    {
        name: 'Edad',
        id: 'age',
    },
    {
        name: 'Genero',
        id: 'gender',
    },
    {
        name: 'Email',
        align: 'left',
        id: 'email',
    },
    {
        name: 'Nacionalidad',
        id: 'nationality',
    },
    {
        name: 'Foto',
        width: '140px',
        id: 'photo'
    }
]

const dataHeaderWIthSort: DataHeader[] = [
    {
        name: 'Nombre',
        align: 'left',
        id: 'name',
        sortable: true,
    },
    {
        name: 'Apellido',
        align: 'left',
        id: 'lastname',
    },
    {
        name: 'Edad',
        id: 'age',
        sortable: true,
    },
    {
        name: 'Genero',
        id: 'gender',
    },
    {
        name: 'Email',
        align: 'left',
        id: 'email',
    },
    {
        name: 'Nacionalidad',
        id: 'nationality',
    },
    {
        name: 'Foto',
        width: '140px',
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


const Template: ComponentStory<typeof Table> = (args) => (
    <>
        <Global styles={reset} />
        <Global styles={global} />
        <Table {...args} />
    </>
)

export const Default = Template.bind({})
Default.args = {
    dataHeader,
    dataBody,
}

export const WithSort = Template.bind({})
WithSort.args = {
    dataHeader: dataHeaderWIthSort,
    dataBody,
}