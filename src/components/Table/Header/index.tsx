import { HeaderStyle } from "./styles"

// Props for Header
export interface PropsHeader {
    /**
   * Header content
   */
    children?: string | JSX.Element | JSX.Element[];
    /**
   * Width of the header
   */
    width?: string;
    /**
   * What background color to use
   */
    bgColor?: string;
    /**
   * What text color to use
   */
    color?: string;
    /**
   * What position should the text have?
   */
    align?: 'left' | 'center' | 'right';
}

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
