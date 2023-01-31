// Description: This file contains all the interfaces for the components

import { PhotoData } from "../../App";

// Props for the Cell component
export interface PropsCell {
    /**
   * Header content
   */
    children?: string | JSX.Element | JSX.Element[] | Object;
    /**
   * Width of the header
   */
    width?: string;
    /**
   * What background color to use
   */
    bgColor?: string;
    /**
   * What text color to use
   */
    color?: string;
    /**
   * What position should the text have?
   */
    align?: 'left' | 'center' | 'right';
    /**
     * What position should the text have?
     * @param {string[]} headers - The headers of the table
     */
    headers?: string | (string[] & string);
    /**
     *  What type of cell is it?
     *
     */
    type?: string;

}

// Props for the Header component
export interface PropsHeader {
    /**
   * Header content
   */
    children?: string | JSX.Element | JSX.Element[];
    /**
   * Width of the header
   */
    width?: string;
    /**
   * What background color to use
   */
    bgColor?: string;
    /**
   * What text color to use
   */
    color?: string;
    /**
   * What position should the text have?
   */
    align?: 'left' | 'center' | 'right';
    /**
    * Sort the table by this column
    * 
    */
    sortable?: boolean;
    /**
     * What type of sort is it?
     * 
     * @param {string} type - The type of sort
     */
    sortType?: 'asc' | 'desc' | '';
    /**
     * What type of sort is it?
     * 
     */
    handleClickSort?: HandleClickSort;
    /**
     * Name of the column
     *  
     */
    id?: string;
}

interface HandleClickSort {
    (sortType: 'asc' | 'desc' | '', id: string): void;
}

// Props for the Image component
export interface PropsImage {
    /**
     * The image source
     *  
    */
    src?: string;
    /**
     * The image width
     * 
     * @param {string} width - The image width
     */
    width?: string;
}

// Props for the Button component
export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}