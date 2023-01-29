import styled from "@emotion/styled";

export const ImageStyle = styled.div`
    width: 70px;
    height: 70px;
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