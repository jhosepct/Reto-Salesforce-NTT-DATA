type PropsHeader = {
    children: string | JSX.Element | JSX.Element[]
}

const THeader = ({ children }: PropsHeader) => {
    return <th>{children}</th>
}

export default THeader