import { HeaderStyle } from "./styles"

// Props for Header
export type PropsHeader = {
    children: string | JSX.Element | JSX.Element[]
    width: string
    bgColor: string
    color: string
}

const THeader = ({ children, width, bgColor, color }: PropsHeader) => {

    const props = { width: width, bgColor: bgColor, color: color }

    return <HeaderStyle {...props}>{children}</HeaderStyle>
}


// Default props
THeader.defaultProps = {
    width: 'auto',
    bgColor: '#4472c4',
    color: '#ffffff'
}


export default THeader