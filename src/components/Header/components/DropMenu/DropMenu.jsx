import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

import { headerTabs } from "../../../../constants/headerTabs";

import "./style.sass"

export const DropMenu = () => {

    const [menuIsWrapped, setMenuIsWrapped] = useState(true);

    const dropMenuObject = document.querySelector(".drop-menu__menu");

    if (dropMenuObject) {
        if (menuIsWrapped) {
            dropMenuObject.style.transform = "translate(-100%)"
        }
        else {
            dropMenuObject.style.transform = "translate(0)"
        }
    }

    return (
        <div className="drop-menu">
            <div
                onClick={
                    () => setMenuIsWrapped(!menuIsWrapped)
                }
                className='drop-menu__switcher'
            >
                <MenuIcon fontSize="large" />
            </div>
            <div className='drop-menu__menu'>
                {
                    headerTabs && headerTabs.map(
                        tab =>
                            <div
                                className='drop-menu__menu-item'
                                key={tab[0]}
                            >
                                <Link to={`${tab[0]}`}>
                                    {tab[1]}
                                </Link>
                            </div>
                    )
                }
            </div>
        </div>
    )
}