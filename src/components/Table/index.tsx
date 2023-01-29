import TCell from "./Cell";
import THeader from "./Header";
import TRow from "./Row";
import { TableStyle } from "./style";

const Table = () => {
    return (
        <TableStyle>
            <thead>
                <TRow>
                    <THeader>
                        Nombre
                    </THeader>
                    <THeader>
                        Apellido
                    </THeader>
                    <THeader>
                        Edad
                    </THeader>
                    <THeader>
                        Genero
                    </THeader>
                    <THeader>
                        Email
                    </THeader>
                    <THeader>
                        Nacionalidad
                    </THeader>
                    <THeader>
                        Foto
                    </THeader>
                </TRow>
            </thead>
            <tbody>
                <TRow>
                    <TCell>
                        b
                    </TCell>
                    <TCell>
                        b
                    </TCell>
                    <TCell>
                        b
                    </TCell>
                    <TCell>
                        b
                    </TCell>
                </TRow>
                <TRow>
                    <TCell>
                        b
                    </TCell>
                    <TCell>
                        b
                    </TCell>
                    <TCell>
                        b
                    </TCell>
                    <TCell>
                        b
                    </TCell>
                </TRow>
            </tbody>
        </TableStyle>
    )
}

export default Table;
