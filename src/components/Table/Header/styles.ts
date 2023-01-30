import styled from "@emotion/styled";
import { PropsHeader } from "../../../utils/interfaces/components";

export const HeaderStyle = styled.th<PropsHeader>`
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    width: ${props => props.width};
    text-align: ${props => props.align};
    padding: 5px;
    position: relative;
    
    z-index: 100;

    ${({ sortType = '', ...props }) => props.sortable && sortable(sortType)}
`;

const sortable = (type: string) => {
    return `
    cursor: pointer;
    &::after{
        position: absolute;
        ${sortType(type)}
        display: inline-block;

        background-color: red;
    }
    `
}

const sortType = (type: string) => {
    switch (type) {
        case 'asc':
            return `
                content: '^';
           
            `
        case 'desc':
            return `
                content: 'v';
           
            `
        default:
            return `
                content: '';
            
            `
    }
}

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MenuIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 20px;
    height: 20px;

    &:hover{
        background-color: rgba(0, 0, 0, 0.09);
    }
    & svg{
        font-size: 16px;
    }
    & div{
        position: absolute;
        border-radius: 5px;
        width: 139px;
        top: 30px;
        right: 5px;
        background: white;
        color: black;
        z-index: 150;
    }
    & ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: 10px 5px;
        gap: 5px;
        align-items: center;
    }
`;