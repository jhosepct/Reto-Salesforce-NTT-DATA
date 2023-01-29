import { RowStyle } from "./styles"

type PropsRow = {
    children: string | JSX.Element | JSX.Element[]
}

const TRow = ({ children }: PropsRow) => {
    return <RowStyle>{children}</RowStyle>
}

export default TRow