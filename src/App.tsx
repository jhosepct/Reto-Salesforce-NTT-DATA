import { useEffect, useState } from "react";

import { createData } from "./utils/data";
import Table from "./components/Table";

import { CSVLink } from "react-csv";

import axios from "axios";
import { Button } from "./components/Button";

export interface PhotoData extends Record<string, any> {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface DataBody extends Record<string, any> {
  name: string;
  lastname: string;
  age: number;
  gender: string;
  email: string;
  nationality: string;
  photo: PhotoData;
}

export interface DataHeader {
  name: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  id: string;
  sortable?: boolean;
}

const dataHeader: DataHeader[] = [
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

const App = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState<DataBody[]>([]);
  const baseUrl = "https://randomuser.me/api/?";
  useEffect(() => {
    axios.get(`${baseUrl}results=10`).then((res) => {
      setData(res.data.results);
    });
  }, []);

  useEffect(() => {
    const tempNewData: DataBody[] = data.map((item: any) => {
      return createData(item);;
    });
    setNewData(tempNewData);
  }, [data]);
  return (
    <div>
      <CSVLink data={newData} separator={";"} filename="datosApi.csv">
        <Button label="Exportara CSV" primary />
      </CSVLink>

      <Table dataHeader={dataHeader} dataBody={newData} />
    </div>
  )
}

export default App;
