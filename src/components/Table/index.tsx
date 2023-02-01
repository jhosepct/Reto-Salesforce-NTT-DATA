import { useEffect, useState } from "react";
import { TCell } from "./Cell";
import { THeader } from "./Header";
import TRow from "./Row";

import { TableStyle } from "./style";

import { TableProps } from "../../utils/interfaces/components";
import { DataBody } from "../../utils/interfaces/data";

import uuid from 'react-uuid';



const Table = ({ dataHeader = [], dataBody = [] }: TableProps) => {
    const [rows, setRows] = useState<DataBody[]>([]);
    const [typePhoto, setTypePhoto] = useState<'thumbnail' | 'medium' | 'large'>('thumbnail');

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

    const handleClickPhoto = (typePhoto: 'thumbnail' | 'medium' | 'large') => {
        setTypePhoto(typePhoto);
    }

    return (
        <TableStyle>
            <thead>
                <TRow>
                    {dataHeader.map((item) => (
                        <THeader key={item.id} {...item} handleClickPhoto={handleClickPhoto} handleClickSort={handleClickSort} >
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
                                typePhoto={typePhoto}
                            />
                        ))}

                    </TRow>
                ))}
            </tbody>
        </TableStyle>
    )
}

export default Table;
