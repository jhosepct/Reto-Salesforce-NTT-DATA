import styled from "@emotion/styled";
import { PropsHeader } from "../../../utils/interfaces/components";

export const HeaderStyle = styled.th<PropsHeader>`
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    width: ${props => props.width};
    text-align: ${props => props.align};
    padding: 5px;
`;