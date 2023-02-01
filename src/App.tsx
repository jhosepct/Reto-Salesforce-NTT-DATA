import { useEffect, useState } from "react";

import { createData, dataHeader } from "./utils/data/data";
import Table from "./components/Table";

import { CSVLink } from "react-csv";

import axios from "axios";
import { Button } from "./components/Button";
import { DataBody } from "./utils/interfaces/data";





const App = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState<DataBody[]>([]);
  const [dataExport, setDataExport] = useState<DataBody[]>([]);
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

  const handleCLickData = () => {
    const tempDataExport: DataBody[] = newData.map((item: any) => {
      return { ...item, photo: item.photo.large }
    })
    setDataExport(tempDataExport);
  }

  return (
    <div>
      <CSVLink data={dataExport} separator={";"} filename="datosApi.csv">
        <Button label="Exportara CSV" primary onClick={handleCLickData} />
      </CSVLink>

      <Table dataHeader={dataHeader} dataBody={newData} />
    </div>
  )
}

export default App;
