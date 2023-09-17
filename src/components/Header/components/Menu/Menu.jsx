import { Link } from 'react-router-dom';

import image from './logo.png'
import { headerTabs } from "../../../../constants/headerTabs";

import "./style.sass"

export const Menu = () => {
    return (
        <div className='menu-background'>
            <div className='menu'>
                <div className='menu-content'>
                    <div className='menu-logo'>
                        <img src={image}></img>
                    </div>
                    <div className='menu-nav'>
                        {
                            headerTabs && headerTabs.map(
                                tab =>
                                    <div key={tab[0]}>
                                        <Link to={`${tab[0]}`}>
                                            {tab[1]}
                                        </Link>
                                    </div>
                            )
                        }
                    </div>
                    <div className='menu-name'>
                        <h2>Country Explorer</h2>
                    </div>
                </div>
            </div>
            <hr className='menu-hr' />
        </div>
    )
}