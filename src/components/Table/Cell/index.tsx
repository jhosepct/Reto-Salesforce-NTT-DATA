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
  headers = '',
  typePhoto = 'thumbnail'
}: PropsCell) => {


  const photoData = children as PhotoData;
  const image = photoData?.[typePhoto];

  const size = photoData?.thumbnail === image ? '48px' : photoData?.medium === image ? '60px' : '72px';
  // Props for HeaderStyle
  const propsStyle = { width: width, bgColor: bgColor, color: color, align: align }

  if (type === 'photo') {
    return (
      <CellStyle {...propsStyle} headers={headers}>
        <StyleContainer>
          <Photo src={image} width={size} />
        </StyleContainer>
      </CellStyle>
    )
  }

  return <CellStyle {...propsStyle} headers={headers}>{children?.toString()}</CellStyle>
};
