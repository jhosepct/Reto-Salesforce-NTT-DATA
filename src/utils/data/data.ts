import { DataHeader } from "../interfaces/data";

export const createData = (data: any) => {
    return { name: data.name.first, lastname: data.name.last, age: data.dob.age, gender: data.gender, email: data.email, nationality: data.nat, photo: data.picture };
}

export const dataHeader: DataHeader[] = [
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