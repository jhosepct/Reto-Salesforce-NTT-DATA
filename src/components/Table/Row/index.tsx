type PropsRow = {
    children: string | JSX.Element | JSX.Element[]
}

const TRow = ({ children }: PropsRow) => {
    return <tr>{children}</tr>
}

export default TRow