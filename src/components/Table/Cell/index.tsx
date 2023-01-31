import { useState } from "react";
import { PropsCell } from "../../../utils/interfaces/components";
import { Photo } from "../../Image";
import { CellStyle, StyleContainer } from "./styles";
import { PhotoData } from "../../../App";

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


  const [sizeImage, setSizeImage] = useState<PhotoData>();
  // Props for HeaderStyle
  const propsStyle = { width: width, bgColor: bgColor, color: color, align: align }

  if (type === 'photo') {
    const photoData = children as PhotoData;
    const url = photoData?.large.toString();
    return (
      <CellStyle {...propsStyle} headers={headers}>
        <StyleContainer>
          <Photo src={url} />
        </StyleContainer>
      </CellStyle>
    )
  }

  return <CellStyle {...propsStyle} headers={headers}>{children?.toString()}</CellStyle>
};
