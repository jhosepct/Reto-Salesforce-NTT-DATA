import { DataBody, DataHeader } from "../../App";
import { TCell } from "./Cell";
import { THeader } from "./Header";
import TRow from "./Row";
import { TableStyle } from "./style";

import uuid from 'react-uuid';
interface TableProps {
    dataHeader: DataHeader[], dataBody: DataBody[]
}


const Table = ({ dataHeader, dataBody }: TableProps) => {
    return (
        <TableStyle>
            <thead>
                <TRow>
                    {dataHeader.map((item) => (
                        <THeader key={item.id} {...item}>
                            {item.name}
                        </THeader>
                    ))}
                </TRow>
            </thead>
            <tbody>
                {dataBody.map((row, index) => (
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
