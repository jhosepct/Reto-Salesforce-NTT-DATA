import { useState } from "react";
import { HeaderStyle, MenuIcon, Wrapper } from "./styles"

import { PropsHeader } from "../../../utils/interfaces/components";

import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineCaretDown } from 'react-icons/ai';

export const THeader = ({
    // Default values
    children,
    width = 'auto',
    bgColor = '#4472c4',
    color = '#ffffff',
    align = 'center',
    sortable = false,
    sortType = '',
    handleClickSort,
    handleClickPhoto,
    id = '',
}: PropsHeader) => {
    const [sort, setSort] = useState<'asc' | 'desc' | ''>(sortType);

    const [menu, setMenu] = useState<boolean>(false);

    const propMenu = { menu: menu }

    const handleClick = () => {
        if (sort === '' || sort === 'desc') {
            setSort('asc');
            handleClickSort?.('asc', id);
        } else {
            setSort('desc')
            handleClickSort?.('desc', id);
        }
    }


    const handleSort = (typeSort: 'asc' | 'desc' | '') => {
        setSort(typeSort);
        setMenu(false);
        handleClickSort?.(typeSort, id);
    }

    const handleChangePhoto = (typePhoto: 'thumbnail' | 'medium' | 'large', typeSort: 'asc' | 'desc' | '') => {
        setSort(typeSort);
        setMenu(false);
        handleClickPhoto?.(typePhoto);
    }

    // Props for HeaderStyle
    const props = { width: width, bgColor: bgColor, color: color, align: align, sortable: sortable, sortType: sort }
    if (sortable) {
        return <HeaderStyle {...props}  >
            <Wrapper >
                <div className="fisrt-child" onClick={handleClick}>
                    <p>
                        {children}
                    </p>
                    <AiOutlineCaretDown />
                </div>
                <MenuIcon {...propMenu} onClick={() => setMenu(!menu)}>
                    <BsThreeDotsVertical />
                    <div>
                        <ul>
                            <li className={sort === "asc" ? "active" : ""} onClick={() => handleSort('asc')}>Ordenar por ASC</li>
                            <li className={sort === "desc" ? "active" : ""} onClick={() => handleSort('desc')}>Ordenar por DESC</li>
                            <li className={sort === "" ? "active" : ""} onClick={() => handleSort('')}>Desordenar</li>
                        </ul>
                    </div>
                </MenuIcon>
            </Wrapper>
        </HeaderStyle>
    }
    else if (id === 'photo') {
        return <HeaderStyle {...props}  >
            <Wrapper >
                <div className="fisrt-child" >
                    <p>
                        {children}
                    </p>
                </div>
                <MenuIcon {...propMenu} onClick={() => setMenu(!menu)}>
                    <BsThreeDotsVertical />
                    <div>
                        <ul>
                            <li className={sort === "" ? "active" : ""} onClick={() => handleChangePhoto('thumbnail', '')}>Miniatura</li>
                            <li className={sort === "desc" ? "active" : ""} onClick={() => handleChangePhoto('medium', 'desc')}>Mediano</li>
                            <li className={sort === "asc" ? "active" : ""} onClick={() => handleChangePhoto('large', 'asc')}>Largo</li>
                        </ul>
                    </div>
                </MenuIcon>
            </Wrapper>
        </HeaderStyle>
    }
    return <HeaderStyle {...props} >{children}</HeaderStyle>
};
