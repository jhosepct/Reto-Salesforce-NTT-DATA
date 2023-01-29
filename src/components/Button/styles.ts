import styled from "@emotion/styled";
import { ButtonProps } from "../../utils/interfaces/components";


export const ButtonStyle = styled.button<ButtonProps>`
font-weight: 700;
border: 0;
border-radius: 3em;
cursor: pointer;
display: inline-block;
line-height: 1;
${props => handleStyles(props)}
`;


const handleStyles = (props: ButtonProps) => {
    let styles = "";
    switch (props.primary) {
        case true:
            styles += `
                color: white;
                background-color: #1ea7fd;
          
          `;
            break;
        case false:
            styles += `
                color: #333;
                background-color: transparent;
                box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
          `;
            break;
    }
    switch (props.size) {
        case "small":
            styles += `
            font-size: 12px;
            padding: 10px 16px;
          `;
            break;
        case "medium":
            styles += ` font-size: 14px;
            padding: 11px 20px;`; break;
        case "large":
            styles += `font-size: 16px;
            padding: 12px 24px;`; break;
    }
    return styles;
};