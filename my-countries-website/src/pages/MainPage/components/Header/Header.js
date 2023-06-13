import image from './logo.png'
import './Header.css'

export const Header = () => {
    return (
        <div className='header-background'>
            <div className='header'>
                <div className='header-content'>
                    <div className='header-logo'>
                        <img src={image}></img>
                    </div>
                    <div className='header-nav'>
                        <div>Главная</div>
                        <div>Страны</div>
                        <div>О нас</div>
                        <div>Контакты</div>
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