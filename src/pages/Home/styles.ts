import styled from "@emotion/styled";
import { typography } from "../../assets/typography";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const WrapperTable = styled.div`
    max-height: 450px;
    overflow-x: auto;
    scrollbar-width: thin;    
    thead{
        position: sticky;
        top: 0;
        display: table-header-group;
    }
    
    // Scrollbar design

    &::-webkit-scrollbar {
        -webkit-appearance: none;
    }
    
    &::-webkit-scrollbar:vertical {
        width:10px;
    }
    
    &::-webkit-scrollbar-button:increment,&::-webkit-scrollbar-button {
        display: none;
    } 
    
    &::-webkit-scrollbar:horizontal {
        height: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: #797979;
        border-radius: 20px;
        border: 2px solid #f1f2f3;
    }
    
    &::-webkit-scrollbar-track {
        border-radius: 10px;  
    }
`;