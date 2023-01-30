import styled from "@emotion/styled";
import { PropsHeader } from "../../../utils/interfaces/components";
import { typography } from "../../../assets/typography";

type PropsMenu = {
    menu: boolean;
}

export const HeaderStyle = styled.th<PropsHeader>`
    ${typography.disabled.textSelection}

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
    div .fisrt-child{
        display: flex;
        align-items: center;
    }
    div .fisrt-child svg {   
        width: 20px;
        height: 20px;
        ${sortType(type)}
    }
    `
}

const sortType = (type: string) => {
    switch (type) {
        case 'asc':
            return `
                rotate: 180deg;
            `
        case 'desc':
            return `
                rotate: 0deg;
            `
        default:
            return `
                opacity: 0.5;
            
            `
    }
}

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .fisrt-child{
        flex-grow: 1;
    }
`;

export const MenuIcon = styled.div<PropsMenu>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 20px;
    height: 20px;

    ${props => `background: ${props.menu ? 'rgba(0, 0, 0, 0.09)' : ''};`}

    &:hover{
        background-color: rgba(0, 0, 0, 0.09);
    }
    & svg{
        font-size: 16px;
    }
    & div{
        ${props => `display: ${props.menu ? 'block' : 'none'};`}
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
        align-items: center;
    }
    & li{
        width: 100%;
        cursor: pointer;
        padding: 10px 5px;
        text-align: center;
        &:hover{
            background-color: rgba(0, 0, 0, 0.09);
        }
    }
    & li.active{
        opacity: 0.5;
    }
`;