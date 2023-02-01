import { useEffect, useState } from "react";

import { Button } from "../../components/Button"
import Table from "../../components/Table"

import { DataBody } from "../../utils/interfaces/data";
import { createData, dataHeader } from "../../utils/data/data";

import axios from "axios";
import { CSVLink } from "react-csv"
import { Wrapper, WrapperTable } from "./styles";

export const Home = () => {
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
        <Wrapper>
            <h1>Reto Salesforce NTT DATA</h1>
            <CSVLink data={dataExport} separator={";"} filename="datosApi.csv">
                <Button label="Exportar datos a CSV" onClick={handleCLickData} />
            </CSVLink>
            <WrapperTable>
                <Table dataHeader={dataHeader} dataBody={newData} />
            </WrapperTable>
        </Wrapper>
    )
}
