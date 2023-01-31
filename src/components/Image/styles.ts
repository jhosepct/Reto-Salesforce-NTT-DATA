import styled from "@emotion/styled";
import { PropsImage } from "../../utils/interfaces/components";

export const ImageStyle = styled.div<PropsImage>`
    width: ${props => props.width || '72px'};
    height: ${props => props.width || '72px'};
    border-radius: 50%;
    overflow: hidden;
    background: transparent;

    // If the image is a child of the Image component
    & img {
        width: 100%;
        height: auto;
        color: #fff;
    }
`;