import styled from "@emotion/styled";

export const ImageStyle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    background: #333944;

    // If the image is a child of the Image component
    & img {
        width: 100%;
        height: auto;
        color: #fff;
    }
`;