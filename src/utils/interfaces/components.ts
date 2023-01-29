// Description: This file contains all the interfaces for the components

// Props for the Cell component
export interface PropsCell {
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
}