import styled from "@emotion/styled";
import { PropsCell } from "../../../utils/interfaces/components";

export const CellStyle = styled.td<PropsCell>`
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    width: ${props => props.width};
    text-align: ${props => props.align};
    padding: 16px 5px;
`;