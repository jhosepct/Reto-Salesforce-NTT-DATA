import { PropsHeader } from "../../../utils/interfaces/components";
import { HeaderStyle } from "./styles"

export const THeader = ({
    // Default values
    children,
    width = 'auto',
    bgColor = '#4472c4',
    color = '#ffffff',
    align = 'center'
}: PropsHeader) => {

    // Props for HeaderStyle
    const props = { width: width, bgColor: bgColor, color: color, align: align }

    return <HeaderStyle {...props}>{children}</HeaderStyle>
};
