import { useState } from "react";
import { PropsHeader } from "../../../utils/interfaces/components";
import { HeaderStyle, MenuIcon, Wrapper } from "./styles"

import { BsThreeDotsVertical } from 'react-icons/bs';

export const THeader = ({
    // Default values
    children,
    width = 'auto',
    bgColor = '#4472c4',
    color = '#ffffff',
    align = 'center',
    sortable = false,
    sortType = ''
}: PropsHeader) => {
    const [sort, setSort] = useState<'asc' | 'desc' | ''>(sortType);

    const handleClick = () => {
        if (sort === '') {
            setSort('asc')
        } else {
            if (sort === 'asc') {
                setSort('desc')
            } else {
                setSort('asc')
            }
        }
    }

    // Props for HeaderStyle
    const props = { width: width, bgColor: bgColor, color: color, align: align, sortable: sortable, sortType: sort }
    if (sortable) {
        return <HeaderStyle {...props} onClick={handleClick} >
            <Wrapper>
                <div>
                    {children}
                </div>
                <MenuIcon onClick={() => {
                    console.log('click')
                }}>
                    <BsThreeDotsVertical />
                    <div>
                        <ul>
                            <li>Sort by ASC</li>
                            <li>Sort by DESC</li>
                            <li>Unsort</li>
                        </ul>
                    </div>
                </MenuIcon>
            </Wrapper>
        </HeaderStyle>
    }
    return <HeaderStyle {...props} >{children}</HeaderStyle>
};
