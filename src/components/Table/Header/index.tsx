import { useState } from "react";
import { PropsHeader } from "../../../utils/interfaces/components";
import { HeaderStyle, MenuIcon, Wrapper } from "./styles"

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
                            <li className={sort === "asc" ? "active" : ""} onClick={() => handleSort('asc')}>Sort by ASC</li>
                            <li className={sort === "desc" ? "active" : ""} onClick={() => handleSort('desc')}>Sort by DESC</li>
                            <li className={sort === "" ? "active" : ""} onClick={() => handleSort('')}>Unsort</li>
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
                            <li className={sort === "" ? "active" : ""} onClick={() => handleChangePhoto('thumbnail', '')}>Thumbnail</li>
                            <li className={sort === "desc" ? "active" : ""} onClick={() => handleChangePhoto('medium', 'desc')}>Medium</li>
                            <li className={sort === "asc" ? "active" : ""} onClick={() => handleChangePhoto('large', 'asc')}>Large</li>
                        </ul>
                    </div>
                </MenuIcon>
            </Wrapper>
        </HeaderStyle>
    }
    return <HeaderStyle {...props} >{children}</HeaderStyle>
};
