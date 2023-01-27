import TCell from "./Cell";
import THeader from "./Header";
import TRow from "./Row";

const Table = () => {
    return (
        <table>
            <thead>
                <TRow>
                    <THeader>
                        a
                    </THeader>
                </TRow>
            </thead>
            <tbody>
                <TRow>
                    <TCell>
                        b
                    </TCell>
                </TRow>
            </tbody>
        </table>
    )
}

export default Table;
