import { CellStyle } from "./styles";

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

export const TCell = ({
  // Default values
  children,
  width = 'auto',
  bgColor = '#b4c6e7',
  color = '#000000',
  align = 'center'
}: PropsHeader) => {

  // Props for HeaderStyle
  const props = { width: width, bgColor: bgColor, color: color, align: align }

  return <CellStyle {...props}>{children}</CellStyle>
};
