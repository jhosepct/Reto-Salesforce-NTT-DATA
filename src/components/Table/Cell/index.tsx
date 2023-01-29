import { PropsCell } from "../../../utils/interfaces/components";
import { CellStyle } from "./styles";

export const TCell = ({
  // Default values
  children,
  width = 'auto',
  bgColor = '#b4c6e7',
  color = '#000000',
  align = 'center'
}: PropsCell) => {

  // Props for HeaderStyle
  const props = { width: width, bgColor: bgColor, color: color, align: align }

  return <CellStyle {...props}>{children}</CellStyle>
};
