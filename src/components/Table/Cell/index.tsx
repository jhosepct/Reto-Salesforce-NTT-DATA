import { PropsCell } from "../../../utils/interfaces/components";
import { Photo } from "../../Image";
import { CellStyle, StyleContainer } from "./styles";

export const TCell = ({
  // Default values
  children,
  type,
  width = 'auto',
  bgColor = '#b4c6e7',
  color = '#000000',
  align = 'center',
  headers = ''
}: PropsCell) => {

  // Props for HeaderStyle
  const propsStyle = { width: width, bgColor: bgColor, color: color, align: align }
  const url = children?.toString();

  if (type === 'photo') {
    return (
      <CellStyle {...propsStyle} headers={headers}>
        <StyleContainer>
          <Photo src={url} />
        </StyleContainer>
      </CellStyle>
    )
  }

  return <CellStyle {...propsStyle} headers={headers}>{children}</CellStyle>
};
