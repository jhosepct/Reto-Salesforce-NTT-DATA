import { PropsCell } from "../../../utils/interfaces/components";
import { CellStyle } from "./styles";

export const TCell = ({
  // Default values
  children,
  width = 'auto',
  bgColor = '#b4c6e7',
  color = '#000000',
  align = 'center',
  headers = ''
}: PropsCell) => {

  // Props for HeaderStyle
  const propsStyle = { width: width, bgColor: bgColor, color: color, align: align }

  return <CellStyle {...propsStyle} headers={headers}>{children}</CellStyle>
};
