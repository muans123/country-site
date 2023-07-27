import image from './logo.png'
import { headerTabs } from "../../constants/headerTabs";

import './Header.sass'

export const Header = () => {
    return (
        <div className='header-background'>
            <div className='header'>
                <div className='header-content'>
                    <div className='header-logo'>
                        <img src={image}></img>
                    </div>
                    <div className='header-nav'>
                        {headerTabs && headerTabs.map(tab => <div key={tab[0]}><a href={`/${tab[0]}`}>{tab[1]}</a></div>)}
                    </div>
                    <div className='header-name'>
                        <h2>Country Explorer</h2>
                    </div>
                </div>
            </div>
            <hr className='header-hr' />
        </div>
    )
}