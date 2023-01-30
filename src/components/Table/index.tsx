import { DataBody, DataHeader } from "../../App";
import { TCell } from "./Cell";
import { THeader } from "./Header";
import TRow from "./Row";
import { TableStyle } from "./style";

import { useEffect, useState } from "react";


import uuid from 'react-uuid';
interface TableProps {
    dataHeader: DataHeader[], dataBody: DataBody[]
}


const Table = ({ dataHeader, dataBody }: TableProps) => {
    const [rows, setRows] = useState<DataBody[]>([]);

    useEffect(() => {
        setRows(dataBody);
    }, [dataBody])

    const handleClickSort = (sort: 'asc' | 'desc' | '', column: string) => {
        if (sort === 'asc') {
            const sorted = [...dataBody].sort((a, b) => {
                if (a[column] > b[column]) {
                    return 1;
                }
                if (a[column] < b[column]) {
                    return -1;
                }
                return 0;

            })
            setRows(sorted);
        } else if (sort === 'desc') {
            const sorted = [...dataBody].sort((a, b) => {
                if (a[column] > b[column]) {
                    return -1;
                }
                if (a[column] < b[column]) {
                    return 1;
                }
                return 0;
            })
            setRows(sorted);
        } else {
            setRows(dataBody);
        }
    }

    return (
        <TableStyle>
            <thead>
                <TRow>
                    {dataHeader.map((item) => (
                        <THeader key={item.id} {...item} handleClickSort={handleClickSort}>
                            {item.name}
                        </THeader>
                    ))}
                </TRow>
            </thead>
            <tbody>
                {rows.map((row, index) => (
                    <TRow key={index}>
                        {dataHeader.map((column) => (
                            <TCell
                                key={uuid()}
                                align={column.align}
                                headers={column.id}
                                bgColor={(index + 1) % 2 === 0 ? '#d9e1f2' : '#b4c6e7'}
                                children={row[column.id]}
                                type={column.id}
                            />
                        ))}

                    </TRow>
                ))}
            </tbody>
        </TableStyle>
    )
}

export default Table;
