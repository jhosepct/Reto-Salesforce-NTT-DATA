import { useEffect, useState } from "react";

import { createData } from "./utils/data";
import Table from "./components/Table";

import { CSVLink } from "react-csv";

import axios from "axios";
import { Button } from "./components/Button";

interface photo extends Record<string, any> {
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
  photo: string;

}

export interface DataHeader {
  name: string;
  width: string;
  align?: 'left' | 'center' | 'right';
  id: string;
  sortable?: boolean;
}

const dataHeader: DataHeader[] = [
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
